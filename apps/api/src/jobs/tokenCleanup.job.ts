import AuthRepository from "../repositories/auth.repository";

export const cleanOldRefreshTokens = async () => {
    try {
        const authRepository = new AuthRepository();
        const deletedCount = await authRepository.deleteExpiredRefreshTokens();
        console.info(`Deleted ${deletedCount} expired refresh tokens.`);
    } catch (error) {
        console.error("Error cleaning old refresh tokens:", error);
    }
};