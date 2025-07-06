import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import AuthRepository from "../repositories/auth.repository";
import OAuthService from "../services/oauth.service";

export class AuthController {
    private authService: AuthService;
    private oauthService: OAuthService;
    
    constructor() {
        this.authService = new AuthService(new AuthRepository());
        this.oauthService = new OAuthService();
    }
    
    register = async (req: Request, res: Response) => {
        try {
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

    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const loginResponse = await this.authService.login(req.body);
            res.status(200)
            .cookie("accessToken", loginResponse.accessToken,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 15 * 60 * 1000,
                sameSite: 'strict'
            })
            .json({
                message: "User logged in successfully",
                user: {
                    id: loginResponse.id,
                    email: loginResponse.email,
                    firstName: loginResponse.firstName,
                    lastName: loginResponse.lastName,
                },
                tokens :{
                    accessToken: loginResponse.accessToken,
                    refreshToken: loginResponse.refreshToken
                }
            });
        } catch (error) {
            console.error("Error logging in user:", error);
            res.status(500).json({
                message: "Error logging in user",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }

    refreshToken = async (req: Request, res: Response) => {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken) {
                res.status(400).json({ 
                    message: "Refresh token is required",
                    error: "Missing refresh token" 
                });
                return;
            }

            const accessToken = await this.authService.refreshAccessToken(refreshToken);
            
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 15 * 60 * 1000,
                sameSite: 'strict'
            });

            res.status(200).json({ message: "Token refreshed", accessToken: accessToken  });
        } catch (error) {
            res.status(401).json({ error: error });
        }
    };

    logout = async (req: Request, res: Response) => {
        try {
            const { refreshToken } = req.body;
            await this.authService.logout(refreshToken);
            res.clearCookie('accessToken');
            res.status(200).json({ message: "Logged out" });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    };

    forgotPassword = async (req: Request, res: Response) => {
        try {
            const { email } = req.body;
            await this.authService.forgotPassword(email);
            res.status(200).json({ message: "Password reset email sent" });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    resetPassword = async (req: Request, res: Response) => {
        try {
            const { password, confirmPassword } = req.body;
            if (confirmPassword !== password) {
                res.json({
                    success: false,
                    message: "Password and Confirm Password Does not Match",
                });
                return;
		    }

            const token = req.params.token;

            if(!token) {
                res.status(400).json({ 
                    message: "Reset token is required",
                    error: "Missing reset token" 
                });
                return;
            }

            await this.authService.resetPassword(token, password);
            res.status(200).json({ message: "Password reset successfully" });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    oauthRedirect = async (req: Request, res: Response) => {
        try {
            const provider = req.params.provider;
            if(!provider) {
                res.status(400).json({ 
                    message: "OAuth provider is required",
                    error: "Missing OAuth provider" 
                });
                return;
            }
            const url = this.oauthService.getProvider(provider).getAuthUrl();
            res.redirect(url);
        } catch (error) {
            res.status(400).json({ 
                message: "Invalid OAuth provider",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }

    oauthCallback = async (req: Request, res: Response) => {
        try {
            const provider = req.params.provider;
            const { code } = req.query;

            const { user, tokens } = await this.oauthService.handleCallback(provider, code);
            
            res.status(200)
                .cookie("accessToken", tokens.accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 15 * 60 * 1000,
                sameSite: 'strict'
                })
                .json({
                message: `${provider} OAuth successful`,
                user: {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                },
                tokens: {
                    accessToken: tokens.accessToken,
                    refreshToken: tokens.refreshToken
                }
            });
        } catch (error) {
            res.status(500).json({ 
                message: "OAuth authentication failed",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}