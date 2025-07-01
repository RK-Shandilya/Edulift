import { userRegisterData } from "@repo/types/index"
import { prisma } from "@repo/db/index";

export default class AuthRepository {

    async getUserByEmail(email: string): Promise<userRegisterData | null> {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })
            return user;
        } catch (error) {
            throw new Error("Error fetching user by email: " + error);
        }
    }

    async getUserById(user_id: string): Promise<userRegisterData | null> {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: user_id
                }
            })
            return user;
        } catch (error) {
            throw new Error("Error fetching user by ID: " + error);
        }
    }

    async register(userData : userRegisterData): Promise<userRegisterData> {
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
                await tx.refreshToken.updateMany({
                    where: {
                        userId: user_id,
                        revoked: false
                    },
                    data: {
                        revoked: true
                    }
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

    async getRefreshToken(token: string): Promise<{ userId: string } | null> {
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
                    userId: true
                }
            });

            return refreshToken;
        } catch (error) {
            throw new Error("Error fetching refresh token: " + error);
        }
    }

    async deleteRefreshToken(token: string): Promise<void> {
        try {
            await prisma.refreshToken.update({
                where: {
                    token: token
                },
                data: {
                    revoked: true
                }
            });
            console.log("Refresh token deleted successfully");
        } catch (error) {
            throw new Error("Error deleting refresh token: " + error);
        }
    }

    async deleteAllRefreshTokensForUser(userId: string): Promise<void> {
        try {
            await prisma.refreshToken.updateMany({
                where: {
                    userId: userId,
                    revoked: false
                },
                data: {
                    revoked: true
                }
            });
            console.log("All refresh tokens revoked for user:", userId);
        } catch (error) {
            throw new Error("Error revoking all refresh tokens: " + error);
        }
    }
}