import { Request, Response } from "express";
import SubSectionService from "../services/subSection.service";
import SubSectionRepository from "../repositories/subSection.repository";

const subSectionService = new SubSectionService(new SubSectionRepository());

export default class SubSectionController {
    private subSectionService: SubSectionService
    constructor() {
        this.subSectionService = subSectionService;
    }

    private getVideoFiles(req: Request): Express.Multer.File[] {
        if (!req.files) return [];
        
        if (Array.isArray(req.files)) {
            return req.files;
        }
        
        if ('videos' in req.files) {
            return req.files['videos'];
        }
        
        return Object.values(req.files).flat();
    }


    async createSubsection(req: Request, res: Response): Promise<void> {
        try {
            const files = this.getVideoFiles(req);
            const subSection = await this.subSectionService.createSubsection(req.body, files );
            res.status(201).json({
                success: true,
                message: "Subsection created successfully",
                data: subSection
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error creating subsection",
                error: error instanceof Error ? error.message : String(error)
            }); 
        }
    }

    async updateSubsection(req: Request, res: Response): Promise<void> {
        try {
            const files = this.getVideoFiles(req);
            const subSection = await this.subSectionService.updateSubsection(
                req.params.subSectionId,
                req.body,
                files
            );
            res.status(200).json({
                success: true,
                message: "Subsection updated successfully",
                data: subSection
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error updating subsection",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }

    async deleteSubsection(req: Request, res: Response): Promise<void> {
        try {
            await this.subSectionService.deleteSubsection(req.params.subSectionId);
            res.status(200).json({
                success: true,
                message: "Subsection deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error deleting subsection",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}