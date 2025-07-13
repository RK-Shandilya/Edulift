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
    accountType?: string;
    isActive?: boolean;
    isApproved?: boolean;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
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

export interface ICourse {
    id?: string;
    courseName: string;
    courseDescription: string;
    whatYouWillLearn?: string | null;
    price: number;
    thumbnail?: string | null;
    tag: string[];
    instructions: string[];
    status: "Draft" | "Published";
    instructorId: string;
    createdAt?: Date;
    updatedAt?: Date;
    categoryId?: string | null;
}

export interface ICouseRelations extends ICourse {
    studentsEnrolled?: User[];
    category?: ICategory;
    sections?: ISection[];
    ratings?: IRatingAndReview[];
    CourseProgress?: ICourseProgress[];
}

export interface ICategory {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ISection {
    id?: string;
    sectionName: string;
    courseId: string;
    subsections?: ISubsection[];
    course?: ICouseRelations;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ISubsection {
    id?: string;
    title: string;
    sectionId: string;
    timeDuration: string;
    description?: string | null;
    videoUrls: string[];
    courseProgressId?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IRatingAndReview {
    id?: string;
    rating: number;
    review: string;
    courseId: string;
    userId: string;
    createdAt?: Date;
}

export interface ICourseProgress {
    id?: string;
    courseId: string;
    userId: string;
    completedVideos?: ISubsection[];
    createdAt?: Date;
    updatedAt?: Date;
}