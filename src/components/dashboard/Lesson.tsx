import { Link, useParams } from "react-router-dom";
import { lesson } from "@/data/mocked/teacher";
import ErrorMessage from "../shared/ErrorMessage";
import InfoMessage from "../shared/InfoMessage";
import { noStudentsInfo } from "@/config/ui-messages";
import { buttonVariants } from "../ui/button";
import {
  CheckSquareIcon as GradesIcon,
  CalendarX2Icon as AbsencesIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import LessonSkeleton from "./LessonSkeleton";

const Lesson = () => {
  const { lessonId } = useParams();
  console.log(lessonId);

  // Loading State
  if (false) return <LessonSkeleton />;

  // Error state
  if (false) {
    return <ErrorMessage />;
  }

  return (
    <div className="container p-4 text-slate-900 dark:text-slate-100">
      <h2 className="mb-5 text-center text-2xl font-bold">
        {lesson.name} - {lesson.time}
      </h2>
      <h4 className="mb-4 text-center text-base text-slate-700 dark:text-slate-300">
        Students List
      </h4>
      {/* // TODO : -> studentsList.length!===0 */}
      {true ? (
        <ul className="overflow-hidden rounded-md border shadow-sm">
          {lesson.studentsList.map((student) => (
            <li
              key={student.id}
              className="flex items-center justify-between border-b p-4 last:border-b-0 sm:px-6"
            >
              <div className="flex flex-col gap-3 text-sm">
                <span className="font-medium">{student.fullName}</span>
              </div>
              <div className="flex gap-4">
                <Link
                  to={`${student.id}/grades`}
                  className={cn(
                    buttonVariants({ variant: "blue", size: "sm" }),
                  )}
                  aria-label={`Grades for ${student.fullName}`}
                >
                  Grades
                  <GradesIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to={`${student.id}/absences`}
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                  )}
                  aria-label={`Absences for ${student.fullName}`}
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
