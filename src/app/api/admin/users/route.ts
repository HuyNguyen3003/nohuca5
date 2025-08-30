/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { User, UserProfile } from "@/lib/auth-schemas";
import { verifyToken } from "@/lib/auth-utils";
import { ObjectId } from "mongodb";
import { runtimeCache } from "@/lib/cache";

export async function GET(request: NextRequest) {
  try {
    // Admin list endpoints can be cached briefly for UX on pagination/search
    request.headers.set(
      "Cache-Control",
      "private, max-age=15, stale-while-revalidate=60"
    );
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

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    // Build search query - only show active users
    const searchQuery: any = { isActive: true };
    if (search) {
      searchQuery.$and = [
        { isActive: true },
        {
          $or: [
            { username: { $regex: search, $options: "i" } },
            { fullName: { $regex: search, $options: "i" } },
            { phoneNumber: { $regex: search, $options: "i" } },
          ],
        },
      ];
    }

    const cacheKey = `adminUsers:${page}:${limit}:${search}`;
    const cached = runtimeCache.get<{ users: User[]; total: number }>(cacheKey);
    let users: User[];
    let total: number;
    if (cached) {
      users = cached.users;
      total = cached.total;
    } else {
      total = await usersCollection.countDocuments(searchQuery);
      users = await usersCollection
        .find(searchQuery)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray();
      runtimeCache.set(cacheKey, { users, total }, 20_000);
    }

    // Convert to UserProfile (without password)
    const userProfiles: UserProfile[] = users.map((user) => ({
      _id: user._id!.toString(),
      fullName: user.fullName,
      username: user.username,
      phoneNumber: user.phoneNumber,
      points: user.points || 0,
      isAdmin: user.isAdmin || false,
      createdAt: user.createdAt,
      isActive: user.isActive,
    }));

    return NextResponse.json(
      {
        data: {
          users: userProfiles,
          pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
          },
        },
        error: null,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "private, max-age=15, stale-while-revalidate=60",
        },
      }
    );
  } catch (error) {
    console.error("Admin get users error:", error);
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
