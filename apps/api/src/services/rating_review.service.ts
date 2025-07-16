import { IRatingAndReview } from "@repo/types/index";
import RatingReviewRepository from "../repositories/rating_review.repository";

export default class RatingReviewService {
    constructor (private ratingReviewRepository: RatingReviewRepository) {}

    async createRating (data: IRatingAndReview, courseId: string | undefined): Promise<IRatingAndReview> {
        if(!courseId) {
            throw new Error("courseId is required");
        }
        const courseDetails = await this.ratingReviewRepository.isStudentEnrolled(courseId, data.userId);
        if(!courseDetails)  throw new Error("Student is not enrolled in the course");

        const AlreadyReviewed = await this.ratingReviewRepository.isAlreadyReviewed(courseId, data.userId);
        if(AlreadyReviewed)  throw new Error("Student has already reviewed the course");

        const rating_review = await this.ratingReviewRepository.createRating(data);
        return rating_review;
    }

    async updateRating (data: IRatingAndReview, courseId: string | undefined, ratingId: string | undefined): Promise<IRatingAndReview | null> {
        if(!courseId) throw new Error("courseId is required");
        if(!ratingId) throw new Error("ratingId is required");
        const rating = await this.ratingReviewRepository.isAlreadyReviewed(courseId, data.userId);
        if(!rating) throw new Error("ratingnot provided by user");
        const updatedRating = await this.ratingReviewRepository.updateRating({...data, courseId: courseId}, ratingId);
        return updatedRating;
    }

    async deleteReviewAndRating (ratingAndReviewId: string | undefined): Promise<IRatingAndReview | null> {
        if(!ratingAndReviewId) throw new Error("Review Id doesn't Exists");
        const isReviewExists = this.ratingReviewRepository.isReviewExists(ratingAndReviewId);
        if(!isReviewExists) {
            throw new Error ("Review doesn't Exists");
        }
        const response = await this.ratingReviewRepository.deleteRating(ratingAndReviewId);
        return response;
    }

    async getAllReviews () : Promise<IRatingAndReview[]> {
        const reviews = await this.ratingReviewRepository.getAllReviews();
        return reviews;
    }

    async getAvgRating(courseId: string | undefined) {
        if(!courseId) throw new Error("Review Id doesn't Exists");
        const averageRating = await this.ratingReviewRepository.getAvgRating(courseId);
        return averageRating;
    }
}