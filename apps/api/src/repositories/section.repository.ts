import prisma from "@repo/db/index";
import { ICourse, ISection } from "@repo/types/index";

export default class SectionRepository {
    constructor() {}

    async getSectionById(sectionId: string): Promise<ISection | null> {
        const section = await prisma.section.findUnique({
            where: {
                id: sectionId
            },
            include: {
                course: true
            }
        })
        return section;
    }

    async checkCourseExists(courseId: string): Promise<ICourse | null> {
        const course = await prisma.course.findUnique({
            where: {
                id: courseId
            }
        })
        return course
    }

    async checkSectionNameExists(courseId: string, sectionName: string): Promise<boolean> {
        const existingSection = await prisma.section.findFirst({
            where: {
                courseId,
                sectionName
            }
        });
        return !!existingSection;
    }

    async createSection(data: ISection): Promise<ISection> {
        const section = await prisma.section.create({
            data: {
                sectionName: data.sectionName,
                courseId: data.courseId
            }
        });
        
        return section;
    }

    async updateSection(sectionId: string, data: Partial<ISection>): Promise<ISection> {
        const section = await prisma.section.update({
            where: {
                id: sectionId
            },
            data: {
                sectionName: data.sectionName,
                courseId: data.courseId
            }
        });
        
        return section;
    }

    async deleteSection(sectionId: string): Promise<void> {
        await prisma.section.delete({
            where: {
                id: sectionId
            }
        });
    }
}