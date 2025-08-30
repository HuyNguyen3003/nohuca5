import { z } from "zod";

/** Login */
export const loginSchema = z.object({
  username: z.string().min(3, "Username phải có ít nhất 3 ký tự"),
  password: z.string().min(6, "Password phải có ít nhất 6 ký tự"),
});
export type LoginInput = z.infer<typeof loginSchema>;

/** Register */
export const registerSchema = z
  .object({
    fullName: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
    username: z
      .string()
      .min(3, "Username phải có ít nhất 3 ký tự")
      .regex(/^[a-zA-Z0-9._-]+$/, "Username chỉ gồm chữ, số và . _ -"),
    phoneNumber: z
      .string()
      .optional()
      .refine(
        (v) => !v || /^(\+?\d{7,15})$/.test(v),
        "Số điện thoại không hợp lệ"
      ),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: z
      .string()
      .min(6, "Xác nhận mật khẩu phải có ít nhất 6 ký tự"),
  })
  .refine((v) => v.password === v.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;

/** Kiểu User (trong DB) */
export interface User {
  _id?: string;
  username: string;
  fullName: string;
  phoneNumber?: string;
  password: string;
  points?: number;
  isAdmin?: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt?: Date;
  lastLoginAt?: Date;
}

/** Kiểu UserProfile (trả về client, không có password) */
export interface UserProfile {
  _id: string;
  username: string;
  fullName: string;
  phoneNumber?: string;
  points: number;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: Date;
}
