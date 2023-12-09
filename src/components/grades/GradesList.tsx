import { studentGrades } from '@/data/mocked/student-grades';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type Grade = {
  score: number;
  teacher: string;
  assessmentDate: string;
  comment: string;
};

const GradesList = () => {
  const calculateAverage = (grades: Grade[]) => {
    if (grades.length === 0) return '-';
    const total = grades.reduce((acc, grade) => acc + grade.score, 0);
    console.log(total);
    return (total / grades.length).toFixed(2);
  };

  return (
    <div className="container p-4">
      {studentGrades.map((lesson, index) => (
        <div key={index} className="border p-2 mb-4">
          <div className="grid grid-cols-7 gap-4 items-center">
            <div className="font-semibold">{lesson.subject}</div>
            <div className="col-span-5 grid grid-cols-5 gap-2">
              {lesson.grades.length !== 0 &&
                lesson.grades.map((grade, gradeIndex) => (
                  <TooltipProvider key={gradeIndex}>
                    <Tooltip>
                      <TooltipTrigger className="bg-orange-700">
                        {grade.score}
                      </TooltipTrigger>
                      <TooltipContent>
                        <div>
                          <p>Assigned at: {grade.assessmentDate}</p>
                          <p>Teacher: {grade.teacher}</p>
                          <p>Comment: {grade.comment}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
            </div>
            <div className="font-semibold">
              {calculateAverage(lesson.grades)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GradesList;
