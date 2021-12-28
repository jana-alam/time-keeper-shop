import React, { createContext, useState } from "react";
import useFirebase from "../../../hooks/useFirebase";
import useProducts from "../../../hooks/useProducts";
export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const value = useFirebase();
  const store = useProducts();
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <AuthContext.Provider
      value={{ value, store, open, setOpen, cart, setCart }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
