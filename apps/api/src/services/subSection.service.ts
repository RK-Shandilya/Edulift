import { ISubsection } from "@repo/types/index";
import SubSectionRepository from "../repositories/subSection.repository";
import { uploadToCloudinary } from "../utils/cloudinary.util";

export default class SubSectionService {
    constructor(private subSectionRepository: SubSectionRepository) {
    }

    private validateSubsectionData(data: ISubsection, files: Express.Multer.File[], isUpdate: boolean = false) {
        const { sectionId, title, timeDuration } = data;
        if (!sectionId || !title || !timeDuration) {
            throw new Error("Missing required fields: sectionId, title, timeDuration");
        }
        if ((isUpdate && files.length === 0)) {
            throw new Error("At least one video file is required");
        }
    }

    private async uploadMultipleVideos(files: Express.Multer.File[]): Promise<string[]> {
        const uploadPromises = files.map(file => uploadToCloudinary(file));
        
        try {
          const uploadResults = await Promise.all(uploadPromises);
          return uploadResults.map(result => result.url);
        } catch (error) {
          throw new Error(`Failed to upload videos: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    async createSubsection(data: ISubsection, files: Express.Multer.File[]): Promise<ISubsection | null> {
        this.validateSubsectionData(data, files);
        const section = await this.subSectionRepository.checkSectionExists(data.sectionId);
        if (!section) throw new Error("Section not found");
        if (!data.videoUrls) {
            data.videoUrls = [];
        }
        const videoUrls = await this.uploadMultipleVideos(files);
        data.videoUrls.push(...videoUrls);
        return await this.subSectionRepository.createSubsection(data);
    }

    async updateSubsection(subSectionId: string | undefined, data: Partial<ISubsection>, files: Express.Multer.File[]): Promise<ISubsection> {
        if(!subSectionId)  throw new Error("Subsection ID not provided");
        if (files.length > 0) {
            const videoUrls = await this.uploadMultipleVideos(files);
            
            if (!data.videoUrls) {
              data.videoUrls = [];
            }
            
            data.videoUrls.push(...videoUrls);
        }
        return await this.subSectionRepository.updateSubsection(subSectionId, data);
    }

    async deleteSubsection(subSectionId: string | undefined): Promise<void> {
        if(!subSectionId)  throw new Error("Subsection ID not provided");
        return await this.subSectionRepository.deleteSubsection(subSectionId);
    }
}