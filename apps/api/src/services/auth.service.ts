import AuthRepository from "../repositories/auth.repository";
import bcrypt from "bcryptjs";
import { userData } from "@repo/types/index";

export default class AuthService {
    private authRepository;
    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }
    async register(userData: userData): Promise<userData> {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
        console.log("hashedPassword", hashedPassword);
        const user = await this.authRepository.register(userData);
        return user;
    }
}
