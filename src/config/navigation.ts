import { SidebarNavItem } from '@/types';
import {
  CalendarDays as ScheduleIcon,
  PenSquare as GradesIcon,
  CalendarX2 as AbsencesIcon,
} from 'lucide-react';

export const studentNav: SidebarNavItem[] = [
  {
    title: 'Schedule',
    icon: ScheduleIcon,
    to: '/schedule',
  },
  {
    title: 'Grades',
    icon: GradesIcon,
    to: '/grades',
  },
  {
    title: 'Absences',
    icon: AbsencesIcon,
    to: '/absences',
  },
];
