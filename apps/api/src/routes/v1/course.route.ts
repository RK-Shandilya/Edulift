import { Router } from "express";
import CourseController from "../../controllers/course.controller";
import SectionController from "../../controllers/section.controller";
import RatingReviewController from "../../controllers/rating_review.controller";
import { isInstructor, verifyToken } from "../../middleware/auth.middleware";
import { CourseSchema, SectionSchema } from "../../schemas/course.schema";
import { zodValidator } from "../../validators/zod.validator";
import SubSectionController from "../../controllers/subSection.controller";
import upload from "../../utils/multer.util";
import { RatingAndReviewSchema } from "../../schemas/ratingAndReview.schema";

const courseRouter : Router = Router();
const courseController = new CourseController();
const sectionController = new SectionController();
const subSectionController = new SubSectionController();
const ratingAndReviewController = new RatingReviewController();

courseRouter.post("/", zodValidator(CourseSchema), verifyToken, isInstructor, upload.single("image"),courseController.createCourse);
courseRouter.get("/", verifyToken, courseController.getAllCourses);
courseRouter.get("/instructor/:instructorId", verifyToken, courseController.getInstructorCourses);
courseRouter.get("/:courseId", verifyToken, courseController.getCourseDetails);
courseRouter.delete("/:courseId", verifyToken, isInstructor, courseController.deleteCourse);
courseRouter.put("/:courseId", zodValidator(CourseSchema), verifyToken, isInstructor, upload.single("image"),courseController.editCourse);

courseRouter.post("/:courseId/section", zodValidator(SectionSchema), verifyToken, isInstructor, sectionController.createSection);
courseRouter.put("/:courseId/section/:sectionId", verifyToken, isInstructor, sectionController.updateSection);
courseRouter.delete("/:courseId/section/:sectionId", verifyToken, isInstructor, sectionController.deleteSection);

courseRouter.post("/:courseId/section/:sectionId/subsection", verifyToken, isInstructor, upload.array("videos", 10), subSectionController.createSubsection);
courseRouter.put("/:courseId/section/:sectionId/subsection/:subsectionId", verifyToken, isInstructor, upload.array('videos', 10), subSectionController.updateSubsection);
courseRouter.delete("/:courseId/section/:sectionId/subsection/:subsectionId", verifyToken, isInstructor, subSectionController.deleteSubsection);

courseRouter.post("/:courseId/rating", verifyToken, zodValidator(RatingAndReviewSchema),ratingAndReviewController.createRating);
courseRouter.put("/:courseId/rating/:ratingId", verifyToken,  zodValidator(RatingAndReviewSchema), ratingAndReviewController.updateRating);
courseRouter.get("/rating", verifyToken, ratingAndReviewController.getAllReviews);
courseRouter.get("/:courseId/rating", verifyToken, ratingAndReviewController.getAvgRating);
courseRouter.delete("/:courseId/rating/:ratingId", verifyToken, ratingAndReviewController.deleteRating);

export default courseRouter;