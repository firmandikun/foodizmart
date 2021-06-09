import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="bg-white shadow-sm osahan-main-nav">
        <nav
          className="
          navbar navbar-expand-lg navbar-light
          bg-white
          osahan-header
          py-0
          container
        "
        >
          <Link className="navbar-brand mr-0" to="/">
            <img src={Logo} alt="" className="img-fluid logo-img  shadow-sm" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="ml-3 d-flex align-items-center">
            <div className="dropdown mr-3">
              <a
                className="
                text-dark
                dropdown-toggle
                d-flex
                align-items-center
                osahan-location-drop
              "
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div>
                  <i
                    className="
                    icofont-location-pin
                    d-flex
                    align-items-center
                    bg-light
                    rounded-pill
                    p-2
                    icofont-size
                    border
                    shadow-sm
                    mr-2
                  "
                  ></i>
                </div>
                <div>
                  <p className="text-muted mb-0 small">Select Location</p>
                  Yogyakarta
                </div>
              </a>
              <div
                className="dropdown-menu osahan-select-loaction p-3"
                aria-labelledby="navbarDropdown"
              >
                <span>Select your city to start shopping</span>
                <form className="form-inline my-2">
                  <div className="input-group p-0 col-lg-12">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Search Location"
                    />
                    <div className="input-group-prepend">
                      <div className="btn btn-danger rounded-right btn-sm">
                        <i className="icofont-location-arrow"></i> Detect
                      </div>
                    </div>
                  </div>
                </form>
                <div className="city pt-2">
                  <h6>Top Citys</h6>
                  <p className="border-bottom m-0 py-1">
                    <a href="/" className="text-dark">
                      Banglore
                    </a>
                  </p>
                  <p className="border-bottom m-0 py-1">
                    <a href="/" className="text-dark">
                      Noida
                    </a>
                  </p>
                  <p className="border-bottom m-0 py-1">
                    <a href="/" className="text-dark">
                      Delhi
                    </a>
                  </p>
                  <p className="m-0 py-1">
                    <a href="/" className="text-dark">
                      Mumbai
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="input-group mr-sm-2 col-lg-12">
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername2"
                placeholder="Search for Products.."
              />
              <div className="input-group-prepend">
                <div className="btn btn-search rounded-right">
                  <span className="text-white font-weight-bold ">Cari</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <button type="button" className="btn btn-danger font-weight-bold ">
              Menjadi Seller
            </button>
          </div>
        </nav>

        <div className="bg-color-head">
          <div className="container menu-bar d-flex align-items-center">
            <ul className="list-unstyled form-inline mb-0">
              <li className="nav-item active">
                <Link className="nav-link text-white pl-0" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white pl-0" href="home.html">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white pl-0" href="home.html">
                  F.A.Q
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white pl-0" href="home.html">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
