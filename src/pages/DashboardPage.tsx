import Lessons from "@/components/dashboard/Lessons";

const DashboardPage = () => {
  return (
    <section className="py-1">
      <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
        Manage Your Lessons
      </h2>
      <Lessons />
    </section>
  );
};

export default DashboardPage;
