import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../SharedComponents/Spinner/Spinner";

const RequireAuth = ({ children }) => {
  const {
    value: { user, loading },
  } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default RequireAuth;
