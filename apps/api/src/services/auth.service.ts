import AuthRepository from "../repositories/auth.repository";
import bcrypt from "bcryptjs";
import { LoginResponse, User, UserLoginData, UserRegisterData } from "@repo/types/index";
import jwt, { SignOptions} from "jsonwebtoken";
import { sendEmail } from "../utils/email.util";
import crypto from "crypto";

export default class AuthService {
    public authRepository;
    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }

    async register(userData: UserRegisterData): Promise<Omit<UserRegisterData, 'password'>> {
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

    async login(userData: UserLoginData): Promise<LoginResponse> {
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

    async forgotPassword(email: string) : Promise<void> {
        const user = await this.authRepository.getUserByEmail(email);
        if(!user) {
            console.warn(`Password reset attempted for non-existent email: ${email}`);
            return;
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000);
        
        try {
            await this.authRepository.storeResetToken(user.id, resetToken, resetTokenExpiry);
            await sendEmail({
                to: user.email,
                templateId: process.env.SENDGRID_TEMPLATE_ID!,
                dynamicTemplateData: {
                    firstName: user.firstName,
                    resetLink: `${process.env.APP_URL}/reset-password?token=${resetToken}`,
                    expirationTime: '15 minutes'
                }
            })
        } catch (error) {
            console.error("Error sending email:", error);
        }
    }

    async resetPassword(resetToken: string, password: string): Promise<void> {
        const tokenData = await this.authRepository.getPasswordResetToken(resetToken);
        if (!tokenData) {
            throw new Error("Invalid or expired reset token");
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        await this.authRepository.updatePassword(tokenData.userId, hashedPassword);
        await this.authRepository.deleteResetToken(tokenData.userId, resetToken);
    }

    async generateToken(user: User, expiresIn: string): Promise<string> {
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
}
