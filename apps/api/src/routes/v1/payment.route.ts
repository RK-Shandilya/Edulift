import { Router } from "express";
import { verifyToken } from "../../middleware/auth.middleware";
import PaymentController from "../../controllers/payment.controller";
import { CreateOrderSchema } from "../../schemas/payment.schema";
import { zodValidator } from "../../validators/zod.validator";

const paymentController = new PaymentController();

const paymentRouter: Router = Router();

paymentRouter.post("/create-order", verifyToken, zodValidator(CreateOrderSchema), paymentController.createOrder);
paymentRouter.post("/webhook", paymentController.handleWebhook);

export default paymentRouter;