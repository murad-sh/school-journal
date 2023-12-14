import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import GradeOperations from "./GradeOperations";
import GradeForm from "./GradeForm";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { useLocation, useParams } from "react-router-dom";
import { useStudent } from "@/hooks/use-api-teacher";
import ErrorMessage from "../shared/ErrorMessage";
import NavigateLogin from "../shared/NavigateLogin";
import { Grade } from "@/models/grade";
import InfoMessage from "../shared/InfoMessage";
import { noStudentGradesInfo } from "@/config/ui-messages";

const GradesDashboard = () => {
  const [showDialog, setShowDialog] = useState(false);
  const location = useLocation();
  const { studentId, lessonId } = useParams();
  const { student, isLoading, error, isUnauthorized, mutate } = useStudent(
    studentId as string,
    lessonId as string,
  );

  if (isLoading) return <GradesDashboardSkeleton />;
  if (error) return <ErrorMessage />;
  if (isUnauthorized) return <NavigateLogin location={location} />;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 text-center">
        <h1 className="mb-3 text-2xl font-bold">
          {`${student.name} ${student.surname}`}
        </h1>
        <h2 className="text-lg">Student's grades</h2>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <div className="flex-1"></div>
        <Button
          className="flex items-center justify-end"
          onClick={() => setShowDialog(true)}
        >
          <PlusIcon className="mr-2 h-5 w-5" />
          Add Grade
        </Button>
      </div>

      {student.grades.length !== 0 ? (
        <ul className="rounded border shadow-sm">
          {student.grades.map((grade: Grade) => (
            <li
              key={grade.id}
              className="flex items-center justify-between border-b p-4 last:border-b-0"
            >
              <div className="space-y-1">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Score: {grade.gradeValue}
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Date: {grade.date}
                </p>
                <p className="text-sm text-slate-700  dark:text-slate-300">
                  Comment: {grade.details}
                </p>
              </div>
              <div>
                <GradeOperations grade={grade} mutate={mutate} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <InfoMessage
          message={noStudentGradesInfo.message}
          description={noStudentGradesInfo.description}
        />
      )}
      <GradeForm
        open={showDialog}
        setOpen={setShowDialog}
        type="Add"
        onSubmit={() => {
          mutate();
          setShowDialog(false);
        }}
      />
    </div>
  );
};

export default GradesDashboard;

const GradesDashboardSkeleton = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex flex-col items-center justify-center">
        <Skeleton className="mb-3 h-8 w-4/12" />
        <Skeleton className="h-7 w-40" />
      </div>

      <div className="mb-8 flex justify-end">
        <Skeleton className="h-10 w-36" />
      </div>

      <ul className="rounded border shadow-sm">
        {[...Array(2)].map((_, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b p-4 last:border-b-0"
          >
            <div className="flex-1 space-y-1">
              <Skeleton className="h-6 w-1/12" />
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-5 w-1/3" />
            </div>
            <Skeleton className="h-8 w-8" />
          </li>
        ))}
      </ul>
    </div>
  );
};
