import { Request, Response } from "express";
import SectionService from "../services/section.service";
import SectionRepository from "../repositories/section.repository";

const sectionService = new SectionService(new SectionRepository());

export default class SectionController {
    private sectionService: SectionService
    constructor() {
        this.sectionService = sectionService;
    }

    createSection = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.userId;
            const section = await this.sectionService.createSection({
                ...req.body,
                courseId: req.params.courseId
            }, userId);
            res.status(201).json({
                success: true,
                message: "Section created successfully",
                data: section
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error creating section",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }

    updateSection = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.userId;
            const section = await this.sectionService.updateSection(req.params.sectionId, {
                ...req.body,
                courseId: req.params.courseId
            }, userId);
            res.status(200).json({
                success: true,
                message: "Section updated successfully",
                data: section
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error updating section",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }

    deleteSection = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.userId;
            await this.sectionService.deleteSection(req.params.sectionId, userId);
            res.status(200).json({
                success: true,
                message: "Section deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error deleting section",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}