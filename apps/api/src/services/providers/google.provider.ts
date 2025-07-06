import { IOAuthProvider, OAuthTokenResponse, OAuthUserProfile } from "@repo/types/index";
import axios from "axios";
process.loadEnvFile("../../.env");

export default class GoogleProvider implements IOAuthProvider {

    private config = {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        redirectUri: process.env.GOOGLE_REDIRECT_URI,
        authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
        tokenUrl: 'https://oauth2.googleapis.com/token',
        userInfoUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
        scopes: ['openid', 'email', 'profile'],
    }

    getAuthUrl(): string {
        console.log(this.config);
        const params = new URLSearchParams({
            client_id: this.config.clientId ?? "",
            redirect_uri: this.config.redirectUri ?? "",
            response_type: 'code',
            scope: this.config.scopes.join(' '),
            access_type: 'offline',
            prompt: 'consent',
        });
        return `${this.config.authUrl}?${params.toString()}`;
    }

    async getTokens(code: string): Promise<OAuthTokenResponse> {
        try {
            const response = await axios.post<OAuthTokenResponse>(
                this.config.tokenUrl,
                new URLSearchParams({
                    client_id: this.config.clientId ?? "",
                    client_secret: this.config.clientSecret ?? "",
                    code,
                    redirect_uri: this.config.redirectUri ?? "",
                    grant_type: 'authorization_code',
                }),
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );
            return response.data;
        } catch (error) {
            console.error('Google token error:', error);
            throw new Error('Failed to get Google tokens');
        }
    }
    async getUserProfile(accessToken: string): Promise<OAuthUserProfile> {
        try {
            const response = await axios.get<{
                sub: string;
                email: string;
                given_name?: string;
                family_name?: string;
                picture?: string;
            }>(this.config.userInfoUrl, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            return {
                id: response.data.sub,
                email: response.data.email,
                firstName: response.data.given_name,
                lastName: response.data.family_name,
                picture: response.data.picture,
            };
        } catch (error) {
            console.error('Google profile error:', error);
            throw new Error('Failed to get Google profile');
        }
    }
}