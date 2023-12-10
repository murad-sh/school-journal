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
          <SelectItem value="1.5">1.5</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="2.5">2.5</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="3.5">3.5</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="4.5">4.5</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="5.5">5.5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default GradeSelect;
