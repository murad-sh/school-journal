import GradesList from '@/components/grades/GradesList';

const Grades = () => {
  return (
    <section className="py-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your grades:</h2>
      <GradesList />
    </section>
  );
};

export default Grades;
