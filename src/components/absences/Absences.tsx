import ErrorMessage from "../shared/ErrorMessage";
import InfoMessage from "../shared/InfoMessage";
import { absencesInfo } from "@/config/ui-messages";
import { useAbsences } from "@/hooks/use-api-student";
import { Skeleton } from "../ui/skeleton";
import { useLocation } from "react-router-dom";
import NavigateLogin from "../shared/NavigateLogin";
import { Absence } from "@/models/absence";
import { capitalizeFirstLetter } from "@/lib/utils";

const Absences = () => {
  const location = useLocation();
  const { absences, isLoading, error, isUnauthorized } = useAbsences();

  if (isLoading) return <AbsencesSkeleton />;
  if (error) return <ErrorMessage />;
  if (isUnauthorized) return <NavigateLogin location={location} />;
  if (absences.length === 0)
    return (
      <InfoMessage
        message={absencesInfo.message}
        description={absencesInfo.description}
      />
    );

  return (
    <div className="container p-4">
      <ul className="overflow-hidden rounded-md border shadow-sm">
        {absences.map((absence: Absence) => (
          <li
            key={absence.id}
            className="flex items-center justify-between border-b p-4 last:border-b-0 sm:px-6"
          >
            <div className="flex flex-col gap-3 text-sm">
              <span className=" font-medium text-slate-900 dark:text-slate-100">
                {capitalizeFirstLetter(absence.lessonName as string)}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                Teacher: {`${absence.teacherName} ${absence.teacherSurname}`}
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
