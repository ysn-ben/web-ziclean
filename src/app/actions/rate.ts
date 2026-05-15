"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const reviewSchema = z.object({
  name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  rating: z.string().transform((val) => parseInt(val, 10)).pipe(z.number().min(1, "التقييم مطلوب").max(5)),
  comment: z.string().optional(),
});

export type ReviewState = {
  success: boolean;
  errors?: Record<string, string[]>;
};

export async function submitReview(prevState: ReviewState, formData: FormData): Promise<ReviewState> {
  const validatedFields = reviewSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    rating: formData.get("rating"),
    comment: formData.get("comment"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, rating, comment } = validatedFields.data;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Generate stars for the email display
    const stars = Array(5).fill('☆');
    for (let i = 0; i < rating; i++) {
      stars[i] = '★';
    }
    const starsDisplay = stars.join('');

    const mailOptions = {
      from: `"ZiClean Reviews" <${process.env.GMAIL_USER}>`,
      to: "ziclean.dz@gmail.com",
      subject: `تقييم جديد للمنتج من ${name} (${rating}/5)`,
      html: `
        <div dir="rtl" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; background-color: #FDFCF7; color: #1B4332;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 30px; box-shadow: 0 10px 30px rgba(27,67,50,0.05); border: 1px solid #D1DDC2;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="color: #4B7A3E; margin-bottom: 10px; font-size: 28px;">⭐ تقييم جديد للمنتج</h1>
              <div style="width: 50px; height: 3px; background-color: #F8E58C; margin: 0 auto; border-radius: 10px;"></div>
            </div>
            
            <div style="margin-bottom: 30px; text-align: center;">
              <p style="margin: 0; font-size: 32px; color: #F8E58C; text-shadow: 0 0 5px rgba(248,229,140,0.5);">${starsDisplay}</p>
              <p style="margin: 5px 0; font-size: 18px; font-weight: bold;">${rating} من 5</p>
            </div>

            <div style="margin-bottom: 30px; padding: 20px; background-color: #F1F4ED; border-radius: 20px;">
              <p style="margin: 0; font-size: 14px; opacity: 0.6; text-transform: uppercase; letter-spacing: 1px;">معلومات العميل</p>
              <p style="margin: 10px 0; font-size: 18px; font-weight: bold;">${name}</p>
              <p style="margin: 5px 0; font-size: 16px; color: #4B7A3E;">${email}</p>
            </div>

            ${comment ? `
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px dashed #D1DDC2;">
              <p style="margin: 0; font-size: 14px; opacity: 0.6;">التعليق المرفق</p>
              <p style="margin: 10px 0; font-size: 16px; font-style: italic; line-height: 1.6;">"${comment}"</p>
            </div>
            ` : ""}

            <div style="margin-top: 40px; text-align: center; padding-top: 30px; border-top: 1px solid #D1DDC2;">
              <p style="font-size: 12px; color: #A0AEC0;">تم إرسال هذا التقييم تلقائياً من نظام ZiClean.</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      success: false,
      errors: { root: ["حدث خطأ أثناء إرسال التقييم. يرجى المحاولة لاحقاً."] },
    };
  }
}
