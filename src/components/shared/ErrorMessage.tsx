import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { AlertTriangle as AlertTriangleIcon } from "lucide-react";

const ErrorMessage = () => {
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };

  return (
    <div className="container p-4">
      <div className="flex h-64 flex-col items-center justify-center rounded-md border p-10 text-center shadow-sm">
        <AlertTriangleIcon className="mb-3 h-8 w-8 text-red-600" />
        <p className="mb-4 text-lg text-slate-900 dark:text-slate-100">
          Oops! We encountered an issue.
        </p>
        <p className="mb-6 text-sm text-slate-700 dark:text-slate-300">
          We're having trouble loading this page. Please try refreshing to see
          if that fixes the issue.
        </p>
        <Button
          onClick={refreshPage}
          className="rounded bg-red-600 px-4 py-2 font-bold text-slate-100 hover:bg-red-700 dark:bg-red-800 dark:hover:bg-red-900"
        >
          Refresh Page
        </Button>
      </div>
    </div>
  );
};

export default ErrorMessage;
