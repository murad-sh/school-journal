type User = {
  id: string;
  fullName: string;
  role: "student" | "teacher";
  expiresAt: number;
};

export default User;
