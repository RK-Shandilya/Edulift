import { prisma } from "@repo/db/index";
import { ISection, ISubsection } from "@repo/types/index";

export default class SubSectionRepository {
    constructor() {}

    async checkSectionExists(sectionId: string): Promise<ISection | null> {
        try {
            const section = await prisma.section.findUnique({
                where: {
                    id: sectionId
                }
            });
            return section;
        } catch (error) {
            throw new Error(`Error checking section existence: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    async createSubsection(data: ISubsection): Promise<ISubsection | null> {
        try {
            const subSection = await prisma.subsection.create({
                data: {
                    title: data.title,
                    timeDuration: data.timeDuration,
                    description: data.description || "",
                    sectionId: data.sectionId,
                    videoUrls: data.videoUrls || [],
                }
            });
            return subSection;
        } catch (error) {
            throw new Error(`Error creating subsection: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    async updateSubsection(subSectionId: string, data: Partial<ISubsection>): Promise<ISubsection> {
        try {
            const existingSubsection = await prisma.subsection.findUnique({
                where: { id: subSectionId }
            });

            if (!existingSubsection) {
                throw new Error("Subsection not found");
            }

            const updateData: any = {};
            
            if (data.title !== undefined) updateData.title = data.title;
            if (data.timeDuration !== undefined) updateData.timeDuration = data.timeDuration;
            if (data.description !== undefined) updateData.description = data.description;
            if (data.videoUrls !== undefined) updateData.videoUrls = data.videoUrls;

            const subSection = await prisma.subsection.update({
                where: {
                    id: subSectionId
                },
                data: updateData
            });
            
            return subSection;
        } catch (error) {
            throw new Error(`Error updating subsection: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    async deleteSubsection(subSectionId: string): Promise<void> {
        try {
            await prisma.subsection.delete({
                where: {
                    id: subSectionId
                }
            });
        } catch (error) {
            throw new Error(`Error deleting subsection: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    async getSubsectionById(subSectionId: string): Promise<ISubsection | null> {
        try {
            const subSection = await prisma.subsection.findUnique({
                where: {
                    id: subSectionId
                },
                include: {
                    section: {
                        select: {
                            id: true,
                            sectionName: true,
                            courseId: true
                        }
                    }
                }
            });
            return subSection;
        } catch (error) {
            throw new Error(`Error retrieving subsection: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    async getSubsectionsBySectionId(sectionId: string): Promise<ISubsection[]> {
        try {
            const subsections = await prisma.subsection.findMany({
                where: {
                    sectionId: sectionId
                },
                orderBy: {
                    createdAt: 'asc'
                }
            });
            return subsections;
        } catch (error) {
            throw new Error(`Error retrieving subsections: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}