import React, { createContext } from "react";
import useFirebase from "../../../hooks/useFirebase";
import useProducts from "../../../hooks/useProducts";
export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const value = useFirebase();
  const store = useProducts();
  return (
    <AuthContext.Provider value={(value, store)}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
