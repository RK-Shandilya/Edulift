import { prisma } from "@repo/db/index";
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
}