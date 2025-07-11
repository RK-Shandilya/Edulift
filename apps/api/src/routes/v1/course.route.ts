import { Router } from "express";
import CourseController from "../../controllers/course.controller";
import SectionController from "../../controllers/section.controller";
import { isInstructor, verifyToken } from "../../middleware/auth.middleware";

const courseRouter : Router = Router();
const courseController = new CourseController();
const sectionController = new SectionController();

courseRouter.post("/", verifyToken, isInstructor, courseController.createCourse);
courseRouter.get("/", verifyToken, courseController.getAllCourses);
courseRouter.get("/instructor/:instructorId", verifyToken, courseController.getInstructorCourses);
courseRouter.get("/:courseId", verifyToken, courseController.getCourseDetails);
courseRouter.delete("/:courseId", verifyToken, isInstructor, courseController.deleteCourse);
courseRouter.put("/:courseId", verifyToken, isInstructor, courseController.editCourse);


courseRouter.post("/:courseId/section", verifyToken, isInstructor, sectionController.createSection);
courseRouter.put("/:courseId/section/:sectionId", verifyToken, isInstructor, sectionController.updateSection);
courseRouter.delete("/:courseId/section/:sectionId", verifyToken, isInstructor, sectionController.deleteSection);

export default courseRouter;