export interface BaseUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

export interface User extends BaseUser {
    password: string;
    resetToken?: string;
    resetTokenExpiry?: Date;
}

export interface UserRegisterData extends BaseUser {
    password: string;
}

export interface UserLoginData {
    email: string;
    password: string;
}

export interface LoginResponse extends BaseUser {
    accessToken: string;
    refreshToken: string;
}

export interface OAuthUserProfile {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
}

export interface OAuthTokenResponse {
    access_token: string;
    expires_in: number;
    refresh_token?: string;
    scope: string;
    token_type: string;
    id_token?: string;
}

export interface IOAuthProvider {
    getAuthUrl(): string;
    getTokens(code: string): Promise<OAuthTokenResponse>;
    getUserProfile(accessToken: string): Promise<OAuthUserProfile>;
}

export interface EmailOptions {
    to: string;
    templateId: string;
    dynamicTemplateData: {
        firstName: string;
        help_center_link?: string;
        login_link?: string;
        resetLink?: string;
        expirationTime?: string;
    }
}