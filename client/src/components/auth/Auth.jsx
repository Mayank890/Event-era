import React, { useState } from "react";
import AuthBG from "./AuthBG";
import { Outlet } from "react-router-dom";

const Auth = ({ children }) => {
  const [haveAccount, setHaveAccount] = useState(false);

  const handleAccount = (val) => {
    setHaveAccount(val);
  };

  return (
    <div className="w-full  h-[calc(100vh-109px)] ">
      <AuthBG />
      <Outlet />
    </div>
  );
};
export default Auth;
