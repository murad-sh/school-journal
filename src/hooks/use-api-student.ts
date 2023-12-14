import { getCurrentUser } from "@/lib/session";
import useSWR from "swr";

export const useGrades = () => {
  const user = getCurrentUser();
  const { data, error, isLoading, mutate } = useSWR(
    user ? `/grades/students/all` : null,
  );

  return {
    grades: data,
    isLoading,
    error: error,
    isUnauthorized: !user,
    mutate,
  };
};

export const useAbsences = () => {
  const user = getCurrentUser();
  const { data, error, isLoading, mutate } = useSWR(
    user ? `/absences/students/all` : null,
  );

  return {
    absences: data,
    isLoading,
    error,
    isUnauthorized: !user,
    mutate,
  };
};
