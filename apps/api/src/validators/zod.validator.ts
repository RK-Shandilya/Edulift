import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const zodValidator = (schema: ZodSchema<any>) => 
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({...req.body,});
            next();
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Validation error",
                errors: error
            });
            return;
        }
    };