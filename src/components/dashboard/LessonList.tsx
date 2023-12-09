import { teacherLessons } from '@/data/mocked/teacher';
import { Link } from 'react-router-dom';

const LessonList = () => {
  return (
    <div>
      <ul>
        {teacherLessons.map((lesson) => (
          <li key={lesson.id}>
            <Link to={`/dashboard/${lesson.id}`}>{lesson.lesson}</Link>
            <p>{lesson.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonList;
