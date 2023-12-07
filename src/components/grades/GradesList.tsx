import React from 'react';
import { studentGrades } from '@/data/mocked/student-grades';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type Grade = {
  grade?: number;
  teacher?: string;
  date?: string;
  description?: string;
};

const GradesList = () => {
  const calculateAverage = (grades: Grade[]) => {
    const validGrades = grades.filter((g) => g.grade != null);
    const total = validGrades.reduce(
      (acc, grade) => acc + (grade.grade || 0),
      0
    );
    return validGrades.length > 0
      ? (total / validGrades.length).toFixed(2)
      : '-';
  };

  const createGradePlaceholders = (grades: Grade[]) => {
    const placeholders = new Array(5).fill({});
    grades.forEach((grade, index) => {
      placeholders[index] = grade;
    });
    return placeholders;
  };

  return (
    <div className="container p-4">
      <div className="grid grid-cols-7 gap-4">
        <div className="font-semibold">Lesson</div>
        <div className="font-semibold col-span-5 text-center">Grades</div>
        <div className="font-semibold">Average</div>

        {studentGrades.map((item, index) => (
          <React.Fragment key={index}>
            <div>{item.lesson}</div>
            {createGradePlaceholders(item.grades).map((grade, gradeIndex) => (
              <div key={gradeIndex}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>{grade.grade ?? '-'}</TooltipTrigger>
                    <TooltipContent>
                      {grade.grade != null ? (
                        <div>
                          <p>Date: {grade.date}</p>
                          <p>Teacher: {grade.teacher}</p>
                          <p>Description: {grade.description}</p>
                        </div>
                      ) : (
                        'No grade'
                      )}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
            <div>{calculateAverage(item.grades)}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GradesList;
