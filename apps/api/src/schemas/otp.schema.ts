import { z } from "zod";

export const verifyOtpSchema = z.object({
    email: z.string().email("Please provide a valid email address"),
    otp: z.string()
        .min(6, "OTP must be 6 digits")
        .max(6, "OTP must be 6 digits")
        .regex(/^\d{6}$/, "OTP must contain only digits")
});

export const resendOtpSchema = z.object({
    email: z.string().email("Please provide a valid email address")
});

export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>;
export type ResendOtpInput = z.infer<typeof resendOtpSchema>;