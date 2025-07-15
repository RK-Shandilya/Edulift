import prisma from "@repo/db/index";
import { ICategory } from "@repo/types/index";

export default class CategoryRepository {
    constructor() {}

    async createCategory(data: {
        name: string;
        description?: string;
    }): Promise<ICategory> {
        return await prisma.category.create({
            data: {
                name: data.name,
                description: data.description,
            },
        });
    }

    async showAllCategories(): Promise<ICategory[]> {
        return await prisma.category.findMany();
    }

    async getCategoryById(categoryId: string): Promise<ICategory | null> {
        return await prisma.category.findUnique({
            where: {
                id: categoryId,
            },
        });
    }

    async updateCategory(categoryId: string, data: {
        name: string;
        description?: string;
    }): Promise<ICategory> {
        return await prisma.category.update({
            where: {
                id: categoryId,
            },
            data: {
                name: data.name,
                description: data.description,
            }
        })
    }

    async deleteCategory(categoryId: string): Promise<void> {
        await prisma.category.delete({
            where: {
                id: categoryId,
            }
        })
    }
}