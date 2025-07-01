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