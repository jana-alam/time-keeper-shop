import { useContext } from "react";
import { AuthContext } from "../pages/SharedComponents/AuthProvider/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
