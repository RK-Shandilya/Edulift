import { IOAuthProvider, userRegisterData } from "@repo/types/index";
import AuthService from "./auth.service";
import AuthRepository from "../repositories/auth.repository";
import GoogleProvider from "./providers/google.provider";
import GithubProvider from "./providers/github.provider";

export default class OAuthService {
    private authService: AuthService;
    constructor() {
        this.authService = new AuthService(new AuthRepository());
    }

    private providers: Record<string, IOAuthProvider> = {
        google: new GoogleProvider(),
        github: new GithubProvider(),
    }

    getProvider(providerName: string | undefined): IOAuthProvider {
        if (!providerName) {
            throw new Error("OAuth provider is required");
        }
        const provider = this.providers[providerName.toLowerCase()];
        if (!provider) throw new Error(`Unsupported OAuth provider: ${providerName}`);
        return provider;
    }

    async handleCallback(providerName: string | undefined, code: unknown): Promise<{
        user: Omit<userRegisterData, 'password'>,
        tokens: { accessToken: string, refreshToken: string}
    }> {
        if (!providerName) {
            throw new Error("OAuth provider is required");
        }

        if (!code || typeof code !== 'string') {
            throw new Error("Authorization code is required");
        }

        const provider = this.getProvider(providerName);
        try {
            const { access_token } = await provider.getTokens(code);
            const userProfile = await provider.getUserProfile(access_token);
            let user = await this.authService.authRepository.getUserByEmail(userProfile.email);
            if (!user) {
                user = await this.authService.authRepository.register({
                    id: userProfile.id,
                    email: userProfile.email,
                    firstName: userProfile.firstName || '',
                    lastName: userProfile.lastName || '',
                    password: '',
                });
            }
            const accessToken = await this.authService.generateToken(user, '15m');
            const refreshToken = await this.authService.generateToken(user, '7d');
            await this.authService.authRepository.storeRefreshToken(user.id, refreshToken);
            return {
                user,
                tokens: {
                    accessToken,
                    refreshToken
                },
            }
        } catch (error) {
            throw new Error("Error handling Google OAuth callback: " + error);
        }
    }
};