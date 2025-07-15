import { Router } from "express";
import CourseController from "../../controllers/course.controller";
import SectionController from "../../controllers/section.controller";
import { isInstructor, verifyToken } from "../../middleware/auth.middleware";
import { CourseSchema, SectionSchema } from "../../schemas/course.schema";
import { zodValidator } from "../../validators/zod.validator";
import SubSectionController from "../../controllers/subSection.controller";
import upload from "../../utils/multer.util";

const courseRouter : Router = Router();
const courseController = new CourseController();
const sectionController = new SectionController();
const subSectionController = new SubSectionController();

courseRouter.post("/", zodValidator(CourseSchema), verifyToken, isInstructor, courseController.createCourse);
courseRouter.get("/", verifyToken, courseController.getAllCourses);
courseRouter.get("/instructor/:instructorId", verifyToken, courseController.getInstructorCourses);
courseRouter.get("/:courseId", verifyToken, courseController.getCourseDetails);
courseRouter.delete("/:courseId", verifyToken, isInstructor, courseController.deleteCourse);
courseRouter.put("/:courseId", zodValidator(CourseSchema), verifyToken, isInstructor, courseController.editCourse);


courseRouter.post("/:courseId/section", zodValidator(SectionSchema), verifyToken, isInstructor, sectionController.createSection);
courseRouter.put("/:courseId/section/:sectionId", verifyToken, isInstructor, sectionController.updateSection);
courseRouter.delete("/:courseId/section/:sectionId", verifyToken, isInstructor, sectionController.deleteSection);

courseRouter.post("/:courseId/section/:sectionId/subsection", verifyToken, isInstructor, upload.array("videos", 10), subSectionController.createSubsection);
courseRouter.put("/:courseId/section/:sectionId/subsection/:subsectionId", verifyToken, isInstructor, upload.array('videos', 10), subSectionController.updateSubsection);
courseRouter.delete("/:courseId/section/:sectionId/subsection/:subsectionId", verifyToken, isInstructor, subSectionController.deleteSubsection);

export default courseRouter;