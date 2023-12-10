import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const DashboardNav = ({ backPath }: { backPath: string }) => {
  return (
    <nav className="p-1">
      <Link to={backPath} className={cn(buttonVariants({ variant: "ghost" }))}>
        <ChevronLeftIcon className="mr-2 h-4 w-4" />
        Back
      </Link>
    </nav>
  );
};

export default DashboardNav;
