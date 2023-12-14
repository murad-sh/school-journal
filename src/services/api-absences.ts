import axiosInstance from "@/lib/axios-instance";
import { Absence } from "@/models/absence";

export const addAbsence = async (absence: Absence) => {
  const res = await axiosInstance.post("/absences", absence);
  return res.data;
};

export const deleteAbsence = async (absenceId: string) => {
  const res = await axiosInstance.delete(`/absences/${absenceId}`);
  return res.data;
};
