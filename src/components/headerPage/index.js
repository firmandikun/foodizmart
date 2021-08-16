import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const HeaderPage = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a class="navbar-brand" href="/">
            <img
              className="img-fluid logo-img rounded-pill shadow-sm"
              src={Logo}
            />
          </a>
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
              <a class="nav-link " href="/">
                Home
              </a>
              <a class="nav-link" href="/about">
                Tentang Kami
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
