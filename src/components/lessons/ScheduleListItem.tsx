import { Lesson } from '@/models/lesson';

interface ScheduleListItemProps {
  lesson: Lesson;
}

const ScheduleListItem = ({ lesson }: ScheduleListItemProps) => {
  return (
    <li className="p-4 sm:px-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-gray-900">{lesson.lesson}</div>
        <div className="ml-2 flex-shrink-0 flex">
          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            {lesson.startTime} - {lesson.endTime}
          </span>
        </div>
      </div>
      <div className="mt-2 sm:flex sm:justify-between">
        <div className="sm:flex">
          <p className="text-sm text-gray-500">Teacher: {lesson.teacher}</p>
        </div>
      </div>
    </li>
  );
};

export default ScheduleListItem;
