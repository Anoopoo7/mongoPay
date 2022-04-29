import { useState, useEffect } from "react";
import NavbarComponent from "./navbarComponent";

const NavbarContainer = ({ user, urlpath }) => {
  const [navToggler, setNavToggler] = useState("");

  const handleNavToggler = () => {
    if (navToggler == "show") {
      setNavToggler("");
      return;
    }
    setNavToggler("show");
  };
  return (
    <>
      <NavbarComponent
        navToggler={navToggler}
        handleNavToggler={handleNavToggler}
        userLogged={user}
        urlpath={urlpath}
      />
    </>
  );
};

export default NavbarContainer;
