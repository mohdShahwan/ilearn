import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-3 border-bottom">
      <div>
        <div className="d-flex flex-wrap align-items-center justify-content-around justify-content-lg-around">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              {/* <use xlink:href="#bootstrap"></use> */}
            </svg>
            <img src="logo.png" width="70" height="70" alt="" />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-around mb-md-0">
            <li className="nav-link px-2 link-body-emphasis">
              <div className="dropdown">
                <a
                  href="/"
                  className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu text-small shadow">
                  <li>
                    <a className="dropdown-item" href="/" aria-current="page">
                      category1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      category2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      category3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="home.html" className="nav-link px-2 link-body-emphasis">
                Home
              </a>
            </li>
            <li>
              <a
                href="aboutUs.html"
                className="nav-link px-2 link-body-emphasis"
              >
                About
              </a>
            </li>
          </ul>

          <div className="text-end">
            <button type="button" className="btn btn-outline-dark me-2">
              <Link to="/login" className="nav-link px-2 link-body-emphasis">
                Log in
              </Link>
            </button>
            <button type="button" className="btn btn-warning">
              <a
                href="signUp.html"
                className="nav-link px-2 link-body-emphasis"
              >
                Sign up
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
