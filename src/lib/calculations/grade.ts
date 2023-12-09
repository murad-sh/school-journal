import { Grade } from '@/models/grade';

export const calculateAverage = (grades: Grade[]) => {
  if (grades.length === 0) return '-';
  const total = grades.reduce((acc, grade) => acc + grade.score, 0);
  return (total / grades.length).toFixed(2);
};
