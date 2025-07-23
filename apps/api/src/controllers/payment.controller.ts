import { Request, Response } from "express";
import PaymentService from "../services/payment.service";
import PaymentRepository from "../repositories/payment.repository";
import { CreateOrderData } from "@repo/types/index";

const paymentService = new PaymentService(new PaymentRepository());

export default class PaymentController {
    private paymentService: PaymentService
    constructor() {
        this.paymentService = paymentService
    }
    async createOrder(req: Request, res: Response) {
        try {
            const { amount, userId, currency, courseId, notes } = req.body as CreateOrderData;

            if (!amount || !userId) {
                res.status(400).json({
                    success: false,
                    message: "Amount and userId are required",
                });
                return;
            }

            const orderData: CreateOrderData = {
                amount,
                userId,
                currency,
                courseId,
                notes
            };

            const order = await this.paymentService.createOrder(orderData);
            res.status(201).json({
                success: true,
                message: "Order created successfully",
                data: order
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error creating order",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }

    async handleWebhook(req: Request, res: Response) {
        try {
            const webhookData = req.body;
            const signature = req.headers['x-razorpay-signature'] as string;
            if (!signature) {
                res.status(400).json({
                    success: false,
                    message: "Missing webhook signature"
                });
                return;
            }

            await this.paymentService.handleWebhook(webhookData,  signature);
            res.status(200).json({ success: true, message: "Webhook handled successfully" });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error handling webhook",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }

    async getUserOrders(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params;
            
            if (!userId) {
                res.status(400).json({
                    success: false,
                    message: "User ID is required"
                });
                return;
            }

            const orders = await this.paymentService.getUserOrders(userId);
            res.status(200).json({
                success: true,
                message: "Orders retrieved successfully",
                data: orders
            });
        } catch (error) {
            console.error('Error getting user orders:', error);
            res.status(500).json({
                success: false,
                message: "Error retrieving orders",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}