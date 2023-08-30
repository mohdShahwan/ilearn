import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function PopularCourses() {
  return (
    <div className="album bg-body-tertiary">
      <div className="pricing-header py-5 pb-md-4 mx-auto text-center">
        <h1 className="display-6 fw-normal text-body-emphasis">
          Most Popular Courses
        </h1>
        <hr className="mb-4 mx-5" />
      </div>
      <div className="container pb-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img src="home3.png" alt="" />
              <div className="card-body">
                <h3 className="fs-2 text-body-emphasis">Course name</h3>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <a
                        href="viewCourse.html"
                        className="nav-link px-2 link-body-emphasis"
                      >
                        View course
                      </a>
                    </button>
                  </div>
                  <small className="text-body-secondary">price</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="home3.png" alt="" />
              <div className="card-body">
                <h3 className="fs-2 text-body-emphasis">Course name</h3>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <a
                        href="viewCourse.html"
                        className="nav-link px-2 link-body-emphasis"
                      >
                        View course
                      </a>
                    </button>
                  </div>
                  <small className="text-body-secondary">price</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="home3.png" alt="" />
              <div className="card-body">
                <h3 className="fs-2 text-body-emphasis">Course name</h3>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <a
                        href="viewCourse.html"
                        className="nav-link px-2 link-body-emphasis"
                      >
                        View course
                      </a>
                    </button>
                  </div>
                  <small className="text-body-secondary">price</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
