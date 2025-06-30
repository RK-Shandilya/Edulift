import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import AuthRepository from "../repositories/auth.repository";

export class AuthController {
    private authService: AuthService;
    
    constructor() {
        this.authService = new AuthService(new AuthRepository());
    }
    
    register = async (req: Request, res: Response) => {
        try {
            console.log("Registering user with data:", req.body);
            const user = await this.authService.register(req.body);
            res.status(201).json({
                message: "User registered successfully",
                user: {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            });
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({
                message: "Error registering user",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}