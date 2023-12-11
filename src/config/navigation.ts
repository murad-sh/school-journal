import { SidebarNavItem } from "@/types";
import {
  CalendarDays as ScheduleIcon,
  CheckSquare as GradesIcon,
  CalendarX2 as AbsencesIcon,
  PenSquare as DashboardIcon,
} from "lucide-react";

export const studentNav: SidebarNavItem[] = [
  {
    title: "Schedule",
    icon: ScheduleIcon,
    to: "/schedule",
  },
  {
    title: "Grades",
    icon: GradesIcon,
    to: "/grades",
  },
  {
    title: "Absences",
    icon: AbsencesIcon,
    to: "/absences",
  },
];

export const teacherNav: SidebarNavItem[] = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    to: "/dashboard",
  },

  {
    title: "Schedule",
    icon: ScheduleIcon,
    to: "/schedule",
  },
];
