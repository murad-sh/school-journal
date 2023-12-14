import axiosInstance from "@/lib/axios-instance";

type Grade = {
  gradeValue: string;
  teacher?: string;
  student?: string;
  lesson?: string;
  details: string;
  date: string;
};

export const addGrade = async (grade: Grade) => {
  const res = await axiosInstance.post("/grades", grade);
  return res.data;
};

export const updateGrade = async (gradeId: string, grade: Grade) => {
  const res = await axiosInstance.patch(`/grades/${gradeId}`, grade);
  return res.data;
};

export const deleteGrade = async (gradeId: string) => {
  const res = await axiosInstance.delete(`/grades/${gradeId}`);
  return res.data;
};
