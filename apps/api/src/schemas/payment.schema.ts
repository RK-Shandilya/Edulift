import z from "zod";

export const CreateOrderSchema = z.object({
    amount: z.number().positive("Amount must be a positive number"),
    currency: z.string().min(3, "Currency must be at least 3 characters long"),
    receipt: z.string().optional(),
    notes: z.record(z.string()).optional()
});