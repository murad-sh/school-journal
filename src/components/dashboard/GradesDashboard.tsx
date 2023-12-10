import { Button } from "../ui/button";
import { studentLessonData } from "@/data/mocked/teacher";
import { PlusIcon } from "lucide-react";
import GradeOperations from "./GradeOperations";
import { toast } from "sonner";
import GradeForm from "./GradeForm";
import { useState } from "react";

const GradesDashboard = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 text-center">
        <h1 className="mb-3 text-2xl font-bold">
          {studentLessonData.fullName}
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

      <ul className="rounded border shadow-sm">
        {studentLessonData.grades.map((grade, index) => (
          <li
            // TODO : Actual index
            key={index}
            className="flex items-center justify-between border-b p-4 last:border-b-0"
          >
            <div className="space-y-1">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Score: {grade.score}
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Date: {grade.assessmentDate}
              </p>
              <p className="text-sm text-slate-700  dark:text-slate-300">
                Comment: {grade.comment}
              </p>
            </div>
            <div>
              <GradeOperations grade={grade} />
            </div>
          </li>
        ))}
      </ul>
      <GradeForm
        open={showDialog}
        setOpen={setShowDialog}
        type="Add"
        onSubmit={() => toast.success("Added!")}
      />
    </div>
  );
};

export default GradesDashboard;
