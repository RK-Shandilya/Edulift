import { ISection } from "@repo/types/index";
import SectionRepository from "../repositories/section.repository";

export default class SectionService {
    private sectionRepository: SectionRepository;
    constructor(sectionRepository: SectionRepository) {
        this.sectionRepository = sectionRepository;
    }

    async createSection(data: ISection, userId: string | undefined): Promise<ISection> {
        const { sectionName, courseId } = data;

        if (!sectionName.trim() || !courseId) throw new Error("Missing required fields");
        if(!userId)  throw new Error("User not authenticated");
    
        const course = await this.sectionRepository.checkCourseExists(data.courseId);
        if(!course)  throw new Error("Course not found");
        
        if(course.instructorId !== userId)  throw new Error("Course not owned by user");
        
        const sectionExists = await this.sectionRepository.checkSectionNameExists(courseId, sectionName.trim());
        if (sectionExists) {
            throw new Error("A section with this name already exists in this course");
        }

        return await this.sectionRepository.createSection(data);
    }

    async updateSection( sectionId: string | undefined, data: Partial<ISection>, userId: string | undefined): Promise<ISection> {
        if(!userId)  throw new Error("User not authenticated");
        if(!sectionId)  throw new Error("Section ID not provided");
        
        const section = await this.sectionRepository.getSectionById(sectionId);
        if(!section)  throw new Error("Section not found");
        
        if(section.course?.instructorId !== userId)  throw new Error("Section not owned by user");
        
        return await this.sectionRepository.updateSection(sectionId, data);
    }

    async deleteSection(sectionId: string | undefined, userId: string | undefined): Promise<void> {
        if(!userId)  throw new Error("User not authenticated");
        if(!sectionId)  throw new Error("Section ID not provided");
        
        const section = await this.sectionRepository.getSectionById(sectionId);
        if(!section)  throw new Error("Section not found");
        
        if(section.course?.instructorId !== userId)  throw new Error("Section not owned by user");
        
        return await this.sectionRepository.deleteSection(sectionId);
    }
}