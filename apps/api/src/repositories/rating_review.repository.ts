import { ICourse, IRatingAndReview } from "@repo/types/index";
import prisma from "@repo/db/index"

export default class RatingReviewRepository {
    constructor() {}

    async isReviewExists (ratingId: string) : Promise<IRatingAndReview | null> {
        const ratingAndReview = await prisma.ratingAndReview.findFirst({
            where: {
                id: ratingId
            }
        })
        return ratingAndReview;
    }

    async isAlreadyReviewed(courseId: string, userId: string): Promise<IRatingAndReview | null> {
        const ratingAndReview = await prisma.ratingAndReview.findFirst({
            where: {
                courseId: courseId,
                userId: userId
            }
        })
        return ratingAndReview;
    }

    async isStudentEnrolled(courseId: string, userId: string): Promise<ICourse | null> {
        const enrolledCourse = await prisma.course.findFirst({
            where: {
                id: courseId,
                studentsEnrolled: {
                    some: {
                        id: userId
                    }
                }
            },
            
        });
        return enrolledCourse;
    }

    async createRating (data: IRatingAndReview): Promise<IRatingAndReview> {
        const ratingReview = await prisma.ratingAndReview.create({
            data: {
                ...data
            }
        });
        return ratingReview;
    }

    async updateRating (data: IRatingAndReview, ratingId: string): Promise<IRatingAndReview | null> {
        const updatedRatingAndReview = await prisma.ratingAndReview.update({
            where: {
                id: ratingId
            },
            data: {
                ...data
            }
        })
        return updatedRatingAndReview;
    }

    async deleteRating (ratingId: string): Promise<IRatingAndReview | null> {
        const response = await prisma.ratingAndReview.delete({
            where: {
                id: ratingId
            }
        })
        return response;
    }

    async getAllReviews (): Promise<IRatingAndReview[]> {
        const response = await prisma.ratingAndReview.findMany({});
        return response;
    }

    async getAvgRating(courseId: string): Promise<{_avg: {rating: number | null}}> {
        const ratings = await prisma.ratingAndReview.aggregate({
            where: {
                courseId: courseId
            },
            _avg: {
                rating: true
            }
        })
        return ratings;
    }
}