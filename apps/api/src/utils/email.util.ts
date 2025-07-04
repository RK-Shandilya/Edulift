import { EmailOptions } from "@repo/types/index";
import sgMail from "@sendgrid/mail";

export const sendEmail = async (options: EmailOptions) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const msg = {
        to: options.to,
        from: process.env.SENDGRID_FROM_EMAIL!,
        templateId: options.templateId,
        dynamic_template_data: options.dynamicTemplateData
    }

    try {
        await sgMail.send(msg);
        console.log('Email sent successfully');
    } catch (error: any) {
        console.error('SendGrid error:', error.response?.body || error);
        throw new Error('Failed to send email');
    }
}