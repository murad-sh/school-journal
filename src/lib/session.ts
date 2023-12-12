import User from "@/models/user";

export function getCurrentUser() {
  const user = localStorage.getItem("user");
  if (!user) return null;
  return JSON.parse(user) as User;
}
