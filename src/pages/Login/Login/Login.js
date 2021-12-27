import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../SharedComponents/Spinner/Spinner";
import useFirebase from "../../../hooks/useFirebase";

const Login = () => {
  const { loading, loginUser } = useFirebase();
  const [loginInfo, setLoginInfo] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  // handle input data
  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...loginInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setLoginInfo(newInfo);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(loginInfo.email, loginInfo.password, location, navigate);
  };
  return (
    <section className=" p-4 sm:px-16">
      <h2 className="text-4xl text-gray-600 font-semibold my-2 text-center">
        Please Login
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
        {/* form section on left */}
        <div>
          <form onSubmit={handleLogin} className="w-8/12 mx-auto space-y-8">
            <input
              name="email"
              onBlur={handleInput}
              type="email"
              placeholder="Your Email"
              className="p-2 w-full outline-none bg-gray-50 text-gray-800 border-b-2 border-red-600 focus:ring-0 "
            />
            <input
              name="password"
              onBlur={handleInput}
              type="password"
              placeholder="Password"
              className="p-2 w-full outline-none bg-gray-50 text-gray-800 border-b-2 border-red-600 focus:ring-0 "
            />
            {loading ? (
              <Spinner />
            ) : (
              <input
                type="submit"
                value="Login"
                className="p-2 w-full bg-red-600 text-white cursor-pointer text-lg"
              />
            )}
          </form>
          <p className="text-center text-gray-700 mt-6 text-lg">
            New Customer? Then{" "}
            <NavLink className="text-red-600 font-bold" to="/register">
              Register
            </NavLink>{" "}
            First!
          </p>
        </div>
        {/* image on right */}
        <div>
          <img
            src="https://i.ibb.co/WzB1SYY/login-register.png"
            alt="Login-page"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
