import { CreateOrderData, CreateOrderInput, IOrder, OrderResponse, OrderStatus, RazorpayOrderOptions } from "@repo/types/index";
import instance from "../config/razorpay.config";
import PaymentRepository from "../repositories/payment.repository";
import Razorpay from "razorpay";

export default class PaymentService {

    constructor(private paymentRepository: PaymentRepository) {

    }

    async getUserOrders(userId: string): Promise<IOrder[]> {
        if (!userId) {
            throw new Error("User ID is required");
        }
        return this.paymentRepository.getOrdersByUserId(userId);
    }

    async getCourseOrders(courseId: string): Promise<IOrder[]> {
        if (!courseId) {
            throw new Error("Course ID is required");
        }
        return this.paymentRepository.getOrdersByCourseId(courseId);
    }

    async createOrder(data: CreateOrderData): Promise<OrderResponse> {

        if (!data.amount || data.amount <= 0) {
            throw new Error("Valid amount is required");
        }
        if (!data.userId) {
            throw new Error("User ID is required");
        }

        const options : RazorpayOrderOptions = {
            amount: Math.round(data.amount * 100),
            currency: data.currency || 'INR',
            receipt: `receipt_${Date.now()}`,
            notes: {
                userId: data.userId,
                ...(data.courseId && { courseId: data.courseId }),
                ...data.notes
            }
        }

        const razorpayOrder = await instance.orders.create(options);

        if (!razorpayOrder || !razorpayOrder.id) {
            throw new Error("Failed to create Razorpay order");
        }

         const orderInput: CreateOrderInput = {
            razorpayOrderId: razorpayOrder.id,
            amount: Number(razorpayOrder.amount) / 100,
            userId: data.userId,
            currency: razorpayOrder.currency,
            courseId: data.courseId || null,
            receipt: razorpayOrder.receipt!,
        };

        const order = await this.paymentRepository.createOrder(orderInput);
        return {
            orderId: razorpayOrder.id,
            amount: Number(razorpayOrder.amount),
            currency: razorpayOrder.currency,
            key: process.env.RAZORPAY_KEY_ID!,
            order: order
        };
    }

    async handleWebhook(data: any, signature: string): Promise<void> {
        const isVaild = await Razorpay.validateWebhookSignature(
            JSON.stringify(data),
            signature,
            process.env.RAZORPAY_WEBHOOK_SECRET!
        );
        if (!isVaild) {
            throw new Error("Invalid webhook signature");
        }
        const { event, payload } = data;
        switch (event) {
            case "payment.captured":
                await this.handlePaymentCaptured(payload.payment.entity);
                break;
            case "payment.failed":
                await this.handlePaymentFailed(payload.payment.entity);
                break;
            default:
                console.warn(`Unhandled event: ${event}`);
                break;
        }
    }

    private async handlePaymentCaptured(payment: any): Promise<void> {
        const order = await this.paymentRepository.getOrderByRazorpayOrderId(payment.order_id);
        
        if (!order) {
            throw new Error("Order not found for the payment");
        }

        await this.paymentRepository.updateOrder({
            id: order.id!,
            paymentId: payment.id,
            status: OrderStatus.COMPLETED,
            razorpaySignature: payment.signature,
            paymentMethod: payment.method,
            receipt: payment.receipt
        });
    }

    private async handlePaymentFailed(payment: any): Promise<void> {
        const order = await this.paymentRepository.getOrderByRazorpayOrderId(payment.order_id);
        
        if (!order) {
            throw new Error("Order not found for the failed payment");
        }

        await this.paymentRepository.updateOrder({
            id: order.id!,
            paymentId: payment.id,
            status: OrderStatus.FAILED,
            razorpaySignature: payment.signature,
            paymentMethod: payment.method,
            receipt: payment.receipt
        });
    }
}