/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { LoginInput, loginSchema } from "@/lib/auth-schemas";

interface LoginScreenProps {
  onRegister?: () => void;
  onBack?: () => void;
  onLoginSuccess?: () => void;
}

export function LoginScreen({
  onRegister,
  onBack,
  onLoginSuccess,
}: LoginScreenProps) {
  const { login } = useAuth();
  const [formData, setFormData] = useState<LoginInput>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof LoginInput, value: string) => {
    setFormData((prev: LoginInput) => ({ ...prev, [field]: value }));
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
      loginSchema.parse(formData);
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
      const result = await login(formData);

      if (result.success) {
        onLoginSuccess?.();
      } else {
        setErrors({ general: result.error || "Đăng nhập thất bại" });
      }
    } catch {
      setErrors({ general: "Lỗi kết nối, vui lòng thử lại" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bg-black relative min-h-screen w-full overflow-hidden"
      data-name="[D] Sign in"
    >
      {/* Background Effect */}
      <div
        className="absolute h-full left-1/2 top-0 translate-x-[-50%] w-full min-w-[1920px] bg-gradient-to-r from-[#ff940600] via-[#ff940626] via-[51.941%] to-[#ff940600]"
        data-name="Background Effect"
      />

      {/* Decorative Background Pattern */}
      <div
        className="absolute left-0 top-0 w-full h-full"
        data-name="hoa-tiet-cham"
      >
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
      <div className="absolute inset-0" data-name="Group">
        <Image
          alt=""
          src="/assets/login/background-group.svg"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col min-h-screen relative z-10">
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-center pt-12 md:pt-24">
          <button
            onClick={onBack}
            className="h-32 w-52 md:h-52 md:w-[327px] bg-center bg-cover bg-no-repeat hover:scale-105 transition-transform cursor-pointer"
            style={{
              backgroundImage: "url('/assets/login/logo.png')",
            }}
            data-name="Logo"
            aria-label="Quay về trang chủ"
          />
        </div>

        {/* Sign in Section */}
        <div className="flex items-center justify-center px-4 py-6">
          <div className="relative w-full max-w-md md:max-w-[656px] md:h-[460px]">
            {/* Main Frame - Hidden on mobile, shown on desktop */}
            <div className="absolute inset-0 hidden md:block" data-name="Frame">
              <Image
                alt=""
                src="/assets/login/frame.svg"
                fill
                className="object-contain"
              />
            </div>

            {/* Frame Effects - Hidden on mobile */}
            <div
              className="absolute inset-0 hidden md:block"
              data-name="Effect"
            >
              <div
                className="absolute h-[38px] left-0 mix-blend-overlay top-0 w-full bg-no-repeat"
                style={{
                  backgroundImage: "url('/assets/login/as-tren.png')",
                  backgroundSize: "100% 103.12%",
                  backgroundPosition: "0% 97.07%",
                }}
                data-name="AS-trên 1"
              />
              <div
                className="absolute h-[38px] left-0 mix-blend-overlay top-0 w-full bg-no-repeat"
                style={{
                  backgroundImage: "url('/assets/login/as-tren.png')",
                  backgroundSize: "100% 103.12%",
                  backgroundPosition: "0% 97.07%",
                }}
                data-name="AS-trên 2"
              />
            </div>

            {/* Form Content */}
            <div className="relative md:absolute md:inset-0 flex flex-col justify-center px-4 md:px-12 py-6 md:py-8">
              {/* Mobile Background Card */}
              <div className="md:hidden absolute inset-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm rounded-2xl border border-[rgba(255,178,0,0.3)]"></div>

              <div className="relative z-10">
                {/* Error Message */}
                {errors.general && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-400 text-sm text-center">
                    {errors.general}
                  </div>
                )}

                {/* Username Field */}
                <div className="mb-4 md:mb-6" data-name="Username">
                  <div className="font-['Big_Shoulders_Display'] font-extrabold leading-none text-[#ffb200] text-lg md:text-[20px] tracking-[1.5px] uppercase mb-3">
                    Tên đăng nhập
                  </div>
                  <div
                    className={`backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.6)] flex gap-3 h-12 md:h-[52px] items-center p-3 w-full border ${
                      errors.username
                        ? "border-red-500"
                        : "border-[rgba(255,178,0,0.3)]"
                    } rounded-md`}
                  >
                    <div className="relative shrink-0 w-6 h-6 md:w-7 md:h-7">
                      <Image
                        alt=""
                        src="/assets/login/user-icon.svg"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Điền tên đăng nhập"
                      value={formData.username}
                      onChange={(e) =>
                        handleInputChange("username", e.target.value)
                      }
                      className="font-['Chakra_Petch'] leading-none text-[#a6a6a6] text-sm md:text-[16px] bg-transparent border-none outline-none flex-1 placeholder:text-[#a6a6a6]"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  {errors.username && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.username}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="mb-4 md:mb-6" data-name="Password">
                  <div className="font-['Big_Shoulders_Display'] font-extrabold leading-none text-[#ffb200] text-lg md:text-[20px] tracking-[1.5px] uppercase mb-3">
                    Mật khẩu
                  </div>
                  <div
                    className={`backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.6)] flex gap-3 h-12 md:h-[52px] items-center p-3 w-full border ${
                      errors.password
                        ? "border-red-500"
                        : "border-[rgba(255,178,0,0.3)]"
                    } rounded-md`}
                  >
                    <div className="relative shrink-0 w-6 h-6 md:w-7 md:h-7">
                      <Image
                        alt=""
                        src="/assets/login/lock-icon.svg"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <input
                      type="password"
                      placeholder="Điền mật khẩu"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className="font-['Chakra_Petch'] leading-none text-[#a6a6a6] text-sm md:text-[16px] bg-transparent border-none outline-none flex-1 placeholder:text-[#a6a6a6]"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.password}
                    </p>
                  )}
                  <div className="font-['Chakra_Petch'] font-medium leading-none text-[#a6a6a6] text-xs md:text-[12px] text-right mt-2 underline cursor-pointer hover:text-[#ffb200] transition-colors">
                    QUÊN MẬT KHẨU
                  </div>
                </div>

                {/* Login Button */}
                <form onSubmit={handleSubmit} className="mb-4 md:mb-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative h-14 md:h-16 w-full max-w-[250px] md:max-w-[278px] group mx-auto block disabled:opacity-50 disabled:cursor-not-allowed"
                    data-name="Button"
                  >
                    <div
                      className="absolute h-14 md:h-16 left-0 top-0 w-full"
                      data-name="Frame"
                    >
                      <div className="absolute inset-[-15.63%_-3.6%]">
                        <Image
                          alt=""
                          src="/assets/login/button-frame.svg"
                          fill
                          className="object-contain group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute font-['Big_Shoulders_Display'] font-black leading-none text-black text-lg md:text-[20px] text-center whitespace-nowrap tracking-[1.5px] translate-x-[-50%] uppercase group-hover:scale-105 transition-transform"
                      style={{
                        top: "calc(50% - 12px)",
                        left: "calc(50% + 0.5px)",
                      }}
                    >
                      {isLoading ? "ĐANG XỬ LÝ..." : "ĐĂNG NHẬP"}
                    </div>
                  </button>
                </form>

                {/* Sign up Link */}
                <div
                  className="flex font-['Chakra_Petch'] font-medium gap-2 items-center justify-center leading-none text-sm md:text-[16px]"
                  data-name="Sign up"
                >
                  <div className="text-[#a6a6a6]">Chưa có tài khoản?</div>
                  <button
                    type="button"
                    onClick={onRegister}
                    className="text-[#ff9406] hover:underline cursor-pointer"
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
