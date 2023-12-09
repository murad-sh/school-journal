import { Link, useParams } from 'react-router-dom';
import { lesson } from '@/data/mocked/teacher';

const Lesson = () => {
  const { lessonId } = useParams();

  return (
    <div>
      <h1>
        {lessonId} {lesson.name} {lesson.time}
      </h1>
      <ul>
        {lesson.studentsList.map((student) => (
          <li key={student.id}>
            <Link to={`${student.id}`}>Name : {student.fullName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lesson;
