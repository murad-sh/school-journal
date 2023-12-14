import { Link, useLocation, useParams } from "react-router-dom";
import ErrorMessage from "../shared/ErrorMessage";
import InfoMessage from "../shared/InfoMessage";
import { noStudentsInfo } from "@/config/ui-messages";
import { buttonVariants } from "../ui/button";
import {
  CheckSquareIcon as GradesIcon,
  CalendarX2Icon as AbsencesIcon,
} from "lucide-react";
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import LessonSkeleton from "./LessonSkeleton";
import { useLesson } from "@/hooks/use-api-teacher";
import Student from "@/models/student";
import NavigateLogin from "../shared/NavigateLogin";

const Lesson = () => {
  const location = useLocation();
  const { lessonId } = useParams();
  const { lesson, error, isLoading, isUnauthorized } = useLesson(
    lessonId as string,
  );

  if (isLoading) return <LessonSkeleton />;

  if (error) {
    return <ErrorMessage />;
  }

  if (isUnauthorized) return <NavigateLogin location={location} />;

  return (
    <div className="container p-4 text-slate-900 dark:text-slate-100">
      <h2 className="mb-5 text-center text-2xl font-bold">
        {capitalizeFirstLetter(lesson.name)} -
        {` ${lesson.day}, ${lesson.startTime}`}
      </h2>
      <h4 className="mb-4 text-center text-base text-slate-700 dark:text-slate-300">
        Students List
      </h4>
      {lesson.students.length !== 0 ? (
        <ul className="overflow-hidden rounded-md border shadow-sm">
          {lesson.students.map((student: Student) => (
            <li
              key={student.id}
              className="flex items-center justify-between border-b p-4 last:border-b-0 sm:px-6"
            >
              <div className="flex flex-col gap-3 text-sm">
                <span className="font-medium">{`${student.name} ${student.surname}`}</span>
              </div>
              <div className="flex gap-4">
                <Link
                  to={`${student.id}/grades`}
                  className={cn(
                    buttonVariants({ variant: "blue", size: "sm" }),
                  )}
                  aria-label={`Grades for ${student.name} ${student.surname}`}
                >
                  Grades
                  <GradesIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to={`${student.id}/absences`}
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                  )}
                  aria-label={`Absences for ${student.name} ${student.surname}`}
                >
                  Absences
                  <AbsencesIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <InfoMessage
          message={noStudentsInfo.message}
          description={noStudentsInfo.description}
        />
      )}
    </div>
  );
};

export default Lesson;
