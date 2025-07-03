export interface userRegisterData {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface userLoginData {
    email: string;
    password: string;
    accessToken?: string;
    refreshToken?: string;
}

export interface loginResponse extends Omit<userRegisterData, 'password' | 'id'> {
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