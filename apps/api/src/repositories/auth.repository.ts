import { User, UserRegisterData } from "@repo/types/index"
import { prisma } from "@repo/db/index";

export default class AuthRepository {

    constructor() {

    }

    async getUserByEmail(email: string): Promise<User | null> {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })
            if(!user) {
                return null;
            }
            return user as User;
        } catch (error) {
            throw new Error("Error fetching user by email: " + error);
        }
    }

    async getUserById(user_id: string): Promise<User | null> {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: user_id
                }
            })
            return user as User;
        } catch (error) {
            throw new Error("Error fetching user by ID: " + error);
        }
    }

    async register(userData : UserRegisterData): Promise<UserRegisterData> {
        try {
            const newUser = await prisma.user.create({
                data: {
                    email: userData.email,
                    password: userData.password,
                    firstName: userData.firstName,
                    lastName: userData.lastName
                }
            });
            console.log("New user created:", newUser);
            return newUser;
        } catch (error) {
            throw new Error("Error registering user: " + error);
        }
    }

    async storeRefreshToken(user_id: string, token: string) {
        try {
            await prisma.$transaction(async (tx) => {
                await tx.refreshToken.deleteMany({
                    where: {
                        userId: user_id,
                        expiresAt: {
                            lt: new Date()
                        }
                    },
                })

                await tx.refreshToken.create({
                    data: {
                        token: token,
                        userId: user_id,
                        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    }
                });
            })

            console.log("Refresh token stored successfully for user:", user_id);
        } catch (error) {
            throw new Error("Error storing refresh token: " + error);
        }
    }

    async getRefreshToken(token: string): Promise<{ userId: string; token: string } | null> {
        try {
            const refreshToken = await prisma.refreshToken.findFirst({
                where: {
                    token,
                    revoked: false,
                    expiresAt: {
                        gt: new Date()
                    }
                },
                select: {
                    userId: true,
                    token: true
                }
            });

            return refreshToken;
        } catch (error) {
            throw new Error("Error fetching refresh token: " + error);
        }
    }

    async deleteRefreshToken(token: string): Promise<void> {
        try {
            await prisma.refreshToken.updateMany({
                where: { 
                    token: token,
                    revoked: false
                },
                data: { revoked: true }
            });
            
            console.log("Refresh token deleted successfully");
        } catch (error) {
            throw new Error("Error deleting refresh token: " + error);
        }
    }

    async deleteExpiredRefreshTokens(): Promise<number> {
        try {
            const result = await prisma.refreshToken.deleteMany({
                where: {
                    expiresAt: { lt: new Date() },
                },
            });
            return result.count;
        } catch (error) {
            throw new Error(`Error deleting expired tokens: ${error}`);
        }
    }

    async updatePassword(userId: string, newPassword: string): Promise<void> {
        try {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    password: newPassword
                }
            });
            console.log("Password updated successfully for user:", userId);
        } catch (error) {
            throw new Error("Error updating password: " + error);
        }
    }

    async storeResetToken(userId: string, resetToken: string, reset: Date): Promise<void> {
        try {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    resetToken: resetToken,
                    resetTokenExpiry: reset
                }
            });
            console.log("Reset token stored successfully for user:", userId);
        } catch (error) {
            throw new Error("Error storing reset token: " + error);
        }
    }

    async getPasswordResetToken(token: string): Promise<{ userId: string; token: string } | null> {
        try {
            const user = await prisma.user.findFirst({
                where: {
                    resetToken: token,
                    resetTokenExpiry: {
                        gt: new Date()
                    }
                },
                select: {
                    id: true,
                    resetToken: true
                }
            });

            return user ? { userId: user.id, token: user.resetToken! } : null;
        } catch (error) {
            throw new Error("Error fetching password reset token: " + error);
        }
    }

    async deleteResetToken(userId: string, token: string): Promise<void> {
        try {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    resetToken: null,
                    resetTokenExpiry: null
                }
            });
            console.log("Reset token deleted successfully");
        } catch (error) {
            throw new Error("Error deleting reset token: " + error);
        }
    }
    async deleteUser(userId: string): Promise<void> {
        try {
            await prisma.user.delete({
                where: {
                    id: userId
                }
            });
            console.log("User deleted successfully");
        } catch (error) {
            throw new Error("Error deleting user: " + error);
        }
    }
}