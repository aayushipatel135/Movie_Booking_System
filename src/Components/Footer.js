import React from "react";

export const Footer = () => {
  const copyRightStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  };

  const footerStyle = {
    position: "relative",
    bottom: 0,
    width: "100%",
  };

  return (
    <div style={footerStyle}>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section>
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example2">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div className="text-center p-3" style={copyRightStyle}>
          © 2025 Copyright:
          <a className="text-white" href="https://MovieMax.com/">
            {" "}MovieMax.com
          </a>
        </div>
      </footer>
    </div>
  );
};
