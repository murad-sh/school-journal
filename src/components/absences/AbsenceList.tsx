import { studentAbsences } from '@/data/mocked/student-absences';

const AbsencesList = () => {
  return (
    <div className="container p-4">
      <ul className="bg-white shadow overflow-hidden rounded-md">
        {studentAbsences.map((absence, index) => (
          <li
            key={index}
            className="px-4 py-4 sm:px-6 border-b border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900">
                {absence.lesson}
              </div>
              <div className="ml-2 flex-shrink-0 flex">
                <span
                  className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {absence.date}
                </span>
              </div>
            </div>
            {absence.teacher && (
              <div className="mt-2 sm:flex sm:justify-between">
                <p className="text-sm text-gray-500">
                  Teacher: {absence.teacher}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AbsencesList;
