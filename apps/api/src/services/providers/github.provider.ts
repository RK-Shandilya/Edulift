import { IOAuthProvider, OAuthTokenResponse, OAuthUserProfile } from "@repo/types/index";
import axios from "axios";

export default class GithubProvider implements IOAuthProvider {

    private config = {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        redirectUri: process.env.GITHUB_REDIRECT_URI,
        authUrl: 'https://github.com/login/oauth/authorize',
        tokenUrl: 'https://github.com/login/oauth/access_token',
        userInfoUrl: 'https://api.github.com/user',
        userEmailsUrl: 'https://api.github.com/user/emails',
        scopes: ['user:email'],
    };

    getAuthUrl(): string {
        const params = new URLSearchParams({
            client_id: this.config.clientId ?? "",
            redirect_uri: this.config.redirectUri ?? "",
            scope: this.config.scopes.join(' '),
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
                }),
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );
            return response.data;
        } catch (error) {
            console.error('Github token error:', error);
            throw new Error('Failed to get Github tokens');
        }
    }
    async getUserProfile(accessToken: string): Promise<OAuthUserProfile> {
        try {
            const response = await axios.get<{
                id: string;
                email?: string;
                login: string;
                name: string;
            }>(this.config.userInfoUrl, 
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        Accept: 'application/vnd.github+json',
                    },
                }
            );

            // Get user emails (GitHub requires separate call for verified email)
            const emailsResponse = await axios.get<
                Array<{
                    email: string;
                    verified: boolean;
                    primary: boolean;
                }>
            >(this.config.userEmailsUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: 'application/vnd.github+json',
                },
            });

            const primaryEmail = emailsResponse.data.find((email) => email.primary && email.verified);

            if (!primaryEmail) {
                throw new Error('No verified primary email found for GitHub user');
            }

            let firstName = '';
            let lastName = '';
            if (response.data.name) {
                const nameParts = response.data.name.split(' ');
                firstName = nameParts[0] ?? '';
                lastName = nameParts.slice(1).join(' ') || '';
            }

            return {
                id: response.data.id.toString(),
                email: primaryEmail.email,
                firstName: firstName || response.data.login,
                lastName: lastName,
            };

        } catch (error) {
            console.error('Github profile error:', error);
            throw new Error('Failed to get Github profile');
        }
    }
}