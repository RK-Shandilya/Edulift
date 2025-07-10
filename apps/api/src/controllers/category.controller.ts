import { Request, Response } from "express";
import CategoryService from "../services/category.service";
import CategoryRepository from "../repositories/category.repository";

const categoryService = new CategoryService(new CategoryRepository());

export default class Category {
    private categoryService: CategoryService
    constructor(){
        this.categoryService = categoryService
    }   

    createCategory = async (req: Request, res:Response): Promise<void> => {
        try {
            await this.categoryService.createCategory(req.body);
            res.status(201).json({
                success: true,
                message: "Category created successfully"
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error creating category",
            })
        }
    }

    showAllCategories = async (req: Request, res:Response): Promise<void> => {
        try {
            const categories = await this.categoryService.showAllCategories();
            res.status(200).json({
                success: true,
                message: "Categories fetched successfully",
                data: categories
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error fetching categories",
            })
        }
    }
}