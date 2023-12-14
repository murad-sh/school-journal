import { Location, Navigate } from "react-router-dom";

const NavigateLogin = ({ location }: { location: Location }) => {
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default NavigateLogin;
