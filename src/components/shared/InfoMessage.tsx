import { InfoIcon } from "lucide-react";

interface InfoMessageProps {
  message: string;
  description: string;
}

const InfoMessage = ({ message, description }: InfoMessageProps) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex h-64 flex-col items-center justify-center rounded-md border p-10 text-center shadow-sm">
        <InfoIcon className="mb-3 h-8 w-8 text-blue-500 " />
        <p className="mb-4 text-lg text-slate-900 dark:text-slate-100">
          {message}
        </p>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoMessage;
