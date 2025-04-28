import React from "react";
import "./SignInPage.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export const SignInPage = () => {
  let imageStyle = {
    width: "185px",
  };
  let sectionStyle = {
    backgroundColor: "#eee",
  };
  return (
    <>
      <section className="h-100 gradient-form" style={sectionStyle}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={imageStyle}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          We are MovieMax
                        </h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            Username
                          </label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary w-100 fa-lg gradient-custom-2 mb-3"
                            type="button"
                          >
                            Log in
                          </button>
                          <br />
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-outline-danger" 
                          >
                            <Link to="/register"> Create new</Link>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We bring the magic of movies to your fingertips</h4>
                      <p className="small mb-0">
                      Discover and book your favorite films anytime, anywhere. From the latest blockbusters to timeless 
                      classics, we make your movie nights effortless, exciting, and unforgettable.
                      <br/>
                      <br/>
                      <b>Your next great movie experience is just a click away.</b>

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
