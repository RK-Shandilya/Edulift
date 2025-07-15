import prisma from "@repo/db/index";
import { ICourse } from "@repo/types/index";

export default class CourseRepository {
    constructor() {}

    async createCourse(data: Omit<ICourse, "id">, userId: string): Promise<ICourse> {
        try {
            const { whatYouWillLearn, categoryId, ...restData } = data;
            
            const course = await prisma.course.create({
                data: {
                    ...restData,
                    whatYouWillLearn: whatYouWillLearn || null,
                    categoryId: categoryId || null,
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
            throw new Error("Error creating course: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }

    async getAllCourses(): Promise<ICourse[]> {
        try {
            const courses = await prisma.course.findMany({
                where: { status: "Published" },
                include: {
                    instructor: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            email: true
                        }
                    }
                }
            });

            return courses.map(course => ({
                ...course,
                whatYouWillLearn: course.whatYouWillLearn ?? undefined,
                thumbnail: course.thumbnail ?? undefined,
                categoryId: course.categoryId ?? undefined
            }));
        } catch (error) {
            throw new Error("Error fetching courses: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }

    async getCourseById(courseId: string): Promise<ICourse | null> {
        try {
            const course = await prisma.course.findUnique({
                where: { id: courseId },
                include: {
                    instructor: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            email: true
                        }
                    },
                    category: true,
                    sections: {
                        include: {
                            subsections: true
                        }
                    }
                }
            });

            if (!course) return null;

            return {
                ...course,
                whatYouWillLearn: course.whatYouWillLearn ?? undefined,
                thumbnail: course.thumbnail ?? undefined,
                categoryId: course.categoryId ?? undefined
            };
        } catch (error) {
            throw new Error("Error fetching course: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }

    async getInstructorCourses(instructorId: string): Promise<ICourse[]> {
        try {
            const courses = await prisma.course.findMany({
                where: { instructorId },
                orderBy: { createdAt: 'desc' }
            });

            return courses.map(course => ({
                ...course,
                whatYouWillLearn: course.whatYouWillLearn ?? undefined,
                thumbnail: course.thumbnail ?? undefined,
                categoryId: course.categoryId ?? undefined
            }));
        } catch (error) {
            throw new Error("Error fetching instructor courses: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }

    async updateCourse(courseId: string, data: Partial<ICourse>): Promise<ICourse> {
        try {
            const course = await prisma.course.update({
                where: { id: courseId },
                data: {
                    ...data,
                    updatedAt: new Date()
                }
            });

            return {
                ...course,
                whatYouWillLearn: course.whatYouWillLearn ?? undefined,
                thumbnail: course.thumbnail ?? undefined,
                categoryId: course.categoryId ?? undefined
            };
        } catch (error) {
            throw new Error("Error updating course: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }

    async deleteCourse(courseId: string): Promise<void> {
        try {
            await prisma.course.delete({
                where: { id: courseId }
            });
        } catch (error) {
            throw new Error("Error deleting course: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }

    async mostSellingCourses(): Promise<ICourse[]> {
        try {
            const courses = await prisma.course.findMany({
                where: {
                    status: "Published"
                },
                orderBy: {
                    studentsEnrolled: {
                        _count: 'desc'
                    }
                },
                take: 10,
                include: {
                    instructor: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            email: true
                        }
                    }
                }
            });

            return courses.map(course => ({
                ...course,
                whatYouWillLearn: course.whatYouWillLearn ?? undefined,
                thumbnail: course.thumbnail ?? undefined,
                categoryId: course.categoryId ?? undefined
            }));
        } catch (error) {
            throw new Error("Error fetching most selling courses: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }

    async checkCourseExists(courseId: string): Promise<ICourse | null> {
        try {
            const course = await prisma.course.findUnique({
                where: { id: courseId }
            });
            return course ? {
                ...course,
                whatYouWillLearn: course.whatYouWillLearn ?? undefined,
                thumbnail: course.thumbnail ?? undefined,
                categoryId: course.categoryId ?? undefined
            } : null;
        } catch (error) {
            throw new Error("Error checking course existence: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }

    async checkCategoryExists(categoryId: string): Promise<boolean> {
        try {
            const category = await prisma.category.findUnique({
                where: { id: categoryId }
            });
            return !!category;
        } catch (error) {
            throw new Error("Error checking category existence: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }

    async checkInstructorExists(userId: string): Promise<boolean> {
        try {
            const instructor = await prisma.user.findUnique({
                where: { 
                    id: userId,
                    accountType: "Instructor" 
                }
            });
            return !!instructor;
        } catch (error) {
            throw new Error("Error checking instructor existence: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }
}