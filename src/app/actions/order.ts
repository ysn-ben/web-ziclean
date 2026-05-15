"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const orderSchema = z.object({
  name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  phone: z.string().min(10, "رقم الهاتف غير صحيح"),
  address: z.string().min(5, "يرجى إدخال العنوان بالتفصيل"),
  quantity: z.string().transform((val) => parseInt(val, 10)).pipe(z.number().min(1, "الكمية يجب أن تكون 1 على الأقل")),
  notes: z.string().optional(),
});

export type OrderState = {
  success: boolean;
  errors?: Record<string, string[]>;
};

export async function sendOrder(prevState: OrderState, formData: FormData): Promise<OrderState> {
  const validatedFields = orderSchema.safeParse({
    name: formData.get("name") || "",
    phone: formData.get("phone") || "",
    address: formData.get("address") || "",
    quantity: formData.get("quantity") || "1",
    notes: formData.get("notes") || undefined,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, phone, address, quantity, notes } = validatedFields.data;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"ZiClean Orders" <${process.env.GMAIL_USER}>`,
      to: "ziclean.dz@gmail.com",
      subject: `طلب جديد من ${name} (${quantity} وحدة)`,
      html: `
        <div dir="rtl" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; background-color: #FDFCF7; color: #1B4332;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 30px; box-shadow: 0 10px 30px rgba(27,67,50,0.05); border: 1px solid #D1DDC2;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="color: #4B7A3E; margin-bottom: 10px; font-size: 28px;">📦 طلب جديد</h1>
              <div style="width: 50px; height: 3px; background-color: #F8E58C; margin: 0 auto; border-radius: 10px;"></div>
            </div>
            
            <div style="margin-bottom: 30px;">
              <p style="margin: 0; font-size: 14px; opacity: 0.6; text-transform: uppercase; letter-spacing: 1px;">معلومات العميل</p>
              <p style="margin: 10px 0; font-size: 20px; font-weight: bold;">${name}</p>
              <p style="margin: 5px 0; font-size: 18px; color: #4B7A3E;">${phone}</p>
            </div>

            <div style="margin-bottom: 30px; padding: 20px; background-color: #F1F4ED; border-radius: 20px;">
              <p style="margin: 0; font-size: 14px; opacity: 0.6;">العنوان الكامل</p>
              <p style="margin: 10px 0; font-size: 16px; line-height: 1.6;">${address}</p>
            </div>

            <div style="margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <p style="margin: 0; font-size: 14px; opacity: 0.6;">الكمية المطلوبة</p>
                <p style="margin: 5px 0; font-size: 24px; font-weight: bold; color: #4B7A3E;">${quantity} وحدة</p>
              </div>
              <div style="text-align: left;">
                <p style="margin: 0; font-size: 14px; opacity: 0.6;">إجمالي السعر التقديري</p>
                <p style="margin: 5px 0; font-size: 24px; font-weight: bold;">${quantity * 230} دج</p>
              </div>
            </div>

            ${notes ? `
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px dashed #D1DDC2;">
              <p style="margin: 0; font-size: 14px; opacity: 0.6;">ملاحظات إضافية</p>
              <p style="margin: 10px 0; font-size: 16px; font-style: italic;">"${notes}"</p>
            </div>
            ` : ""}

            <div style="margin-top: 40px; text-align: center; padding-top: 30px; border-top: 1px solid #D1DDC2;">
              <p style="font-size: 12px; color: #A0AEC0;">تم إرسال هذا الطلب تلقائياً من نظام ZiClean.</p>
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
      errors: { root: ["حدث خطأ أثناء إرسال الطلب. يرجى المحاولة لاحقاً أو الاتصال بنا مباشرة."] },
    };
  }
}
