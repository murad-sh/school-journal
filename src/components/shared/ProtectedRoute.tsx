import { getCurrentUser } from "@/lib/session";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import Layout from "../layouts/Layout";

type Roles = "student" | "teacher";

const ProtectedRoute = ({ allowedRoles }: { allowedRoles: Roles[] }) => {
  const location = useLocation();
  const user = getCurrentUser();
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  if (!allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" replace />;
  return (
    <Layout user={user}>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;
