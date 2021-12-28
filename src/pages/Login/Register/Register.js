import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../SharedComponents/Spinner/Spinner";

const Register = () => {
  const { value } = useAuth();
  const { loading, registerUser } = value;
  const [registerInfo, setRegisterInfo] = useState({});

  const navigate = useNavigate();

  // handle input data
  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...registerInfo };
    newInfo[field] = value;
    setRegisterInfo(newInfo);
  };

  //   handle form submit
  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(
      registerInfo.name,
      registerInfo.email,
      registerInfo.password,
      navigate
    );
    console.log(registerInfo);
  };
  return (
    <section className=" p-4 sm:px-16">
      <h2 className="text-4xl text-gray-600 font-semibold my-2 text-center">
        Register First!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
        {/* form section on left */}
        <div>
          {loading ? (
            <Spinner />
          ) : (
            <form
              onSubmit={handleRegister}
              className="w-8/12 mx-auto space-y-6"
            >
              <input
                onBlur={handleInput}
                name="name"
                type="name"
                placeholder="Your Name"
                className="p-2 w-full outline-none bg-gray-50 text-gray-800 border-b-2 border-red-600 focus:ring-0 "
              />
              <input
                onBlur={handleInput}
                name="email"
                type="email"
                placeholder="Your Email"
                className="p-2 w-full outline-none bg-gray-50 text-gray-800 border-b-2 border-red-600 focus:ring-0 "
              />
              <input
                onBlur={handleInput}
                name="password"
                type="password"
                placeholder="Password"
                className="p-2 w-full outline-none bg-gray-50 text-gray-800 border-b-2 border-red-600 focus:ring-0 "
              />
              <input
                type="submit"
                value="Register"
                className="p-2 w-full bg-red-600 text-white cursor-pointer text-lg"
              />
            </form>
          )}
          <p className="text-center text-gray-700 mt-6 text-lg">
            Already Registerd? Then{" "}
            <NavLink className="text-red-600 font-bold" to="/login">
              Login
            </NavLink>{" "}
            please!
          </p>
        </div>
        {/* image on right */}
        <div>
          <img
            src="https://i.ibb.co/WzB1SYY/login-register.png"
            alt="register-page"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
