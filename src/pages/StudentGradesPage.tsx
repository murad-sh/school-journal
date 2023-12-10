import GradesDashboard from "@/components/dashboard/GradesDashboard";
import DashboardNav from "@/components/layouts/DashboardNav";
import { useParams } from "react-router-dom";

const StudentGradesPage = () => {
  const { lessonId } = useParams();

  return (
    <section>
      <DashboardNav backPath={`/dashboard/${lessonId}`} />
      <GradesDashboard />
    </section>
  );
};

export default StudentGradesPage;
