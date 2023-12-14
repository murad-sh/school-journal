import { Grade } from "@/models/grade";
import { capitalizeFirstLetter } from "../utils";

type GradeDetail = {
  score: number;
  teacher: string;
  assessmentDate: string;
  comment: string;
};

type SubjectGrade = {
  subject: string;
  grades: GradeDetail[];
};

export const transformGrades = (grades: Grade[]): SubjectGrade[] => {
  const gradeMap: { [key: string]: GradeDetail[] } = {};

  grades.forEach((grade) => {
    const subject = capitalizeFirstLetter(grade.lessonName);
    const teacherFullName = `${grade.teacherName} ${grade.teacherSurname}`;
    const gradeDetail: GradeDetail = {
      score: Number(grade.gradeValue),
      teacher: teacherFullName,
      assessmentDate: grade.date,
      comment: grade.details,
    };

    if (!gradeMap[subject]) {
      gradeMap[subject] = [];
    }
    gradeMap[subject].push(gradeDetail);
  });

  return Object.keys(gradeMap).map((subject) => ({
    subject: subject,
    grades: gradeMap[subject],
  }));
};

export const calculateAverage = (grades: GradeDetail[]) => {
  if (grades.length === 0) return "-";
  const total = grades.reduce((acc, grade) => acc + grade.score, 0);
  return (total / grades.length).toFixed(2);
};
