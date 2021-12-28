import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import AuthProvider from "./pages/SharedComponents/AuthProvider/AuthProvider";
import Cart from "./pages/SharedComponents/Cart/Cart";
import Shop from "./pages/Shop/Shop/Shop";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/shop"
              element={
                <RequireAuth>
                  <Shop />
                </RequireAuth>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
        <Cart />
      </AuthProvider>
    </div>
  );
}

export default App;
