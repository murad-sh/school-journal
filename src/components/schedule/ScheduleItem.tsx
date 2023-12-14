import { getCurrentUser } from "@/lib/session";
import { Lesson } from "@/models/lesson";
import NavigateLogin from "../shared/NavigateLogin";
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "@/lib/utils";

interface ScheduleListItemProps {
  lesson: Lesson;
}

const ScheduleItem = ({ lesson }: ScheduleListItemProps) => {
  const location = useLocation();
  const user = getCurrentUser();
  if (!user) return <NavigateLogin location={location} />;
  return (
    <li className="border-b p-4 last:border-b-0 sm:px-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3 text-sm">
          <span className="font-medium text-slate-900 dark:text-slate-100">
            {capitalizeFirstLetter(lesson.name)}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            {user.role === "student"
              ? `${lesson.teacherName} ${lesson.teacherSurname}, ${lesson.location}`
              : lesson.location}
          </span>
        </div>
        <span
          className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold leading-5 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {lesson.startTime} - {lesson.endTime}
        </span>
      </div>
    </li>
  );
};

export default ScheduleItem;
