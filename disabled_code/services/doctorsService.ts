import axiosClient from "./api";
import { Doctor } from "./api";

export const doctorsService = {
  // دریافت پزشکان برتر
  getTopDoctors: async (limit: number = 3): Promise<Doctor[]> => {
    try {
      const response = await axiosClient.get("/doctors/top", {
        params: { limit }
      });
      return response.data || [];
    } catch (error) {
      console.error("Error fetching top doctors:", error);
      return getSampleDoctors(); // Fallback data
    }
  },

  // جستجوی پزشکان
  searchDoctors: async (params: {
    query?: string;
    specialty?: string;
    city?: string;
    province?: string;
    date?: string;
    page?: number;
    limit?: number;
  }): Promise<{ doctors: Doctor[]; total: number }> => {
    try {
      const response = await axiosClient.get("/doctors/search", { params });
      return {
        doctors: response.data?.doctors || [],
        total: response.data?.total || 0
      };
    } catch (error) {
      console.error("Error searching doctors:", error);
      return { doctors: getSampleDoctors(), total: 0 };
    }
  },

  // دریافت یک پزشک خاص
  getDoctorById: async (id: number): Promise<Doctor | null> => {
    try {
      const response = await axiosClient.get(`/doctors/${id}`);
      return response.data || null;
    } catch (error) {
      console.error(`Error fetching doctor ${id}:`, error);
      return null;
    }
  },

  // داده‌های نمونه
  getSampleDoctors,
};

function getSampleDoctors(): Doctor[] {
  return [
    // داده‌های نمونه تو
  ];
}
