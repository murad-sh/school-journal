import AbsencesList from '@/components/absences/AbsenceList';

const Absences = () => {
  return (
    <section className="py-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Absences:</h2>
      <AbsencesList />
    </section>
  );
};

export default Absences;
