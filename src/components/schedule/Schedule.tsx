import { studentLessons } from "@/data/mocked/student-lessons";
import { organizeScheduleByDay } from "@/lib/calculations/schedule";
import ScheduleItem from "./ScheduleItem";
import ErrorMessage from "../shared/ErrorMessage";
import InfoMessage from "../shared/InfoMessage";
import { scheduleInfo } from "@/config/ui-messages";
import { Skeleton } from "../ui/skeleton";

const Schedule = () => {
  const scheduleByDay = organizeScheduleByDay(studentLessons);
  const daysOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Loading State
  if (false) return <ScheduleSkeleton />;

  // Error State
  if (false) return <ErrorMessage />;

  // No data state
  if (false)
    return (
      <InfoMessage
        message={scheduleInfo.message}
        description={scheduleInfo.description}
      />
    );

  return (
    <div className="container p-4">
      {daysOrder.map(
        (day) =>
          scheduleByDay[day] && (
            <div key={day} className="mb-10">
              <h2 className="mb-2 text-lg font-semibold">{day}</h2>
              <ul className="overflow-hidden rounded-md border shadow-sm">
                {scheduleByDay[day].map((lesson, index) => (
                  <ScheduleItem key={index} lesson={lesson} />
                ))}
              </ul>
            </div>
          ),
      )}
    </div>
  );
};

export default Schedule;

const ScheduleSkeleton = () => {
  return (
    <>
      <div className="container mb-7 p-4">
        <Skeleton className="mb-3 h-5 w-28 text-left" />
        <ul className="overflow-hidden rounded-md border shadow-sm">
          {[...Array(2)].map((_, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b p-4 last:border-b-0 sm:px-6"
            >
              <div className="flex-1">
                <Skeleton className="mb-3 h-5 w-1/5" />
                <Skeleton className="h-5 w-2/5" />
              </div>
              <div className="flex-none">
                <Skeleton className="h-7 w-24 rounded-full" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="container p-4">
        <Skeleton className="mb-3 h-5 w-28 text-left" />
        <ul className="overflow-hidden rounded-md border shadow-sm">
          {[...Array(2)].map((_, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b p-4 last:border-b-0 sm:px-6"
            >
              <div className="flex-1">
                <Skeleton className="mb-3 h-5 w-1/5" />
                <Skeleton className="h-5 w-2/5" />
              </div>
              <div className="flex-none">
                <Skeleton className="h-7 w-24 rounded-full" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
