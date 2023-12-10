import Absences from "@/components/absences/Absences";

const AbsencesPage = () => {
  return (
    <section className="py-1">
      <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
        Your Absences:
      </h2>
      <Absences />
    </section>
  );
};

export default AbsencesPage;
