import User from "@/models/user";
import { toast } from "sonner";

export const parseJwt = (token: string) =>
  JSON.parse(atob(token.split(".")[1]));

export function getCurrentUser() {
  const userString = localStorage.getItem("user");
  if (!userString) return null;

  const user = JSON.parse(userString) as User & { expiresAt: number };

  if (new Date().getTime() / 1000 > user.expiresAt) {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.warning("Your session expired");
    return null;
  }
  return user;
}
