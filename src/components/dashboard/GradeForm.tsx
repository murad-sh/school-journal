import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Grade } from "@/models/grade";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import GradeSelect from "./GradesSelect";
import { addGrade, updateGrade } from "@/services/api-grades";
import { getCurrentUser } from "@/lib/session";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "sonner";
import NavigateLogin from "../shared/NavigateLogin";

interface GradeFormProps {
  type: "Add" | "Edit";
  open: boolean;
  initialGrade?: Grade;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit: () => void;
}

const GradeForm = ({
  type,
  open,
  setOpen,
  initialGrade,
  onSubmit,
}: GradeFormProps) => {
  const location = useLocation();
  const [score, setScore] = useState(initialGrade?.gradeValue.toString() || "");
  const [comment, setComment] = useState(initialGrade?.details || "");
  const { studentId, lessonId } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!score || !comment) {
      setError(true);
    } else {
      setError(false);
    }
  }, [score, comment]);

  const user = getCurrentUser();
  if (!user) {
    return <NavigateLogin location={location} />;
  }

  const addHandler = async () => {
    const date = new Date().toLocaleDateString();
    const grade = {
      gradeValue: score,
      teacher: user.id,
      student: studentId as string,
      lesson: lessonId as string,
      details: comment,
      date,
    };

    try {
      await addGrade(grade);
      toast.success("Grade added!");
      onSubmit();
      reset();
    } catch (error) {
      toast.error("Something went wrong! Failed to add grade.");
    }
  };

  const editHandler = async () => {
    const date = new Date().toLocaleDateString();
    const grade = {
      gradeValue: score,
      details: comment,
      date,
    };

    try {
      await updateGrade(initialGrade!.id!, grade);
      toast.success("Grade updated successfully");
      onSubmit();
    } catch (error) {
      toast.success("Something went wrong! Failed to update grade.");
    }
  };

  const reset = () => {
    setScore("");
    setComment("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{type} grade</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="score" className="text-right">
              Score
            </Label>
            <GradeSelect score={score} setScore={setScore} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="comment" className="text-right">
              Comment
            </Label>
            <Input
              id="comment"
              defaultValue={initialGrade?.details}
              className="col-span-3"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={type === "Add" ? addHandler : editHandler}
            disabled={error}
          >
            {type === "Edit" ? "Save changes" : "Add"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GradeForm;
