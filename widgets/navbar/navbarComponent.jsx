const NavbarComponent = ({
  navToggler,
  handleNavToggler,
  userLogged,
  urlpath,
}) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand text-heading" href="#">
          mongoPay
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            onClick={handleNavToggler}
          ></span>
        </button>
        <div
          className={`collapse navbar-collapse ${navToggler}`}
          id="navbarText"
        >
          <ul
            className={`navbar-nav ${
              userLogged?.loggedIn ? "ml-auto" : "m-auto"
            }`}
          >
            <li className={`nav-item ${urlpath === "/offers" ? "active" : ""}`}>
              <a className="nav-link" href="/offers">
                Offers
              </a>
            </li>
            <li className={`nav-item ${urlpath === "/profile" ? "active" : ""}`}>
              <a className="nav-link" href="/profile">
                Profiles
              </a>
            </li>
            <li className={`nav-item ${urlpath === "/transaction" ? "active" : ""}`}>
              <a className="nav-link" href="/transaction">
                Transactions
              </a>
            </li>
          </ul>
          {userLogged?.loggedIn ? (
            ""
          ) : (
            <button className="btn btn-outline-success my-2 my-sm-0 pl-4 pr-4">
              Log In
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
