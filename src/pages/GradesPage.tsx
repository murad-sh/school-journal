import Grades from "@/components/grades/Grades";

const GradesPage = () => {
  return (
    <section className="py-1">
      <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
        Your grades:
      </h2>
      <Grades />
    </section>
  );
};

export default GradesPage;
