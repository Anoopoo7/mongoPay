import { useState } from "react";
import AuthComponent from "./authcomponent";
import userServices from "../../services/userServices";
import Router from "next/router";

const AuthContainer = ({ setUserdata }) => {
  const [login, setLogin] = useState(true);
  const [message, setMessage] = useState("");
  let user = {};
  const handleLoggingToggler = () => {
    setLogin(!login);
    setMessage("");
  };
  const loginHandle = async (email, password) => {
    if (
      email !== null &&
      email !== "" &&
      password !== null &&
      password !== ""
    ) {
      const setUserData = await userServices.userLogin(email, password);
      if (setUserData && setUserData?.data?.active) {
        setUserdata(setUserData?.data);
        Router.push(
          {
            pathname: "/",
          },
          undefined,
          { shallow: true }
        );
      } else {
        setMessage("cannot find this user!");
      }
    }
  };
  const registerHandle = async (name, email, phone, password, Cpassword) => {
    if (password !== Cpassword) {
      setMessage("mismatch in passwords");
      return;
    }
    const setUserData = await userServices.userRegister(name,email,phone,password);
    if(setUserData?.data?.active){
      setUserdata(setUserData?.data);
      Router.push(
        {
          pathname: "/",
        },
        undefined,
        { shallow: true }
      );
    }
    setMessage("user is already exist!")
  };

  return (
    <AuthComponent
      login={login}
      handleLoggingToggler={handleLoggingToggler}
      loginHandle={loginHandle}
      registerHandle={registerHandle}
      message={message}
    />
  );
};

export default AuthContainer;
