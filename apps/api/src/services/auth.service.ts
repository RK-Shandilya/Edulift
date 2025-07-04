import AuthRepository from "../repositories/auth.repository";
import bcrypt from "bcryptjs";
import { loginResponse, userLoginData, userRegisterData } from "@repo/types/index";
import jwt, { SignOptions} from "jsonwebtoken";
import { sendEmail } from "../utils/email.util";

export default class AuthService {
    public authRepository;
    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }

    async register(userData: userRegisterData): Promise<Omit<userRegisterData, 'password'>> {
        const userExists = await this.authRepository.getUserByEmail(userData.email);
        if(userExists) {
            throw new Error("User already exists with this email");
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const userDataWithHashedPassword = {
            ...userData,
            password: hashedPassword
        };
        
        const user = await this.authRepository.register(userDataWithHashedPassword);
        const {password, ...userWithoutPassword} = user;

        try {
            await sendEmail({
                to: user.email,
                templateId: process.env.SENDGRID_TEMPLATE_ID!,
                dynamicTemplateData: {
                    firstName: user.firstName,
                    login_link: process.env.SENDGRID_LOGIN_LINK,
                    help_center_link: process.env.SENDGRID_HELP_CENTER_LINK
                }
            });
        } catch (error) {
            console.error("Error sending email:", error);
        }

        return userWithoutPassword;
    }

    async login(userData: userLoginData): Promise<loginResponse> {
        const user = await this.authRepository.getUserByEmail(userData.email);
        if (!user) {
            throw new Error("User not found");
        }

        const isPasswordValid = await bcrypt.compare(userData.password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }

        const accessToken = await this.generateToken(user, "15m");
        const refreshToken = await this.generateToken(user, "7d");

        await this.authRepository.storeRefreshToken(user.id, refreshToken);

        return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            accessToken: accessToken,
            refreshToken: refreshToken
        };
    }

    async generateToken(user: userRegisterData, expiresIn: string): Promise<string> {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET environment variable is not set");
        }
        const payload = {
            id: user.id, 
            email: user.email
        }

        return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn} as SignOptions);
    }

    async logout(refreshToken: string): Promise<void> {
        await this.authRepository.deleteRefreshToken(refreshToken);
    }

    async refreshAccessToken(refreshToken: string): Promise<string> {
        const storedToken = await this.authRepository.getRefreshToken(refreshToken);
        if (!storedToken) throw new Error("Invalid/expired refresh token");

        const user = await this.authRepository.getUserById(storedToken.userId);
        if (!user) throw new Error("User not found");
        return this.generateToken(user, '15m');
    }

    async verifyToken(token: string): Promise<any> {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET environment variable is not set");
        }
        
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error("Invalid token");
        }
    }
}
