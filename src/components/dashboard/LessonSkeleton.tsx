import { Skeleton } from "../ui/skeleton";

const LessonSkeleton = () => {
  return (
    <div className="container p-4">
      <div className="flex flex-col items-center justify-center">
        <Skeleton className="mb-5 h-8 w-1/3" />
        <Skeleton className="mb-4 h-6 w-28" />
      </div>
      <ul className="rounded-md border shadow-sm">
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b p-4 last:border-b-0 sm:px-6"
          >
            <Skeleton className="h-6 w-1/3" />
            <div className="flex gap-4">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-[6.5rem]" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonSkeleton;
