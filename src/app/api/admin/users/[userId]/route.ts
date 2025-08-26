/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "../../../../../../lib/mongodb";
import {
  User,
  UserProfile,
  adminUpdateUserSchema,
} from "../../../../../../lib/auth-schemas";
import { verifyToken } from "../../../../../../lib/auth-utils";
import { ObjectId } from "mongodb";

export async function PUT(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
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

    const token = authHeader.substring(7);

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

    // Find current user to check admin status
    const currentUser = await usersCollection.findOne({
      _id: new ObjectId(decoded.userId) as any,
      isActive: true,
    });

    if (!currentUser || !currentUser.isAdmin) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Không có quyền truy cập",
            details: [],
          },
        },
        { status: 403 }
      );
    }

    // Get update data from request body
    const body = await request.json();

    // Validate input
    const validationResult = adminUpdateUserSchema.safeParse(body);
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

    const updateData = validationResult.data;

    // Find target user
    const targetUser = await usersCollection.findOne({
      _id: new ObjectId(params.userId) as any,
    });

    if (!targetUser) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Không tìm thấy người dùng",
            details: [],
          },
        },
        { status: 404 }
      );
    }

    // Prevent admin from removing their own admin status
    if (
      targetUser._id?.toString() === currentUser._id?.toString() &&
      updateData.isAdmin === false
    ) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Không thể tự xóa quyền admin của chính mình",
            details: [],
          },
        },
        { status: 400 }
      );
    }

    // Update user
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(params.userId) as any },
      {
        $set: {
          ...updateData,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Không tìm thấy người dùng",
            details: [],
          },
        },
        { status: 404 }
      );
    }

    // Get updated user
    const updatedUser = await usersCollection.findOne({
      _id: new ObjectId(params.userId) as any,
    });

    if (!updatedUser) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Lỗi khi cập nhật người dùng",
            details: [],
          },
        },
        { status: 500 }
      );
    }

    // Convert to UserProfile (without password)
    const userProfile: UserProfile = {
      _id: updatedUser._id!.toString(),
      fullName: updatedUser.fullName,
      username: updatedUser.username,
      phoneNumber: updatedUser.phoneNumber,
      points: updatedUser.points || 0,
      isAdmin: updatedUser.isAdmin || false,
      createdAt: updatedUser.createdAt,
      isActive: updatedUser.isActive,
    };

    return NextResponse.json(
      {
        data: userProfile,
        error: null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin update user error:", error);
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
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

    const token = authHeader.substring(7);

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

    // Find current user to check admin status
    const currentUser = await usersCollection.findOne({
      _id: new ObjectId(decoded.userId) as any,
      isActive: true,
    });

    if (!currentUser || !currentUser.isAdmin) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Không có quyền truy cập",
            details: [],
          },
        },
        { status: 403 }
      );
    }

    // Prevent admin from deleting themselves
    if (params.userId === currentUser._id?.toString()) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Không thể xóa tài khoản của chính mình",
            details: [],
          },
        },
        { status: 400 }
      );
    }

    // Delete user (soft delete by setting isActive = false)
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(params.userId) as any },
      {
        $set: {
          isActive: false,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        {
          data: null,
          error: {
            message: "Không tìm thấy người dùng",
            details: [],
          },
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: { message: "Xóa người dùng thành công" },
        error: null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin delete user error:", error);
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
