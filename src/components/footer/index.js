import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" border-top bg-white px-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid logo-img rounded-pill shadow-sm"
              src={Logo}
            />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 26,
                fontWeight: 400,
                lineHeight: 1.5,
                width: 80,
              }}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto text-left ">
              <a className="nav-link " href="/trems">
                Syarat dan Ketentuan
              </a>
              <a className="nav-link" href="/privacy">
                Kebijakan Privasi
              </a>
              <a className="nav-link" href="/contact">
                Kontak Kami
              </a>

              <a className="nav-link" href="#">
                Kemitraan
              </a>
              <a className="nav-link" href="/contact_investor">
                Join Investor
              </a>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};
