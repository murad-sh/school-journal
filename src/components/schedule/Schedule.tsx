import { studentLessons } from "@/data/mocked/student-lessons";
import { organizeScheduleByDay } from "@/lib/calculations/schedule";
import ScheduleItem from "./ScheduleItem";
import ErrorMessage from "../shared/ErrorMessage";
import InfoMessage from "../shared/InfoMessage";
import { scheduleInfo } from "@/config/ui-messages";
import ScheduleSkeleton from "./ScheduleSkeleton";

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
