// GET /teacher/lessons
export const teacherLessons = [
  {
    id: '1',
    lesson: 'Math',
    time: 'Monday, 9:50',
  },
  {
    id: '2',
    lesson: 'Math',
    time: 'Friday, 11:15',
  },
  {
    id: '3',
    lesson: 'Computer Science',
    time: 'Monday, 10:55',
  },
];

// GET /teacher/lessons/${lessonId}
export const lesson = {
  id: '1',
  name: 'Math',
  time: 'Monday, 9:50',
  studentsList: [
    {
      id: '1',
      fullName: 'Lionel Messi',
    },
    {
      id: '2',
      fullName: 'Pedri Gonzalez',
    },
  ],
};

// GET /teacher/lessons/${lessonId}/${studentId}
export const studentLessonData = {
  id: '2',
  fullName: 'Pedri Gonzalez',
  grades: [2, 2, 2], // from GRADES where studentId === 2 and lessonId === 1
  absences: [0, 0, 0], // from ABSENCES where studentId === 2 and lessonId === 1
};

// POST/PATCH/DELETE /teacher/lessons/${lessonId}/${studentId}
// grades or absences
