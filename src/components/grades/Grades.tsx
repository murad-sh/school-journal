import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { calculateAverage, transformGrades } from "@/lib/calculations/grade";
import GradesListSkeleton from "./GradesSkeleton";
import ErrorMessage from "../shared/ErrorMessage";
import InfoMessage from "../shared/InfoMessage";
import { gradesInfo } from "@/config/ui-messages";
import { useGrades } from "@/hooks/use-api-student";
import { useLocation } from "react-router-dom";
import NavigateLogin from "../shared/NavigateLogin";

const Grades = () => {
  const location = useLocation();
  const { grades, isLoading, error, isUnauthorized } = useGrades();

  if (isLoading) {
    return <GradesListSkeleton />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (isUnauthorized) {
    return <NavigateLogin location={location} />;
  }

  if (grades.length === 0) {
    return (
      <InfoMessage
        message={gradesInfo.message}
        description={gradesInfo.description}
      />
    );
  }

  const studentGrades = transformGrades(grades);
  return (
    <div className="container mx-auto p-4">
      <ul className="overflow-hidden rounded-md border text-center shadow-sm">
        <li className="text-md grid grid-cols-2 gap-2 bg-blue-800 px-4 py-2 font-semibold text-slate-100 sm:grid-cols-5 md:grid-cols-12 md:gap-4">
          <div className="md:col-span-2">Subject</div>
          <div className="md:col-span-8">Grades</div>
          <div className="md:col-span-2">Average</div>
        </li>
        {studentGrades.map((lesson, index) => (
          <li key={index} className="border-b px-4 py-3 last:border-b-0">
            <div className="grid grid-cols-2 items-center gap-3 text-sm sm:grid-cols-5 md:grid-cols-12 md:gap-4">
              <div className="break-words font-medium md:col-span-2">
                {lesson.subject}
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 md:col-span-8 md:grid-cols-10">
                {lesson.grades.map((grade, gradeIndex) => (
                  <TooltipProvider key={gradeIndex}>
                    <Tooltip>
                      <TooltipTrigger className="flex h-8 w-full items-center justify-center rounded border bg-slate-100 dark:bg-slate-800 dark:text-slate-300">
                        {grade.score}
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="p-0.5 text-left">
                          <p>Date: {grade.assessmentDate}</p>
                          <p>Teacher: {grade.teacher}</p>
                          <p>Comment: {grade.comment}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
              <div className="text-base md:col-span-2">
                {calculateAverage(lesson.grades)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grades;
