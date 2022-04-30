import { useState } from "react";
import AuthComponent from "./authcomponent";
import userServices from "../../services/userServices";
import Router from "next/router";

const AuthContainer = ({ setUserdata }) => {
  const [login, setLogin] = useState(true);
  const [message, setMessage] = useState("");
  let user = {};
  const loginHandle = async (email, password) => {
    if (
      email !== null &&
      email !== "" &&
      password !== null &&
      password !== ""
    ) {
      const setUserData = await userServices.userLogin(email, password);
      if (setUserData && setUserData.data) {
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

  return (
    <AuthComponent
      login={login}
      setLogin={setLogin}
      loginHandle={loginHandle}
      message={message}
    />
  );
};

export default AuthContainer;
