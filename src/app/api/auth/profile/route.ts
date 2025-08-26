/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "../../../../../lib/mongodb";
import { User, UserProfile } from "../../../../../lib/auth-schemas";
import { verifyToken } from "../../../../../lib/auth-utils";
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest) {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Không có token xác thực",
            details: [],
          },
        },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Token không hợp lệ",
            details: [],
          },
        },
        { status: 401 }
      );
    }

    // Connect to database
    const db = await getDatabase();
    const usersCollection = db.collection<User>("users");

    // Find user
    const user = await usersCollection.findOne({
      _id: new ObjectId(decoded.userId) as any,
      isActive: true,
    });

    if (!user) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Người dùng không tồn tại",
            details: [],
          },
        },
        { status: 404 }
      );
    }

    // Create user profile (without password)
    const userProfile: UserProfile = {
      _id: user._id!.toString(),
      fullName: user.fullName,
      username: user.username,
      phoneNumber: user.phoneNumber,
      points: user.points || 0,
      isAdmin: user.isAdmin || false,
      createdAt: user.createdAt,
      isActive: user.isActive,
    };

    return NextResponse.json(
      {
        data: userProfile,
        error: null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get profile error:", error);
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
