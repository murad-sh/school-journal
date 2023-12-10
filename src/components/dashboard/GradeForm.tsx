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
import { Dispatch, SetStateAction, useState } from "react";
import GradeSelect from "./GradesSelect";

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
  const [score, setScore] = useState(initialGrade?.score.toString() || "");
  const [comment, setComment] = useState(initialGrade?.comment || "");

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
              defaultValue={initialGrade?.comment}
              className="col-span-3"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => onSubmit()}>
            {type === "Edit" ? "Save changes" : "Add"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GradeForm;
