import ScheduleList from '@/components/schedule/ScheduleList';

const Schedule = () => {
  return (
    <section className="py-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Your Current Schedule:
      </h2>
      <ScheduleList />
    </section>
  );
};

export default Schedule;
