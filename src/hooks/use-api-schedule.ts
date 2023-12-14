import { getCurrentUser } from "@/lib/session";
import useSWR from "swr";

export const useSchedule = () => {
  const user = getCurrentUser();
  const { data, error, isLoading, mutate } = useSWR(
    user ? `/schedules/${user.role}s` : null,
  );
  return {
    schedule: data,
    isLoading,
    error: error,
    isUnauthorized: !user,
    mutate,
  };
};
