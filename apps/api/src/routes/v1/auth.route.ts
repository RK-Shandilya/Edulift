import express, { Router } from "express";
import { AuthController } from "../../controllers/auth.controller";
import { zodValidator } from "../../validators/zod.validator";
import { forgotPasswordSchema, loginSchema, refreshTokenSchema, registerSchema, resetPasswordSchema } from "../../schemas/auth.schema";
import { verifyToken } from "../../middleware/auth.middleware";
import { verifyOtpSchema } from "../../schemas/otp.schema";

const authRouter: Router = express.Router();

const authController = new AuthController();

authRouter.post("/", zodValidator(registerSchema),authController.register);
authRouter.post("/verify-otp", zodValidator(verifyOtpSchema),authController.verifyOtp);
authRouter.post("/resend-otp", zodValidator(verifyOtpSchema),authController.resendOtp);

authRouter.post("/login", zodValidator(loginSchema), authController.login);
authRouter.post("/refresh-token", zodValidator(refreshTokenSchema),authController.refreshToken);
authRouter.post("/logout", verifyToken, zodValidator(refreshTokenSchema), authController.logout);

authRouter.post("/forgot-password", zodValidator(forgotPasswordSchema), authController.forgotPassword);
authRouter.post("/reset-password/:token", zodValidator(resetPasswordSchema), authController.resetPassword);

authRouter.delete("/delete-user", authController.deleteUser);

authRouter.get("/:provider", authController.oauthRedirect);
authRouter.get("/:provider/callback", authController.oauthCallback);

export default authRouter;