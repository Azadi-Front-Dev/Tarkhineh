import { z } from "zod";

export const otpSchema = z.object({
  otp: z
    .string()
    .min(1, "وارد کردن کد تایید الزامی است")
    .length(5, "کد تایید باید ۵ رقم باشد")
    .regex(/^\d{5}$/, "کد تایید باید فقط شامل اعداد باشد"),
});