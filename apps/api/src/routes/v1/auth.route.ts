import express, { Router } from "express";
import { AuthController } from "../../controllers/auth.controller";
import { zodValidator } from "../../validators/zod.validator";
import {z} from "zod";
export const userDataSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    firstName: z.string().min(1, "firstName is required"),
    lastName: z.string().min(1, "lastName is required")
})
const authRouter: Router = express.Router();

const authController = new AuthController();

authRouter.post("/", zodValidator(userDataSchema),authController.register);

export default authRouter;