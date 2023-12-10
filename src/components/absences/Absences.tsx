import { studentAbsences } from "@/data/mocked/student-absences";
import ErrorMessage from "../shared/ErrorMessage";
import InfoMessage from "../shared/InfoMessage";
import { absencesInfo } from "@/config/ui-messages";
import { Skeleton } from "../ui/skeleton";

const Absences = () => {
  // Loading State
  if (false) return <AbsencesSkeleton />;

  // Error state
  if (false) return <ErrorMessage />;

  // No data state
  if (false)
    return (
      <InfoMessage
        message={absencesInfo.message}
        description={absencesInfo.description}
      />
    );

  return (
    <div className="container p-4">
      <ul className="overflow-hidden rounded-md border shadow-sm">
        {studentAbsences.map((absence, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b p-4 last:border-b-0 sm:px-6"
          >
            <div className="flex flex-col gap-3 text-sm">
              <span className=" font-medium text-slate-900 dark:text-slate-100">
                {absence.lesson}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                Teacher: {absence.teacher}
              </span>
            </div>
            <span
              className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold leading-5 text-rose-900 dark:bg-rose-800 dark:text-rose-100"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {absence.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Absences;

const AbsencesSkeleton = () => {
  return (
    <div className="container p-4">
      <ul className="overflow-hidden rounded-md border shadow-sm">
        {[...Array(5)].map((_, index) => (
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
  );
};
