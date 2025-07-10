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

    async showAllCategories(): Promise<ICategory[]> {
        return await this.categoryRepository.showAllCategories();
    }
}