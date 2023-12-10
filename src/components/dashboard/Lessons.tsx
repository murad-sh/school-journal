import { teacherLessons } from "@/data/mocked/teacher";
import { Link } from "react-router-dom";
import LessonsSkeleton from "./LessonsSkeleton";
import ErrorMessage from "../shared/ErrorMessage";
import InfoMessage from "../shared/InfoMessage";
import { lessonsInfo } from "@/config/ui-messages";

const Lessons = () => {
  // Loading state
  if (false) return <LessonsSkeleton />;

  // Error state
  if (false) return <ErrorMessage />;

  // No data state
  if (false)
    return (
      <InfoMessage
        message={lessonsInfo.message}
        description={lessonsInfo.description}
      />
    );

  return (
    <div className="container p-4">
      <ul className="overflow-hidden rounded-md border shadow-sm">
        {teacherLessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/dashboard/${lesson.id}`}
            className="block border-b p-4 text-slate-900 transition duration-200 last:border-b-0 hover:cursor-pointer hover:bg-accent hover:text-accent-foreground hover:text-blue-800 dark:text-slate-100 dark:hover:text-blue-500 sm:px-6"
          >
            <li className="flex w-full items-center justify-between">
              <div className="flex flex-grow flex-col gap-3 text-sm">
                <span className="font-semibold">{lesson.lesson}</span>
              </div>
              <span
                className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold leading-5 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {lesson.time}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Lessons;
