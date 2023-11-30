import { Lesson } from '@/models/lesson';

interface ScheduleByDay {
  [key: string]: Lesson[];
}

export const organizeScheduleByDay = (lessons: Lesson[]): ScheduleByDay => {
  const data: ScheduleByDay = lessons.reduce(
    (acc: ScheduleByDay, lesson: Lesson) => {
      acc[lesson.day] = acc[lesson.day] || [];
      acc[lesson.day].push(lesson);
      return acc;
    },
    {}
  );

  Object.keys(data).forEach((day) => {
    data[day].sort((a, b) => a.startTime.localeCompare(b.startTime));
  });

  return data;
};
