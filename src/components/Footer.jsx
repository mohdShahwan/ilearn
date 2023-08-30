import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              {/* <use xlink:href="#bootstrap"></use> */}
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 iLearn Academy, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {/* <!-- <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-twitter"></i></a></li> --> */}
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://instagram.com/ilearn.bah?igshid=MzRlODBiNWFlZA=="
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
