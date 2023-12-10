import AbsencesDashboard from "@/components/dashboard/AbsencesDashboard";
import DashboardNav from "@/components/layouts/DashboardNav";
import { useParams } from "react-router-dom";

const StudentAbsencesPage = () => {
  const { lessonId } = useParams();

  return (
    <section>
      <DashboardNav backPath={`/dashboard/${lessonId}`} />
      <AbsencesDashboard />
    </section>
  );
};

export default StudentAbsencesPage;
