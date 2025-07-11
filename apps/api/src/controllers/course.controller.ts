import { Request, Response } from "express";
import CourseService from "../services/course.service";
import CourseRepository from "../repositories/course.repository";
import uploadToCloudinary from "../utils/cloudinary.util";

const courseService = new CourseService(new CourseRepository());

export default class CourseController {
    courseService: CourseService = courseService;
    
    constructor() {}
    
    createCourse = async (req: Request, res: Response): Promise<void> => {
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
                success: true,
                message: "Course created successfully", 
                data: course 
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Course creation failed";
            
            // Handle specific error cases
            if (errorMessage.includes("All Fields are Mandatory")) {
                res.status(400).json({ 
                    success: false,
                    message: errorMessage
                });
                return;
            }
            
            if (errorMessage.includes("Unauthorized")) {
                res.status(401).json({ 
                    success: false,
                    message: errorMessage
                });
                return;
            }
            
            if (errorMessage.includes("Not Found")) {
                res.status(404).json({ 
                    success: false,
                    message: errorMessage
                });
                return;
            }
            
            res.status(500).json({ 
                success: false,
                message: "Failed to create course",
                error: errorMessage
            });
        }
    }

    getAllCourses = async (req: Request, res: Response) => {
        try {
            const courses = await this.courseService.getAllCourses();
            
            res.status(200).json({
                success: true,
                data: courses
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Can't Fetch Course Data",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }

    getCourseDetails = async (req: Request, res: Response) => {
        try {
            const { courseId } = req.body;
            
            if (!courseId) {
                res.status(400).json({
                    success: false,
                    message: "Course ID is required"
                });
                return;
            }

            const courseDetails = await this.courseService.getCourseDetails(courseId);
            
            if (!courseDetails) {
                res.status(404).json({
                    success: false,
                    message: `Could not find course with id: ${courseId}`
                });
                return;
            }

            res.status(200).json({
                success: true,
                data: courseDetails
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }

    getInstructorCourses = async (req: Request, res: Response) => {
        try {
            const instructorId = req.userId;
            
            if (!instructorId) {
                res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                });
                return;
            }

            const courses = await this.courseService.getInstructorCourses(instructorId);
            
            res.status(200).json({
                success: true,
                data: courses
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to retrieve instructor courses",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }

    editCourse = async (req: Request, res: Response) => {
        try {
            const { courseId } = req.body;
            const updates = req.body;
            
            if (!courseId) {
                res.status(400).json({
                    success: false,
                    message: "Course ID is required"
                });
                return;
            }

            // Handle thumbnail update if new file is uploaded
            if (req.file) {
                const thumbnailUrl = await uploadToCloudinary(req.file);
                updates.thumbnail = thumbnailUrl;
            }

            if (updates.tag && typeof updates.tag === 'string') {
                updates.tag = JSON.parse(updates.tag);
            }
            if (updates.instructions && typeof updates.instructions === 'string') {
                updates.instructions = JSON.parse(updates.instructions);
            }

            const updatedCourse = await this.courseService.updateCourse(courseId, updates, req.userId);
            
            res.status(200).json({
                success: true,
                message: "Course updated successfully",
                data: updatedCourse
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Course update failed";
            
            if (errorMessage.includes("not found")) {
                res.status(404).json({
                    success: false,
                    message: errorMessage
                });
                return;
            }
            
            res.status(500).json({
                success: false,
                message: "Internal server error",
                error: errorMessage
            });
        }
    }

    deleteCourse = async (req: Request, res: Response) => {
        try {
            const { courseId } = req.body;
            
            if (!courseId) {
                res.status(400).json({
                    success: false,
                    message: "Course ID is required"
                });
                return;
            }

            await this.courseService.deleteCourse(courseId, req.userId);
            
            res.status(200).json({
                success: true,
                message: "Course deleted successfully"
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Course deletion failed";
            
            if (errorMessage.includes("not found")) {
                res.status(404).json({
                    success: false,
                    message: errorMessage
                });
                return;
            }
            
            res.status(500).json({
                success: false,
                message: "Server error",
                error: errorMessage
            });
        }
    }
}