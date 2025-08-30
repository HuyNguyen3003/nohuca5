/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { User } from "@/lib/auth-schemas";
import { verifyToken } from "@/lib/auth-utils";
import { ObjectId } from "mongodb";

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { data: null, error: { message: "Thiếu token", details: [] } },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { data: null, error: { message: "Token không hợp lệ", details: [] } },
        { status: 401 }
      );
    }

    const body = await request.json();
    const delta = typeof body?.delta === "number" ? Math.trunc(body.delta) : 0;
    const reason = typeof body?.reason === "string" ? body.reason : "adjust";

    if (!delta) {
      return NextResponse.json(
        { data: null, error: { message: "delta không hợp lệ", details: [] } },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const users = db.collection<User>("users");
    const user = await users.findOne({
      _id: new ObjectId(decoded.userId) as any,
    });
    if (!user) {
      return NextResponse.json(
        {
          data: null,
          error: { message: "Không tìm thấy người dùng", details: [] },
        },
        { status: 404 }
      );
    }

    const nextPoints = Math.max(0, (user.points || 0) + delta);
    await users.updateOne(
      { _id: new ObjectId(decoded.userId) as any },
      {
        $set: { points: nextPoints, updatedAt: new Date() },
        $push: { pointLogs: { at: new Date(), delta, reason } } as any,
      }
    );

    return NextResponse.json(
      { data: { points: nextPoints }, error: null },
      { status: 200 }
    );
  } catch (error) {
    console.error("Adjust points error:", error);
    return NextResponse.json(
      { data: null, error: { message: "Lỗi server", details: [] } },
      { status: 500 }
    );
  }
}
