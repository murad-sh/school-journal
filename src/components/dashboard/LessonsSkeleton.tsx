import { Skeleton } from "../ui/skeleton";

const LessonsSkeleton = () => {
  return (
    <div className="container p-4">
      <ul className="overflow-hidden rounded-md border shadow-sm">
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b p-4 px-5 last:border-b-0"
          >
            <Skeleton className="h-6 w-1/4 rounded-md" />
            <Skeleton className="h-7 w-28 rounded-full" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonsSkeleton;
