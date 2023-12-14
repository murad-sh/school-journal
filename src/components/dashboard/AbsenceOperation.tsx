import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Loader2Icon as Spinner, TrashIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { toast } from "sonner";
import { addAbsence, deleteAbsence } from "@/services/api-absences";
import { getCurrentUser } from "@/lib/session";
import { useLocation, useParams } from "react-router-dom";
import NavigateLogin from "../shared/NavigateLogin";

const AbsenceOperation = ({
  type,
  mutate,
  absenceId,
}: {
  type: "add" | "delete";
  mutate: () => void;
  absenceId?: string;
}) => {
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const studentId = params.studentId as string;
  const lessonId = params.lessonId as string;

  const user = getCurrentUser();
  if (!user) return <NavigateLogin location={location} />;

  const addHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setLoading(true);
    const date = new Date().toLocaleDateString();
    try {
      await addAbsence({
        date,
        student: studentId,
        lesson: lessonId,
      });
      mutate();
      setShowAlert(false);
      toast.success("Absence added!");
    } catch (error) {
      toast.error("Something went wrong! Failed to add absence.");
    }
    setLoading(false);
  };

  const deleteHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setLoading(true);
    try {
      await deleteAbsence(absenceId!);
      mutate();
      setShowAlert(false);
      toast.success("Absence deleted successfully!");
    } catch (error) {
      toast.error("Something went wrong! Failed to delete absence.");
    }
    setLoading(false);
  };

  return (
    <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
      <AlertDialogTrigger asChild>
        {type === "delete" ? (
          <Button
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
          >
            <TrashIcon className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            className={cn(
              buttonVariants({ variant: "default" }),
              "flex items-center justify-end",
            )}
          >
            <PlusIcon className="mr-2 h-5 w-5" />
            Add Absence
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {type === "delete"
              ? "Are you sure you want to delete this absence?"
              : "Are you sure you want to add a new absence?"}
          </AlertDialogTitle>
          {type === "delete" && (
            <AlertDialogDescription>
              This action can't be undone.
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {type === "delete" ? (
            <AlertDialogAction
              onClick={deleteHandler}
              className="bg-red-600 focus:ring-red-600"
            >
              {loading ? (
                <Spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <TrashIcon className="mr-2 h-4 w-4" />
              )}
              <span>Delete</span>
            </AlertDialogAction>
          ) : (
            <AlertDialogAction
              onClick={addHandler}
              className="bg-blue-600 focus:ring-blue-600 dark:text-slate-100 dark:hover:text-slate-900"
            >
              {loading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
              <span>Add</span>
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AbsenceOperation;
