import { ICourse } from "@repo/types/index";
import CourseRepository from "../repositories/course.repository";

export default class CourseService {
    private courseRepository: CourseRepository
    
    constructor(courseRepository: CourseRepository) {
        this.courseRepository = courseRepository
    }

    async createCourse(data: Omit<ICourse, "id">, userId: string | undefined): Promise<ICourse> {
        if(!userId) {
            throw new Error("Unauthorized")
        }
        
        const {
            courseName,
            courseDescription,
            price,
            thumbnail,
            instructions
        } = data;

        if(!courseName || !courseDescription || !price || !thumbnail || !instructions) {
            throw new Error("All fields are required")
        }
    
        return await this.courseRepository.createCourse(data, userId);
    }
}
