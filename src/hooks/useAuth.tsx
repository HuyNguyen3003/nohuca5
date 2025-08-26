"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { UserProfile, RegisterInput, LoginInput } from "../../lib/auth-schemas";
import { authStorage } from "../../lib/auth-utils";

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (
    credentials: LoginInput
  ) => Promise<{ success: boolean; error?: string }>;
  register: (
    userData: RegisterInput
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  // Check auth status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    setIsLoading(true);
    try {
      const storedUser = authStorage.getUser();
      const storedToken = authStorage.getToken();

      if (storedUser && storedToken) {
        // Verify token with server
        const response = await fetch("/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          if (result.data) {
            setUser(result.data);
            setToken(storedToken);
          } else {
            // Token invalid, clear storage
            authStorage.clearAuth();
            setUser(null);
            setToken(null);
          }
        } else {
          // Token invalid, clear storage
          authStorage.clearAuth();
          setUser(null);
          setToken(null);
        }
      } else {
        setUser(null);
        setToken(null);
      }
    } catch (error) {
      console.error("Check auth error:", error);
      authStorage.clearAuth();
      setUser(null);
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (
    credentials: LoginInput
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();

      if (response.ok && result.data) {
        const { user: userData, token: authToken } = result.data;
        authStorage.setAuth(userData, authToken);
        setUser(userData);
        setToken(authToken);
        return { success: true };
      } else {
        return {
          success: false,
          error: result.error?.message || "Đăng nhập thất bại",
        };
      }
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error: "Lỗi kết nối, vui lòng thử lại",
      };
    }
  };

  const register = async (
    userData: RegisterInput
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok && result.data) {
        const { user: newUser, token: authToken } = result.data;
        authStorage.setAuth(newUser, authToken);
        setUser(newUser);
        setToken(authToken);
        return { success: true };
      } else {
        return {
          success: false,
          error: result.error?.message || "Đăng ký thất bại",
        };
      }
    } catch (error) {
      console.error("Register error:", error);
      return {
        success: false,
        error: "Lỗi kết nối, vui lòng thử lại",
      };
    }
  };

  const logout = () => {
    authStorage.clearAuth();
    setUser(null);
    setToken(null);
  };

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
