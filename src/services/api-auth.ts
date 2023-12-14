import axiosInstance from "@/lib/axios-instance";
import { parseJwt } from "@/lib/session";

export const login = async (username: string, password: string) => {
  const res = await axiosInstance.post("/signin", {
    username,
    password,
  });

  const token = res.data.token;
  const expiresAt = parseJwt(token).exp;
  const user = JSON.stringify({
    id: res.data.userId,
    fullName: `${res.data.name} ${res.data.surname}`,
    role: res.data.role.toLowerCase(),
    expiresAt: expiresAt,
  });

  localStorage.setItem("token", token);
  localStorage.setItem("user", user);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
