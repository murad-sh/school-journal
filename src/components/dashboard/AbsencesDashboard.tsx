import AbsenceOperation from "./AbsenceOperation";
import { Skeleton } from "../ui/skeleton";
import { useStudent } from "@/hooks/use-api-teacher";
import ErrorMessage from "../shared/ErrorMessage";
import { useLocation, useParams } from "react-router-dom";
import NavigateLogin from "../shared/NavigateLogin";
import { Absence } from "@/models/absence";
import { noStudentAbsencesInfo } from "@/config/ui-messages";
import InfoMessage from "../shared/InfoMessage";

const AbsencesDashboard = () => {
  const location = useLocation();
  const { studentId, lessonId } = useParams();
  const { student, isLoading, error, isUnauthorized, mutate } = useStudent(
    studentId as string,
    lessonId as string,
  );

  if (isLoading) return <AbsencesDashboardSkeleton />;
  if (error) return <ErrorMessage />;
  if (isUnauthorized) return <NavigateLogin location={location} />;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 text-center">
        <h1 className="mb-3 text-2xl font-bold">
          {`${student.name} ${student.surname}`}
        </h1>
        <h2 className="text-lg">Student's absences</h2>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <div className="flex-1"></div>
        <AbsenceOperation type="add" mutate={mutate} />
      </div>

      {student.absences.length !== 0 ? (
        <ul className="rounded border shadow-sm">
          {student.absences.map((absence: Absence) => (
            <li
              key={absence.id}
              className="flex items-center justify-between border-b p-4 last:border-b-0"
            >
              <p className="font-semibold">{absence.date}</p>
              <AbsenceOperation
                type="delete"
                absenceId={absence.id}
                mutate={mutate}
              />
            </li>
          ))}
        </ul>
      ) : (
        <InfoMessage
          message={noStudentAbsencesInfo.message}
          description={noStudentAbsencesInfo.description}
        />
      )}
    </div>
  );
};

export default AbsencesDashboard;

const AbsencesDashboardSkeleton = () => {
  return (
    <div className="container p-4">
      <div className="mb-6 flex flex-col items-center justify-center">
        <Skeleton className="mb-3 h-8 w-4/12" />
        <Skeleton className="h-7 w-40" />
      </div>

      <div className="mb-8 flex justify-end">
        <Skeleton className="h-10 w-36" />
      </div>

      <ul className="rounded border shadow-sm">
        {[...Array(4)].map((_, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b p-4 last:border-b-0"
          >
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-9 w-11" />
          </li>
        ))}
      </ul>
    </div>
  );
};
