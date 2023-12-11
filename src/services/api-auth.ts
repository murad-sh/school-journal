import axiosInstance from "@/lib/axios-instance";

export const login = async (username: string, password: string) => {
  const res = await axiosInstance.post("/signin", {
    username,
    password,
  });

  const token = res.data.token;
  // TODO : save user full name + role in local storage
  // localStorage.setItem("token");
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const logout = () => {
  // TODO : Cleanup local storage
  axiosInstance.defaults.headers.common["Authorization"] = "";
};
