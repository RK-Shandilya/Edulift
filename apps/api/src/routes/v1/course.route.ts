import { Router } from "express";
import CourseController from "../../controllers/course.controller";

const courseRouter : Router = Router();
const courseController = new CourseController();

courseRouter.post("/", courseController.createCourse);
courseRouter.get("/", courseController.getAllCourses);
courseRouter.get("/instructor/:instructorId", courseController.getInstructorCourses);
courseRouter.get("/:courseId", courseController.getCourseDetails);
courseRouter.delete("/:courseId", courseController.deleteCourse);
courseRouter.put("/:courseId", courseController.editCourse);

export default courseRouter;