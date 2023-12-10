import { Skeleton } from "../ui/skeleton";

const ScheduleSkeleton = () => {
  return (
    <>
      <div className="container mb-7 p-4">
        <Skeleton className="mb-3 h-5 w-28 text-left" />
        <ul className="overflow-hidden rounded-md border shadow-sm">
          {[...Array(3)].map((_, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b p-4 last:border-b-0 sm:px-6"
            >
              <div className="flex-1">
                <Skeleton className="mb-3 h-5 w-1/5" />
                <Skeleton className="h-5 w-2/5" />
              </div>
              <div className="flex-none">
                <Skeleton className="h-7 w-24 rounded-full" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="container p-4">
        <Skeleton className="mb-3 h-5 w-28 text-left" />
        <ul className="overflow-hidden rounded-md border shadow-sm">
          {[...Array(3)].map((_, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b p-4 last:border-b-0 sm:px-6"
            >
              <div className="flex-1">
                <Skeleton className="mb-3 h-5 w-1/5" />
                <Skeleton className="h-5 w-2/5" />
              </div>
              <div className="flex-none">
                <Skeleton className="h-7 w-24 rounded-full" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ScheduleSkeleton;
