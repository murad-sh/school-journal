import { Skeleton } from "../ui/skeleton";

const GradesSkeleton = () => {
  return (
    <div className="container p-4">
      <ul className="overflow-hidden rounded-md border text-center shadow-sm">
        <li className="text-md grid grid-cols-2 gap-2 bg-blue-800 px-4 py-2 font-semibold text-slate-100 sm:grid-cols-5 md:grid-cols-12 md:gap-4">
          <div className="md:col-span-2">Subject</div>
          <div className="md:col-span-8">Grades</div>
          <div className="md:col-span-2">Average</div>
        </li>
        {[...Array(5)].map((_, index) => (
          <li key={index} className="border-b px-4 py-3 last:border-b-0">
            <div className="grid grid-cols-2 items-center gap-3 sm:grid-cols-5 md:grid-cols-12 md:gap-4">
              <Skeleton className="mx-auto h-5 w-3/4 md:col-span-2" />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 md:col-span-8 md:grid-cols-10">
                {[...Array(10)].map((_, gradeIndex) => (
                  <Skeleton key={gradeIndex} className="h-8 w-full rounded" />
                ))}
              </div>
              <Skeleton className="mx-auto h-5 w-1/3 md:col-span-2" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradesSkeleton;
