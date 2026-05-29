import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import AuthRepository from "../repositories/auth.repository";

interface IJwtPayload extends JwtPayload {
  id: string;
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET!) as IJwtPayload;
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ message: "Invalid or expired token" });
    }
}

export const isInstructor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const authRepository = new AuthRepository();
        const user = await authRepository.getUserById(req.userId!);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        if (user.accountType !== "instructor") {
            res.status(403).json({ message: "Access denied" });
            return;
        }

        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ message: "Invalid or expired token" });
    }
}

export const isAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const authRepository = new AuthRepository();
        const user = await authRepository.getUserById(req.userId!);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        if (user.accountType !== "admin") {
            res.status(403).json({ message: "Access denied" });
            return;
        }

        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ message: "Invalid or expired token" });
    }
}