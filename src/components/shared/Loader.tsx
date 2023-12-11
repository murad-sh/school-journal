import { Loader2 as Spinner } from "lucide-react";
import { cn } from "@/lib/utils";

const Loader = ({ className }: { className?: string }) => {
  return <Spinner className={cn("mr-2 h-4 w-4 animate-spin", className)} />;
};

export default Loader;
