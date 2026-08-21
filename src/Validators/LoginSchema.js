import { z } from "zod";

export const loginSchema = z.object({
  mobilenumber: z
    .string()
    .min(1, "وارد کردن شماره همراه الزامی است")
    .max(11, "شماره همراه معتبر نیست")
    .regex(/^09\d{9}$/, "شماره همراه معتبر نیست"),

  acceptrules: z.literal(true, {
    error: "پذیرفتن قوانین و مقررات الزامی است",
  }),
});