import { Router } from "express";
import { isAdmin, verifyToken } from "../../middleware/auth.middleware";
import CategoryController from "../../controllers/category.controller";
import { CategorySchema } from "../../schemas/category.schema";
import { zodValidator } from "../../validators/zod.validator";

const categoryController = new CategoryController();

const categoryRoutes: Router = Router();

categoryRoutes.post("/", zodValidator(CategorySchema), verifyToken, isAdmin, categoryController.createCategory);
categoryRoutes.put("/:categoryId", zodValidator(CategorySchema), verifyToken, isAdmin, categoryController.updateCategory);
categoryRoutes.delete("/:categoryId", verifyToken, isAdmin, categoryController.deleteCategory);
categoryRoutes.get("/", verifyToken, categoryController.showAllCategories);

export default categoryRoutes;