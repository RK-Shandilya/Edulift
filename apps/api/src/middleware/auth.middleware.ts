import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

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
        console.log(decoded);
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ message: "Invalid or expired token" });
    }
}
