import { z } from "zod";

export const CourseSchema = z.object({
    courseName: z.string().min(1, "Course name is required"),
    courseDescription: z.string().min(1, "Course description is required"),
    whatYouWillLearn: z.string().optional(),
    price: z.number().min(1, "Price is required"),
    thumbnail: z.string().optional(),
    tag: z.array(z.string()).min(1, "At least one tag is required"),
    instructions: z.array(z.string()).min(1, "At least one instruction is required"),
    status: z.enum(["Draft", "Published"]),
    categoryId: z.string().optional(),
    instructorId: z.string().optional(),
})

export const SectionSchema = z.object({
    sectionName: z.string().min(1, "Section name is required"),
    courseId: z.string().min(1, "Course ID is required"),
})

export const SubsectionSchema = z.object({
    title: z.string().min(1, "Title is required"),
    sectionId: z.string().min(1, "Section ID is required"),
    timeDuration: z.string().min(1, "Time duration is required"),
    description: z.string().optional(),
    videoUrls: z.array(z.string()).min(1, "At least one video URL is required"),
})