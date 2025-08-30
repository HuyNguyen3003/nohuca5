import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import {
  registerSchema,
  User,
  UserProfile,
} from "@/lib/auth-schemas";
import { hashPassword, generateToken } from "@/lib/auth-utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = registerSchema.safeParse(body);
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

    const { fullName, username, password, phoneNumber } = validationResult.data;

    // Connect to database
    const db = await getDatabase();
    const usersCollection = db.collection<User>("users");

    // Check if username already exists
    const existingUser = await usersCollection.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Tài khoản đã tồn tại",
            details: [],
          },
        },
        { status: 400 }
      );
    }

    // Check if phone number already exists
    const existingPhone = await usersCollection.findOne({ phoneNumber });
    if (existingPhone) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Số điện thoại đã được sử dụng",
            details: [],
          },
        },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const newUser: User = {
      fullName,
      username,
      password: hashedPassword,
      phoneNumber,
      points: 0, // Điểm ban đầu
      isAdmin: false, // Mặc định không phải admin
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
    };

    const result = await usersCollection.insertOne(newUser);

    // Create user profile (without password)
    const userProfile: UserProfile = {
      _id: result.insertedId.toString(),
      fullName,
      username,
      phoneNumber,
      points: 0,
      isAdmin: false,
      createdAt: newUser.createdAt,
      isActive: true,
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
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
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
