import React from "react";
import "./Header.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export const Header = () => {
  let signInStyle = {
    width: "65px",
  };
  let dropDownStyle = {
    paddingBottom: "0.4rem",
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              id="MDB-logo"
              src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
              alt="MDB Logo"
              draggable="false"
              height="30"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-collapse-init
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <a
                  className="nav-link active d-flex align-items-center"
                  aria-current="page"
                  href="/"
                >
                  <i className="fas fa-bars pe-2"></i>Menu
                </a>
              </li>
            </ul>

            <form className="d-flex align-items-center w-100 form-search">
              <div className="input-group">
                <button
                  className="btn btn-light dropdown-toggle shadow-0"
                  type="button"
                  data-mdb-dropdown-init
                  aria-expanded="false"
                  style={dropDownStyle}
                >
                  All
                </button>
                <ul className="dropdown-menu dropdown-menu-dark fa-ul">
                  <li>
                    <a className="dropdown-item" href="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-search"></i>
                      </span>
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-film"></i>
                      </span>
                      Titles
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-tv"></i>
                      </span>
                      TV Episodes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-user-friends"></i>
                      </span>
                      Celebs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-building"></i>
                      </span>
                      Companies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-key"></i>
                      </span>
                      Keywords
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <span className="fa-li pe-2">
                        <i className="fas fa-search-plus"></i>
                      </span>
                      Advanced search
                      <i className="fas fa-chevron-right ps-2"></i>
                    </a>
                  </li>
                </ul>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <a href="#!" className="text-white">
                <i className="fas fa-search ps-3"></i>
              </a>
            </form>

            <ul className="navbar-nav ms-3">
              <li className="nav-item me-3">
                <a className="nav-link d-flex align-items-center" href="#!">
                  IMDbPro
                </a>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/movie">Movies</Link>  
                {/* <a
                  className="nav-link d-flex align-items-center me-3"
                  href="/movie"
                >
                  <Link className="nav-link" to="/signin">Movies</Link>  
                  <i className="fas fa-bookmark pe-2"></i> Movies
                </a> */}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center me-3"
                  href="#!"
                >
                  <i className="fas fa-bookmark pe-2"></i> Watchlist
                </a>
              </li>
              <li className="nav-item" style={signInStyle}>
              <Link className="nav-link" to="/signin">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
