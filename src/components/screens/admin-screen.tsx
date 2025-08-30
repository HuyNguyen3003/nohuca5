"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { UserProfile } from "@/lib/auth-schemas";

interface AdminUsersResponse {
  data: {
    users: UserProfile[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  } | null;
  error: {
    message: string;
    details: string[];
  } | null;
}

interface EditUserData {
  points?: number;
  isAdmin?: boolean;
}

export default function AdminScreen() {
  const { user, token, isAuthenticated } = useAuth();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [editingUser, setEditingUser] = useState<UserProfile | null>(null);
  const [editData, setEditData] = useState<EditUserData>({});
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const fetchUsers = useCallback(async () => {
    if (!token) return;

    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "10",
        ...(searchTerm && { search: searchTerm }),
      });

      const response = await fetch(`/api/admin/users?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result: AdminUsersResponse = await response.json();

      if (result.data) {
        setUsers(result.data.users);
        setTotalPages(result.data.pagination.totalPages);
        setTotalUsers(result.data.pagination.total);
      } else if (result.error) {
        setMessage({ type: "error", text: result.error.message });
      }
    } catch {
      setMessage({ type: "error", text: "Lỗi khi tải danh sách người dùng" });
    } finally {
      setLoading(false);
    }
  }, [token, currentPage, searchTerm]);

  const handleUpdateUser = async (userId: string, updateData: EditUserData) => {
    if (!token) return;

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      });

      const result = await response.json();

      if (result.data) {
        setMessage({ type: "success", text: "Cập nhật người dùng thành công" });
        setEditingUser(null);
        setEditData({});
        fetchUsers(); // Refresh the list
      } else if (result.error) {
        setMessage({ type: "error", text: result.error.message });
      }
    } catch {
      setMessage({ type: "error", text: "Lỗi khi cập nhật người dùng" });
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!token) return;

    if (!confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (result.data) {
        setMessage({ type: "success", text: "Xóa người dùng thành công" });
        fetchUsers(); // Refresh the list
      } else if (result.error) {
        setMessage({ type: "error", text: result.error.message });
      }
    } catch {
      setMessage({ type: "error", text: "Lỗi khi xóa người dùng" });
    }
  };

  const startEdit = (userItem: UserProfile) => {
    setEditingUser(userItem);
    setEditData({
      points: userItem.points,
      isAdmin: userItem.isAdmin,
    });
  };

  const cancelEdit = () => {
    setEditingUser(null);
    setEditData({});
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchUsers();
  };

  useEffect(() => {
    if (isAuthenticated && user?.isAdmin) {
      fetchUsers();
    }
  }, [fetchUsers, isAuthenticated, user?.isAdmin]);

  // Clear message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Check if user is admin
  if (!isAuthenticated || !user?.isAdmin) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không có quyền truy cập</h1>
          <p className="text-gray-400">
            Bạn cần là admin để truy cập trang này
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Quản lý người dùng</h1>

        {/* Message */}
        {message && (
          <div
            className={`mb-4 p-4 rounded-lg ${
              message.type === "success"
                ? "bg-green-900/50 border border-green-500 text-green-200"
                : "bg-red-900/50 border border-red-500 text-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Search */}
        <Card className="bg-gray-900 border-gray-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Tìm kiếm</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex gap-4">
              <Input
                type="text"
                placeholder="Tìm theo tên hoặc tài khoản..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
              />
              <Button type="submit" disabled={loading}>
                {loading ? "Đang tìm..." : "Tìm kiếm"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">
              Danh sách người dùng ({totalUsers} người dùng)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <p className="text-gray-400">Đang tải...</p>
              </div>
            ) : users.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400">Không có người dùng nào</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="pb-3 text-gray-300">Họ tên</th>
                      <th className="pb-3 text-gray-300">Tài khoản</th>
                      <th className="pb-3 text-gray-300">Số điện thoại</th>
                      <th className="pb-3 text-gray-300">Điểm</th>
                      <th className="pb-3 text-gray-300">Admin</th>
                      <th className="pb-3 text-gray-300">Ngày tạo</th>
                      <th className="pb-3 text-gray-300">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((userItem) => (
                      <tr
                        key={userItem._id}
                        className="border-b border-gray-800"
                      >
                        <td className="py-3 text-white">{userItem.fullName}</td>
                        <td className="py-3 text-gray-300">
                          {userItem.username}
                        </td>
                        <td className="py-3 text-gray-300">
                          {userItem.phoneNumber}
                        </td>
                        <td className="py-3">
                          {editingUser?._id === userItem._id ? (
                            <Input
                              type="number"
                              value={editData.points || 0}
                              onChange={(e) =>
                                setEditData({
                                  ...editData,
                                  points: parseInt(e.target.value) || 0,
                                })
                              }
                              className="w-20 bg-gray-800 border-gray-600 text-white"
                            />
                          ) : (
                            <span className="text-yellow-400">
                              {userItem.points}
                            </span>
                          )}
                        </td>
                        <td className="py-3">
                          {editingUser?._id === userItem._id ? (
                            <input
                              type="checkbox"
                              checked={editData.isAdmin || false}
                              onChange={(e) =>
                                setEditData({
                                  ...editData,
                                  isAdmin: e.target.checked,
                                })
                              }
                              className="text-blue-500"
                            />
                          ) : (
                            <span
                              className={
                                userItem.isAdmin
                                  ? "text-green-400"
                                  : "text-gray-400"
                              }
                            >
                              {userItem.isAdmin ? "Có" : "Không"}
                            </span>
                          )}
                        </td>
                        <td className="py-3 text-gray-300">
                          {userItem.createdAt
                            ? new Date(userItem.createdAt).toLocaleDateString(
                                "vi-VN"
                              )
                            : "N/A"}
                        </td>
                        <td className="py-3">
                          {editingUser?._id === userItem._id ? (
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="default"
                                onClick={() =>
                                  handleUpdateUser(userItem._id, editData)
                                }
                              >
                                Lưu
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={cancelEdit}
                              >
                                Hủy
                              </Button>
                            </div>
                          ) : (
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => startEdit(userItem)}
                              >
                                Sửa
                              </Button>
                              {userItem._id !== user?._id && (
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleDeleteUser(userItem._id)}
                                >
                                  Xóa
                                </Button>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 gap-2">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Trước
                </Button>
                <span className="flex items-center px-4 text-gray-300">
                  Trang {currentPage} / {totalPages}
                </span>
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Sau
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
