import React from "react";
import "./RegisterPage.css"; 
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export const RegisterPage = () => {
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
                        <h4 className="mt-1 mb-5 pb-1">Join MovieMax</h4>
                      </div>

                      <form>
                        <p>Create your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="fullName"
                            className="form-control"
                            placeholder="Full Name"
                          />
                          <label className="form-label" htmlFor="fullName">
                            Full Name
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="registerEmail"
                            className="form-control"
                            placeholder="Email"
                          />
                          <label className="form-label" htmlFor="registerEmail">
                            Email
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="registerPassword"
                            className="form-control"
                            placeholder="Password"
                          />
                          <label className="form-label" htmlFor="registerPassword">
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-success w-100 fa-lg gradient-custom-2 mb-3"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                             <Link to="/signin"> Login</Link>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">Start your cinematic journey today</h4>
                      <p className="small mb-0">
                        Join thousands of movie lovers already discovering, booking,
                        and enjoying films with ease. Unlock exclusive features, get personalized recommendations,
                        and never miss a blockbuster again.
                        <br />
                        <br />
                        <b>Sign up now and let the magic begin!</b>
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
