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

        let {
            courseName,
            courseDescription,
            whatYouWillLearn,
            price,
            tag: _tag,
            thumbnail,
            categoryId,
            status,
            instructions: _instructions,
        } = data;

        const tag = typeof _tag === 'string' ? JSON.parse(_tag) : _tag;
        const instructions = typeof _instructions === 'string' ? JSON.parse(_instructions) : _instructions;

        if (
            !courseName ||
            !courseDescription ||
            !whatYouWillLearn ||
            !price ||
            !tag || !tag.length ||
            !thumbnail ||
            !categoryId ||
            !instructions || !instructions.length
        ) {
            throw new Error("All Fields are Mandatory");
        }

        const instructorExists = await this.courseRepository.checkInstructorExists(userId);
        if (!instructorExists) {
            throw new Error("Instructor not found or user is not an instructor");
        }

        if (data.categoryId) {
            const categoryExists = await this.courseRepository.checkCategoryExists(data.categoryId);
            if (!categoryExists) {
                throw new Error("Category not found");
            }
        }

        const courseData = {
            ...data,
            tag,
            instructions,
            categoryId
        };

        return await this.courseRepository.createCourse(courseData, userId);
    }

    async getAllCourses(): Promise<ICourse[]> {
        return await this.courseRepository.getAllCourses();
    }

    async getCourseDetails(courseId: string): Promise<ICourse | null> {
        return await this.courseRepository.getCourseById(courseId);
    }

    async getInstructorCourses(instructorId: string): Promise<ICourse[]> {
        return await this.courseRepository.getInstructorCourses(instructorId);
    }

    async updateCourse(courseId: string, updates: Partial<ICourse>, userId: string | undefined): Promise<ICourse> {
        if(!userId) {
            throw new Error("Unauthorized")
        }
        const existingCourse = await this.courseRepository.getCourseById(courseId);
        if (!existingCourse) {
            throw new Error("Course not found");
        }
        if (existingCourse.instructorId !== userId) {
            throw new Error("Unauthorized: You don't own this course");
        }

        return await this.courseRepository.updateCourse(courseId, updates);
    }

    async deleteCourse(courseId: string, userId: string| undefined): Promise<void> {
        const existingCourse = await this.courseRepository.getCourseById(courseId);
        if (!existingCourse) {
            throw new Error("Course not found");
        }

        if (existingCourse.instructorId !== userId) {
            throw new Error("Unauthorized: You don't own this course");
        }

        return await this.courseRepository.deleteCourse(courseId);
    }
}