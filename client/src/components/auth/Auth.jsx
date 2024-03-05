import React, { useState } from "react";
import AuthBG from "./AuthBG";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const Auth = () => {
  const [haveAccount, setHaveAccount] = useState(false);

  const handleAccount = (val) => {
    setHaveAccount(val);
  };

  return (
    <div className="w-full  h-[calc(100vh-109px)] font-poppins">
      <AuthBG />
      <div className="w-full max-w-[423px] border-[1px] border-grey-300 mx-auto mt-28 p-3 rounded-xl relative">
        <h1 className="text-2xl font-medium mt-10 text-center text-grey-600 font-poppins">
          {haveAccount ? "Login" : "Sign Up"}
        </h1>
        {!haveAccount ? (
          <SignUp haveAccount={haveAccount} handleAccount={handleAccount} />
        ) : (
          <LogIn haveAccount={haveAccount} handleAccount={handleAccount} />
        )}
      </div>
    </div>
  );
};
export default Auth;
