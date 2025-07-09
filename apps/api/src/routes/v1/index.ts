import { Router } from 'express';
import authRouter from './auth.route';
import courseRouter from './course.route';
const v1Router: Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/course', courseRouter)

export default v1Router;