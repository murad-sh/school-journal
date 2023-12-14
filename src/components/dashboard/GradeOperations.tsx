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
} from "../ui/alert-dialog";
import {
  Loader2Icon as Spinner,
  TrashIcon,
  MoreVertical as OptionsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import GradeForm from "./GradeForm";
import { Grade } from "@/models/grade";
import { deleteGrade } from "@/services/api-grades";
import { toast } from "sonner";

const GradeOperations = ({
  grade,
  mutate,
}: {
  grade: Grade;
  mutate: () => void;
}) => {
  const [showEditGradeDialog, setShowEditGradeDialog] =
    useState<boolean>(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted">
          <OptionsIcon className="h-4 w-4" />
          <span className="sr-only">Open</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              setShowEditGradeDialog(true);
            }}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex cursor-pointer items-center text-destructive focus:text-destructive dark:text-red-500"
            onSelect={() => setShowDeleteAlert(true)}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this grade?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action can't be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async (event) => {
                event.preventDefault();
                setIsDeleteLoading(true);
                try {
                  await deleteGrade(grade.id!);
                  setIsDeleteLoading(false);
                  mutate();
                  toast.success("Grade deleted successfully!");
                } catch (error) {
                  toast.success("Something went wrong!");
                }
                setShowDeleteAlert(false);
              }}
              className="bg-red-600 focus:ring-red-600"
            >
              {isDeleteLoading ? (
                <Spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <TrashIcon className="mr-2 h-4 w-4" />
              )}
              <span>Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <GradeForm
        open={showEditGradeDialog}
        setOpen={setShowEditGradeDialog}
        type="Edit"
        initialGrade={grade}
        onSubmit={() => {
          mutate();
          setShowEditGradeDialog(false);
        }}
      />
    </>
  );
};

export default GradeOperations;
