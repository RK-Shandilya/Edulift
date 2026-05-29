import { z } from 'zod';

export const RatingAndReviewSchema = z.object({
    userId: z.string(),
    rating: z.number().min(1, "Rating can't be less then 1"),
    review: z.string().min(1, "Review length can't be less then 1"),
})