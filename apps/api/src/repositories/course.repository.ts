import { prisma } from "@repo/db/index";
import { ICourse } from "@repo/types/index";

export default class CourseRepository {
    constructor() {}

    async createCourse(data: Omit<ICourse, "id">, userId: string): Promise<ICourse> {
        try {
            const { whatYouWillLearn, categoryId, ...restData } = data;
            
            if (categoryId) {
                const categoryExists = await prisma.category.findUnique({
                    where: { id: categoryId }
                });
                if (!categoryExists) {
                    throw new Error("Category Details Not Found");
                }
            }

            const instructorDetails = await prisma.user.findUnique({
                where: { 
                    id: userId,
                    accountType: "Instructor" 
                }
            });

            if (!instructorDetails) {
                throw new Error("Instructor Details Not Found");
            }

            const course = await prisma.$transaction(async (tx) => {
                const newCourse = await tx.course.create({
                    data: {
                        ...restData,
                        whatYouWillLearn: whatYouWillLearn || null,
                        categoryId: categoryId || null,
                        instructorId: userId
                    }
                });

                await tx.user.update({
                    where: { id: userId },
                    data: {
                        coursesCreated : {
                            connect: { id: newCourse.id }
                        }
                    }
                });

                if (categoryId) {
                    await tx.category.update({
                        where: { id: categoryId },
                        data: {
                            courses: {
                                connect: { id: newCourse.id }
                            }
                        }
                    });
                }

                return newCourse;
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
                            subSections: true
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
            await prisma.$transaction(async (tx) => {
                const users = await tx.user.findMany({
                    where: {
                        enrolledCourses: {
                            some: {
                                id:courseId
                            }
                        }
                    },
                    select: {id: true}
                })

                for(const user of users) {
                    await tx.user.update({
                        where: { id: user.id },
                        data: {
                            enrolledCourses: {
                                disconnect: {
                                    id: courseId
                                }
                            }
                        }
                    });
                }

                await tx.subSection.deleteMany({
                    where: {
                        section: {
                            courseId: courseId
                        }
                    }
                })

                await tx.section.deleteMany({
                    where: {
                        courseId: courseId
                    }
                })

                await tx.course.delete({
                    where: {
                        id: courseId
                    }
                })
            })
        } catch (error) {
            throw new Error("Error deleting course: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }
}