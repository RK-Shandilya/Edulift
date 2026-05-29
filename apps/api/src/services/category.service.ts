import { ICategory } from "@repo/types/index";
import CategoryRepository from "../repositories/category.repository";

export default class CategoryService {
    private categoryRepository: CategoryRepository;
    constructor(categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async createCategory(data: {
        name: string;
        description?: string;
    }): Promise<ICategory> {
        if(!data.name) {
            throw new Error("Category name is required");
        }
        return await this.categoryRepository.createCategory(data);
    }

    async updateCategory(categoryId: string| undefined, data: {
        name: string;
        description?: string;
    }): Promise<ICategory> {
        if(!categoryId) {
            throw new Error("Category ID is required");
        }
        return await this.categoryRepository.updateCategory(categoryId, data);
    }
    async deleteCategory(categoryId: string| undefined): Promise<void> {
        if(!categoryId) {
            throw new Error("Category ID is required");
        }
        return await this.categoryRepository.deleteCategory(categoryId);
    }

    async showAllCategories(): Promise<ICategory[]> {
        return await this.categoryRepository.showAllCategories();
    }
}