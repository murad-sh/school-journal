import axiosInstance from "@/lib/axios-instance";

export const login = async (username: string, password: string) => {
  const res = await axiosInstance.post("/signin", {
    username,
    password,
  });

  console.log(res);

  const token = res.data.token;
  const user = JSON.stringify({
    id: res.data.userId,
    // fullName: res.data.fullName,
    role: res.data.role.toLowerCase(),
  });

  localStorage.setItem("token", token);
  localStorage.setItem("user", user);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
