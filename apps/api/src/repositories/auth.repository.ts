import { userData } from "@repo/types/index"
import { prisma } from "@repo/db/index";

export default class AuthRepository {
    async register(userData : userData): Promise<userData> {
        try {
            if(!userData || !userData.email || !userData.password || !userData.firstName || !userData.lastName) {
                throw new Error("Invalid user data");
            }
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
}