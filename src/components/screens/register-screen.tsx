/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { RegisterInput, registerSchema } from "@/lib/auth-schemas";

interface RegisterScreenProps {
  onLogin?: () => void;
  onBack?: () => void;
  onRegisterSuccess?: () => void;
}

export function RegisterScreen({
  onLogin,
  onBack,
  onRegisterSuccess,
}: RegisterScreenProps) {
  const { register } = useAuth();
  const [formData, setFormData] = useState<RegisterInput>({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof RegisterInput, value: string) => {
    setFormData((prev: RegisterInput) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as string]) {
      setErrors((prev: Record<string, string>) => ({
        ...prev,
        [field as string]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    try {
      registerSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const newErrors: Record<string, string> = {};
      error.issues?.forEach((err: any) => {
        if (err.path && err.path[0]) {
          newErrors[err.path[0]] = err.message;
        }
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const result = await register(formData);

      if (result.success) {
        onRegisterSuccess?.();
      } else {
        setErrors({ general: result.error || "Đăng ký thất bại" });
      }
    } catch {
      setErrors({ general: "Lỗi kết nối, vui lòng thử lại" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black relative min-h-screen w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute left-0 top-0 w-full h-full">
        <div
          className="absolute h-[395px] left-0 opacity-20 bottom-0 w-full bg-gradient-to-t from-[#000000] from-[50.344%] to-[#00000000] bg-repeat bg-top-left"
          style={{
            backgroundImage: "url('/assets/login/hoa-tiet-cham.png')",
            backgroundSize: "auto 200px",
          }}
        />
        <div className="absolute flex h-[395px] items-center justify-center left-0 top-0 w-full">
          <div className="flex-none rotate-[180deg]">
            <div
              className="h-[395px] opacity-20 w-full bg-gradient-to-t from-[#000000] from-[50.344%] to-[#00000000] bg-repeat bg-top-left"
              style={{
                backgroundImage: "url('/assets/login/hoa-tiet-cham.png')",
                backgroundSize: "auto 200px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Background Group SVG */}
      <div className="absolute inset-0">
        <Image
          alt=""
          src="/assets/login/background-group.svg"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen relative z-10">
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-center pt-12 md:pt-16">
          <button
            onClick={onBack}
            className="h-24 w-40 md:h-32 md:w-52 bg-center bg-cover bg-no-repeat hover:scale-105 transition-transform cursor-pointer"
            style={{
              backgroundImage: "url('/assets/login/logo.png')",
            }}
            aria-label="Quay về trang chủ"
          />
        </div>

        {/* Register Section */}
        <div className="flex items-center justify-center px-4 py-4">
          <div className="relative w-full max-w-md">
            {/* Form Content */}
            <div className="relative">
              {/* Mobile Background Card */}
              <div className="md:hidden absolute inset-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm rounded-2xl border border-[rgba(255,178,0,0.3)]"></div>

              <div className="relative z-10 px-6 py-8">
                <h1 className="font-['Big_Shoulders_Display'] font-black text-2xl text-[#ffb200] text-center mb-6 tracking-wider uppercase">
                  ĐĂNG KÝ TÀI KHOẢN
                </h1>

                {/* Error Message */}
                {errors.general && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-400 text-sm text-center">
                    {errors.general}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name Field */}
                  <div>
                    <div className="font-['Big_Shoulders_Display'] font-extrabold leading-none text-[#ffb200] text-sm tracking-[1px] uppercase mb-2">
                      Họ và tên
                    </div>
                    <div
                      className={`backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.6)] flex gap-3 h-12 items-center p-3 w-full border ${
                        errors.fullName
                          ? "border-red-500"
                          : "border-[rgba(255,178,0,0.3)]"
                      } rounded-md`}
                    >
                      <div className="relative shrink-0 w-5 h-5">
                        <Image
                          alt=""
                          src="/assets/login/user-icon.svg"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Nhập họ và tên"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        className="font-['Chakra_Petch'] leading-none text-white text-sm bg-transparent border-none outline-none flex-1 placeholder:text-[#a6a6a6]"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Username Field */}
                  <div>
                    <div className="font-['Big_Shoulders_Display'] font-extrabold leading-none text-[#ffb200] text-sm tracking-[1px] uppercase mb-2">
                      Tên đăng nhập
                    </div>
                    <div
                      className={`backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.6)] flex gap-3 h-12 items-center p-3 w-full border ${
                        errors.username
                          ? "border-red-500"
                          : "border-[rgba(255,178,0,0.3)]"
                      } rounded-md`}
                    >
                      <div className="relative shrink-0 w-5 h-5">
                        <Image
                          alt=""
                          src="/assets/login/user-icon.svg"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Nhập tên đăng nhập"
                        value={formData.username}
                        onChange={(e) =>
                          handleInputChange("username", e.target.value)
                        }
                        className="font-['Chakra_Petch'] leading-none text-white text-sm bg-transparent border-none outline-none flex-1 placeholder:text-[#a6a6a6]"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    {errors.username && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.username}
                      </p>
                    )}
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <div className="font-['Big_Shoulders_Display'] font-extrabold leading-none text-[#ffb200] text-sm tracking-[1px] uppercase mb-2">
                      Số điện thoại
                    </div>
                    <div
                      className={`backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.6)] flex gap-3 h-12 items-center p-3 w-full border ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-[rgba(255,178,0,0.3)]"
                      } rounded-md`}
                    >
                      <div className="relative shrink-0 w-5 h-5">
                        <Image
                          alt=""
                          src="/assets/login/user-icon.svg"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <input
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          handleInputChange("phoneNumber", e.target.value)
                        }
                        className="font-['Chakra_Petch'] leading-none text-white text-sm bg-transparent border-none outline-none flex-1 placeholder:text-[#a6a6a6]"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <div className="font-['Big_Shoulders_Display'] font-extrabold leading-none text-[#ffb200] text-sm tracking-[1px] uppercase mb-2">
                      Mật khẩu
                    </div>
                    <div
                      className={`backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.6)] flex gap-3 h-12 items-center p-3 w-full border ${
                        errors.password
                          ? "border-red-500"
                          : "border-[rgba(255,178,0,0.3)]"
                      } rounded-md`}
                    >
                      <div className="relative shrink-0 w-5 h-5">
                        <Image
                          alt=""
                          src="/assets/login/lock-icon.svg"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        className="font-['Chakra_Petch'] leading-none text-white text-sm bg-transparent border-none outline-none flex-1 placeholder:text-[#a6a6a6]"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <div className="font-['Big_Shoulders_Display'] font-extrabold leading-none text-[#ffb200] text-sm tracking-[1px] uppercase mb-2">
                      Xác nhận mật khẩu
                    </div>
                    <div
                      className={`backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.6)] flex gap-3 h-12 items-center p-3 w-full border ${
                        errors.confirmPassword
                          ? "border-red-500"
                          : "border-[rgba(255,178,0,0.3)]"
                      } rounded-md`}
                    >
                      <div className="relative shrink-0 w-5 h-5">
                        <Image
                          alt=""
                          src="/assets/login/lock-icon.svg"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <input
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                        className="font-['Chakra_Petch'] leading-none text-white text-sm bg-transparent border-none outline-none flex-1 placeholder:text-[#a6a6a6]"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="relative h-12 w-full max-w-[200px] group mx-auto block disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0">
                        <div className="absolute inset-[-15.63%_-3.6%]">
                          <Image
                            alt=""
                            src="/assets/login/button-frame.svg"
                            fill
                            className="object-contain group-hover:scale-105 transition-transform"
                          />
                        </div>
                      </div>
                      <div className="absolute font-['Big_Shoulders_Display'] font-black leading-none text-black text-base text-center whitespace-nowrap tracking-[1.5px] translate-x-[-50%] uppercase group-hover:scale-105 transition-transform top-1/2 left-1/2 -translate-y-1/2">
                        {isLoading ? "ĐANG XỬ LÝ..." : "ĐĂNG KÝ"}
                      </div>
                    </button>
                  </div>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center">
                  <p className="text-[#a6a6a6] text-sm">
                    Đã có tài khoản?{" "}
                    <button
                      onClick={onLogin}
                      className="text-[#ff9406] hover:underline cursor-pointer"
                      disabled={isLoading}
                    >
                      Đăng nhập
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
