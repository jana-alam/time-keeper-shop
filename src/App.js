import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import MyOrder from "./pages/MyOrder/MyOrder";
import AuthProvider from "./pages/SharedComponents/AuthProvider/AuthProvider";
import Cart from "./pages/SharedComponents/Cart/Cart";
import Shipping from "./pages/Shipping/Shipping/Shipping";
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
            <Route path="/shop" element={<Shop />}></Route>
            <Route
              path="/shipping"
              element={
                <RequireAuth>
                  <Shipping />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/myOrders"
              element={
                <RequireAuth>
                  <MyOrder />
                </RequireAuth>
              }
            ></Route>
          </Routes>
          <Cart />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
