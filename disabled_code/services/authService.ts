// src/services/authService.ts
import axiosClient from "../api/axiosClient";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: "patient" | "doctor";
}

export const loginUser = async (data: LoginData) => {
  const response = await axiosClient.post("/auth/login", data);
  return response.data; // خروجی معمولاً توکن یا اطلاعات کاربر است
};

export const registerUser = async (data: RegisterData) => {
  const response = await axiosClient.post("/auth/register", data);
  return response.data;
};

export const getMe = async () => {
  const response = await axiosClient.get("/auth/me");
  return response.data;
};
