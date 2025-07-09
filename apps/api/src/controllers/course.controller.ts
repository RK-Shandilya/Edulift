import { Request, Response } from "express";
import CourseService from "../services/course.service";
import CourseRepository from "../repositories/course.repository";
import uploadToCloudinary from "../utils/cloudinary.util";

const courseService = new CourseService(new CourseRepository());

export default class CourseController {
    courseService: CourseService = courseService;
    
    constructor() {}    
    
    createCourse = async (req: Request, res: Response) => {
        try {
            const userId = req.userId;
            const thumbnail = req.file;
            let thumbnailUrl: string | undefined;
            
            if(thumbnail) {
                thumbnailUrl = await uploadToCloudinary(thumbnail);
            }
            
            const course = await this.courseService.createCourse({
                ...req.body,
                thumbnail: thumbnailUrl
            }, userId);
            
            res.status(201).json({ 
                message: "Course created successfully", 
                course 
            });
        } catch (error) {
            res.status(500).json({ 
                error: error instanceof Error ? error.message : "Course creation failed" 
            });
        }
    }
}