import prisma from "@repo/db/index";
import { CreateOrderInput, IOrder, OrderStatus, UpdateOrderInput } from "@repo/types/index";

export default class PaymentRepository {
    constructor() {}
    async createOrder(data: CreateOrderInput) : Promise<IOrder> {
        const order = await prisma.order.create({
            data: {
                razorpayOrderId: data.razorpayOrderId,
                amount: data.amount,
                userId: data.userId,
                currency: data.currency,
                courseId: data.courseId,
                receipt: data.receipt,
                status: OrderStatus.CREATED
            }
        });
        return order;
    }

    async getOrderByRazorpayOrderId(razorpayOrderId: string) : Promise<IOrder | null> {
        const order = await prisma.order.findUnique({
            where: {
                razorpayOrderId: razorpayOrderId
            }
        });
        return order;
    }

    async updateOrder(data: UpdateOrderInput): Promise<IOrder> {
        const order = await prisma.order.update({
            where: {
                id: data.id
            },
            data: {
                paymentId: data.paymentId,
                status: data.status,
                razorpaySignature: data.razorpaySignature,
                paymentMethod: data.paymentMethod,
                receipt: data.receipt,
                updatedAt: new Date()
            }
        });
        return order;
    }

    async getOrderById(id: string): Promise<IOrder | null> {
        const order = await prisma.order.findUnique({
            where: { id }
        });
        return order;
    }

     async getOrdersByUserId(userId: string): Promise<IOrder[]> {
        const orders = await prisma.order.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            include: {
                course: {
                    select: {
                        id: true,
                        courseName: true,
                        thumbnail: true
                    }
                }
            }
        });
        return orders;
    }

    async getOrdersByCourseId(courseId: string): Promise<IOrder[]> {
        const orders = await prisma.order.findMany({
            where: { 
                courseId,
                status: "COMPLETED"
            },
            orderBy: { createdAt: 'desc' }
        });
        return orders;
    }
}