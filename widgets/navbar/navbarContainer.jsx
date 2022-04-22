import { useState, useEffect } from "react";
import NavbarComponent from "./navbarComponent";

const NavbarContainer = ({ user }) => {
  const [navToggler, setNavToggler] = useState("");
  const [userLogged, setUserLogged] = useState(null);
  useEffect(() => {
    if (user?.loggedIn) setUserLogged(user);
  }, []);

  const handleNavToggler = () => {
    if (navToggler == "show") {
      setNavToggler("");
      return;
    }
    setNavToggler("show");
  };
  const logout = ()=>{
    const response = confirm(`${user.name}, are you sure to leave us`)
    if(response) setUserLogged(null)
  }
  return (
    <>
      <NavbarComponent
        navToggler={navToggler}
        handleNavToggler={handleNavToggler}
        userLogged={userLogged}
        logout={logout}
      />
    </>
  );
};

export default NavbarContainer;
