import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch } from "react";

const GradeSelect = ({
  score,
  setScore,
}: {
  score: string;
  setScore: Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Select value={score} onValueChange={(val: string) => setScore(val)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a score" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Scores</SelectLabel>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="6">6</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default GradeSelect;
