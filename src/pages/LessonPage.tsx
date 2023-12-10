import Lesson from "@/components/dashboard/Lesson";
import DashboardNav from "@/components/layouts/DashboardNav";

const LessonPage = () => {
  return (
    <section>
      <DashboardNav backPath="/dashboard" />
      <Lesson />
    </section>
  );
};

export default LessonPage;
