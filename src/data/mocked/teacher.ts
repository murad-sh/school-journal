// GET /teacher/lessons
export const teacherLessons = [
  {
    id: "1",
    lesson: "Math",
    time: "Monday, 9:50",
  },
  {
    id: "2",
    lesson: "Math",
    time: "Friday, 11:15",
  },
  {
    id: "3",
    lesson: "Computer Science",
    time: "Monday, 10:55",
  },
];

// GET /teacher/lessons/${lessonId}
export const lesson = {
  id: "1",
  name: "Math",
  time: "Monday, 9:50",
  studentsList: [
    {
      id: "1",
      fullName: "Lionel Messi",
    },
    {
      id: "2",
      fullName: "Pedri Gonzalez",
    },
    {
      id: "4",
      fullName: "Kevin De Bruyne",
    },
    {
      id: "5",
      fullName: "Pablo Gavi",
    },
    {
      id: "6",
      fullName: "Joao Felix",
    },
  ],
};

// GET /teacher/lessons/${lessonId}/${studentId}
export const studentLessonData = {
  id: "2",
  fullName: "Murad Shahbazov",
  grades: [
    {
      score: 5,
      assessmentDate: "2023-12-07",
      comment: "Outstanding",
      teacher: "Teacher",
    },
    {
      score: 5,
      assessmentDate: "2023-12-07",
      comment: "Outstanding",
      teacher: "Teacher",
    },
  ], // from GRADES where studentId === 2 and lessonId === 1
  absences: [
    { date: "2023-12-08" },
    { date: "2023-12-06" },
    { date: "2023-12-05" },
    { date: "2023-12-04" },
  ], // from ABSENCES where studentId === 2 and lessonId === 1
};

// POST/PATCH/DELETE /teacher/lessons/${lessonId}/${studentId}
// grades or absences
