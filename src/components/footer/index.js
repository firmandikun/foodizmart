import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className=" border-top bg-white px-0">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          <Link class="navbar-brand" to="/">
            <img
              className="img-fluid logo-img rounded-pill shadow-sm"
              src={Logo}
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto ">
              <a class="nav-link " href="/trems">
                Syarat dan Ketentuan
              </a>
              <a class="nav-link" href="#">
                Kebijakan Privasi
              </a>
              <a class="nav-link" href="/contact">
                Kontak Kami
              </a>

              <a class="nav-link" href="#">
                Kemitraan
              </a>
              <a class="nav-link" href="/contact_investor">
                Join Investor
              </a>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};
