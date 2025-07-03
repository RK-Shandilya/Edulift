import express, { Router } from "express";
import { AuthController } from "../../controllers/auth.controller";
import { zodValidator } from "../../validators/zod.validator";
import { loginSchema, refreshTokenSchema, registerSchema } from "../../schemas/auth.schema";

const authRouter: Router = express.Router();

const authController = new AuthController();

authRouter.post("/", zodValidator(registerSchema),authController.register);
authRouter.post("/login", zodValidator(loginSchema), authController.login);
authRouter.post("/refresh-token", zodValidator(refreshTokenSchema),authController.refreshToken);
authRouter.post("/logout", zodValidator(refreshTokenSchema), authController.logout);

authRouter.get(":provider", authController.oauthRedirect);
authRouter.get(":provider/callback", authController.oauthCallback);

export default authRouter;