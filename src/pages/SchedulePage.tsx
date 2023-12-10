import Schedule from "@/components/schedule/Schedule";

const SchedulePage = () => {
  return (
    <section className="py-1">
      <h2 className="mb-4 text-2xl font-bold  text-slate-900 dark:text-slate-100">
        Your Current Schedule:
      </h2>
      <Schedule />
    </section>
  );
};

export default SchedulePage;
