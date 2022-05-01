import Link from "next/link";

const NavbarComponent = ({
  navToggler,
  handleNavToggler,
  userLogged,
  urlpath,
}) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link
          className="navbar-brand link m-2"
          href={{
            pathname: "/",
          }}
        >
          <span className="text-heading">mongoPay</span>
        </Link>
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
              userLogged?.active ? "ml-auto" : "m-auto"
            }`}
            onClick={handleNavToggler}
          >
            <li className={`nav-item ${urlpath === "/offers" ? "active" : ""}`}>
              <span className="m-3">
                <Link className="nav-link" href="/offers">
                  Offers
                </Link>
              </span>
            </li>
            <li
              className={`nav-item ${urlpath === "/profile" ? "active" : ""}`}
            >
              <span className="m-3">
                <Link
                  className="nav-link"
                  href={{
                    pathname: "/profile",
                  }}
                >
                  Profiles
                </Link>
              </span>
            </li>
            <li
              className={`nav-item ${
                urlpath === "/transaction" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link"
                href={{
                  pathname: "/transaction",
                }}
              >
                Transactions
              </Link>
            </li>
          </ul>
          {urlpath === "/auth" || userLogged?.active ? (
            ""
          ) : (
            <button className="btn btn-outline-success my-2 my-sm-0 pl-4 pr-4">
              <Link
                className="nav-link"
                href={{
                  pathname: "/auth",
                }}
              >
                <span>Login</span>
              </Link>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
