import { useState, useEffect, useCallback } from 'react';
import apiService, { Doctor, Specialty, HomeStats } from '../services/api';

// هوک عمومی برای fetch داده‌ها
export function useApi<T>(
  fetchFunction: () => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطا در دریافت داده‌ها');
      console.error('Error in useApi:', err);
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, dependencies);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
}

// هوک مخصوص پزشکان
export function useDoctors(params?: any) {
  return useApi<Doctor[]>(
    () => apiService.doctors.getAll(params),
    [JSON.stringify(params)]
  );
}

// هوک مخصوص پزشکان برتر
export function useTopDoctors(limit: number = 3) {
  return useApi<Doctor[]>(
    () => apiService.doctors.getTopDoctors(limit),
    [limit]
  );
}

// هوک مخصوص تخصص‌ها
export function useSpecialties() {
  return useApi<Specialty[]>(
    () => apiService.specialties.getAll(),
    []
  );
}

// هوک مخصوص آمار
export function useHomeStats() {
  return useApi<HomeStats>(
    () => apiService.stats.getHomeStats(),
    []
  );
}

// هوک مخصوص مقالات
export function useArticles(limit: number = 3) {
  return useApi<any[]>(
    () => apiService.articles.getAll(limit),
    [limit]
  );
}

// هوک مخصوص جستجوی پزشکان
export function useDoctorSearch(params: any) {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (searchParams: any) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiService.doctors.search(searchParams);
      setDoctors(result.doctors);
      setTotal(result.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطا در جستجو');
      console.error('Error in search:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { doctors, total, loading, error, search };
}
