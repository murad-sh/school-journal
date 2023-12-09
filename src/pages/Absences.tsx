import AbsencesList from "@/components/absences/AbsenceList";

const Absences = () => {
  return (
    <section className="py-1">
      <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
        Your Absences:
      </h2>
      <AbsencesList />
    </section>
  );
};

export default Absences;
