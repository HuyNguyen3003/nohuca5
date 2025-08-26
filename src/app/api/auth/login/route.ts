import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "../../../../../lib/mongodb";
import {
  loginSchema,
  User,
  UserProfile,
} from "../../../../../lib/auth-schemas";
import { verifyPassword, generateToken } from "../../../../../lib/auth-utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = loginSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Dữ liệu không hợp lệ",
            details: validationResult.error.issues,
          },
        },
        { status: 400 }
      );
    }

    const { username, password } = validationResult.data;

    // Connect to database
    const db = await getDatabase();
    const usersCollection = db.collection<User>("users");

    // Find user by username
    const user = await usersCollection.findOne({
      username,
      isActive: true, // Chỉ tìm user đang hoạt động
    });

    if (!user) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Tài khoản không tồn tại hoặc đã bị khóa",
            details: [],
          },
        },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Mật khẩu không chính xác",
            details: [],
          },
        },
        { status: 401 }
      );
    }

    // Update last login time
    await usersCollection.updateOne(
      { _id: user._id },
      {
        $set: {
          updatedAt: new Date(),
          lastLoginAt: new Date(),
        },
      }
    );

    // Create user profile (without password)
    const userProfile: UserProfile = {
      _id: user._id?.toString() || "",
      fullName: user.fullName,
      username: user.username,
      phoneNumber: user.phoneNumber,
      points: user.points || 0,
      isAdmin: user.isAdmin || false,
      createdAt: user.createdAt,
      isActive: user.isActive,
    };

    // Generate token
    const token = generateToken(userProfile);

    return NextResponse.json(
      {
        data: {
          user: userProfile,
          token,
        },
        error: null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      {
        data: null,
        error: {
          message: "Lỗi server, vui lòng thử lại sau",
          details: [],
        },
      },
      { status: 500 }
    );
  }
}
