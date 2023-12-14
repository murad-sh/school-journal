import { getCurrentUser } from "@/lib/session";
import useSWR from "swr";

export const useLesson = (lessonId: string) => {
  const user = getCurrentUser();
  const { data, error, isLoading, mutate } = useSWR(
    user ? `/lessons/details/${lessonId}` : null,
  );

  return {
    lesson: data,
    isLoading,
    error,
    isUnauthorized: !user,
    mutate,
  };
};

export const useStudent = (studentId: string, lessonId: string) => {
  const user = getCurrentUser();
  const { data, error, isLoading, mutate } = useSWR(
    user ? `/students/${studentId}/${lessonId}` : null,
  );

  return {
    student: data,
    isLoading,
    error,
    isUnauthorized: !user,
    mutate,
  };
};
