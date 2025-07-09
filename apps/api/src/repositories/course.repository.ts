import { prisma } from "@repo/db/index";
import { ICourse } from "@repo/types/index";

export default class CourseRepository {
    constructor() {}

    async createCourse(data: Omit<ICourse, "id">, userId: string): Promise<ICourse> {
        try {
            const { whatYouWillLearn, ...restData } = data;
            
            const course = await prisma.course.create({
                data: {
                    ...restData,
                    whatYouWillLearn: whatYouWillLearn || undefined,
                    instructorId: userId
                }
            });
            
            return {
                ...course,
                whatYouWillLearn: course.whatYouWillLearn ?? undefined,
                thumbnail: course.thumbnail ?? undefined,
                categoryId: course.categoryId ?? undefined
            };
        } catch (error) {
            throw new Error("Error creating course: " + error);
        }
    }
}