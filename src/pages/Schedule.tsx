import ScheduleList from "@/components/schedule/ScheduleList";

const Schedule = () => {
  return (
    <section className="py-1">
      <h2 className="mb-4 text-2xl font-bold  text-slate-900 dark:text-slate-100">
        Your Current Schedule:
      </h2>
      <ScheduleList />
    </section>
  );
};

export default Schedule;
