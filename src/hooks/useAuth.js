import { useContext } from "react";
import { AuthContext } from "../pages/SharedComponents/AuthProvider/AuthProvider";

const useAuth = () => {
  const results = useContext(AuthContext);
  return results;
};

export default useAuth;
