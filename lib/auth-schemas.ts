import { z } from "zod";

// Schema cho đăng ký
export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Họ và tên phải có ít nhất 2 ký tự")
      .max(50, "Họ và tên không được quá 50 ký tự")
      .regex(
        /^[a-zA-ZÀ-ÿĂăÂâÁáÀàẢảÃãẠạÉéÈèẺẻẼẽẸẹÔôÊêÓóÒòỎỏÕõỌọÚúÙùỦủŨũỤụÝýỲỳỶỷỸỹỴỵĐđ\s]+$/,
        "Họ và tên chỉ được chứa chữ cái và khoảng trắng"
      ),

    username: z
      .string()
      .min(3, "Tài khoản phải có ít nhất 3 ký tự")
      .max(20, "Tài khoản không được quá 20 ký tự")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Tài khoản chỉ được chứa chữ cái, số và dấu gạch dưới"
      ),

    password: z
      .string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .max(100, "Mật khẩu không được quá 100 ký tự")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Mật khẩu phải chứa ít nhất 1 chữ thường, 1 chữ hoa và 1 số"
      ),

    confirmPassword: z.string(),

    phoneNumber: z
      .string()
      .regex(
        /^(0|\+84)[0-9]{9,10}$/,
        "Số điện thoại không hợp lệ (ví dụ: 0901234567)"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

// Schema cho đăng nhập
export const loginSchema = z.object({
  username: z.string().min(1, "Vui lòng nhập tài khoản"),

  password: z.string().min(1, "Vui lòng nhập mật khẩu"),
});

// Type definitions
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

// User type cho database
export interface User {
  _id?: string;
  fullName: string;
  username: string;
  password: string; // Hashed password
  phoneNumber: string;
  points: number; // Điểm của user
  isAdmin: boolean; // Quyền admin
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

// User type cho client (không có password)
export interface UserProfile {
  _id: string;
  fullName: string;
  username: string;
  phoneNumber: string;
  points: number;
  isAdmin: boolean;
  createdAt: Date;
  isActive: boolean;
}

// Schema cho admin update user
export const adminUpdateUserSchema = z.object({
  fullName: z.string().min(2, "Họ và tên phải có ít nhất 2 ký tự").optional(),
  phoneNumber: z
    .string()
    .regex(/^(0|\+84)[0-9]{9,10}$/, "Số điện thoại không hợp lệ")
    .optional(),
  points: z.number().min(0, "Điểm không được âm").optional(),
  isAdmin: z.boolean().optional(),
  isActive: z.boolean().optional(),
});

export type AdminUpdateUserInput = z.infer<typeof adminUpdateUserSchema>;
