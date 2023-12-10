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

const AbsenceOperation = ({ type }: { type: "add" | "delete" }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

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
            onClick={() => toast.success("Well done!")}
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
              onClick={async (event) => {
                event.preventDefault();
                setLoading(true);
              }}
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
              onClick={async (event) => {
                event.preventDefault();
                setLoading(true);
              }}
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
