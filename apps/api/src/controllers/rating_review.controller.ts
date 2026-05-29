import { Request, Response } from "express";
import RatingReviewService from "../services/rating_review.service";
import RatingReviewRepository from "../repositories/rating_review.repository";

const ratingReviewService = new RatingReviewService(new RatingReviewRepository());

export default class RatingReviewController {
    private ratingReviewService: RatingReviewService
    constructor() {
        this.ratingReviewService = ratingReviewService;
    }

    createRating = async(req: Request, res: Response): Promise<void> => {
        try {
            const courseId = req.params.courseId;
            const ratingReview = await this.ratingReviewService.createRating(req.body, courseId);
            res.status(201).json({
                success:true,
                message:"Rating and Review created Successfully",
                ratingReview,
            });
        } catch(error) {
            res.status(500).json({
                success:false,
                message:error instanceof Error ? error.message : String(error)
            })
        }
    }

    updateRating = async(req: Request, res: Response): Promise<void> => {
        try {
            const courseId = req.params.courseId;
            const ratingId = req.params.ratingId;
            const updatedRating = await this.ratingReviewService.updateRating({...req.body}, courseId, ratingId);
            res.status(201).json({
                success:true,
                message:"Rating and Review updated Successfully",
                updatedRating,
            });
        } catch (error) {
            res.status(500).json({
                success:false,
                message:error instanceof Error ? error.message : String(error)
            })
        }
    }

    deleteRating = async(req: Request, res: Response): Promise<void> => {
        try {
            const ratingAndReviewId = req.params.ratingId;
            const response = await this.ratingReviewService.deleteReviewAndRating(ratingAndReviewId);
            res.status(204).json({
                success:true,
                message:"Rating and Review deleted Successfully",
                response,
            });
        } catch (error) {
            res.status(500).json({
                success:false,
                message:error instanceof Error ? error.message : String(error)
            })
        }
    }

    getAllReviews = async(req: Request, res: Response): Promise<void> => {
        try {
            const reviews = await this.ratingReviewService.getAllReviews();
            res.status(200).json({
                success:true,
                message:"Rating and Review fetched Successfully",
                reviews,
            });
        } catch (error) {
            res.status(500).json({
                success:false,
                message:error instanceof Error ? error.message : String(error)
            })
        }
    }

    getAvgRating = async(req: Request, res:Response) => {
        try {
            const averageRating = await this.ratingReviewService.getAvgRating(req.params.courseId);
            res.status(200).json({
                success:true,
                message:"AverageRating fetched Successfully",
                averageRating,
            });
        } catch (error) {
            res.status(500).json({
                success:false,
                message:error instanceof Error ? error.message : String(error)
            })
        }
    }
}