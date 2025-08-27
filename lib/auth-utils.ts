/* eslint-disable @typescript-eslint/no-explicit-any */
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserProfile } from "./auth-schemas";

const JWT_SECRET =
  process.env.JWT_SECRET || "your-super-secret-jwt-key-change-in-production";
const JWT_EXPIRES_IN = "7d"; // Token expires in 7 days

// Hash password
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

// Verify password
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Generate JWT token
export function generateToken(user: UserProfile): string {
  const payload = {
    userId: user._id,
    username: user.username,
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Verify JWT token
export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// LocalStorage utilities cho client
export const authStorage = {
  // Lưu user info và token
  setAuth: (user: UserProfile, token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_user", JSON.stringify(user));
      localStorage.setItem("auth_token", token);
    }
  },

  // Lấy user info
  getUser: (): UserProfile | null => {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("auth_user");
      return userStr ? JSON.parse(userStr) : null;
    }
    return null;
  },

  // Lấy token
  getToken: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token");
    }
    return null;
  },

  // Xóa auth data
  clearAuth: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_user");
      localStorage.removeItem("auth_token");
    }
  },

  // Kiểm tra đã đăng nhập chưa
  isAuthenticated: (): boolean => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      const user = localStorage.getItem("auth_user");
      return !!(token && user);
    }
    return false;
  },
};
