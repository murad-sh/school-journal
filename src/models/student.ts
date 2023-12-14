import { Absence } from "./absence";
import { Grade } from "./grade";

type Student = {
  id: string;
  name: string;
  surname: string;
  grades?: Grade[];
  absences?: Absence[];
};

export default Student;
