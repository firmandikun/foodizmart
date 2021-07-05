import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

export const Header = ({ onChange, onPress, address }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="border-bottom p-3 d-none mobile-nav">
        <div className="title d-flex align-items-center">
          <Link
            to="/"
            className="text-decoration-none text-dark d-flex align-items-center"
          >
            <div className="navbar-brand mr-0">
              <img
                className="img-fluid logo-img rounded-pill shadow-sm"
                src={Logo}
              />
            </div>
          </Link>
          <p className="ml-auto "></p>
          <Link className="toggle  ml-auto" to="">
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
          </Link>
        </div>
        <a href="" className="text-decoration-none">
          <div className="input-group mt-3 rounded shadow-sm overflow-hidden bg-white">
            <div className="input-group-prepend">
              <button className="border-0 btn  text-danger font-weight-bold bg-white  ">
                <FaSistrix />
              </button>
            </div>
            <input
              type="text"
              className="shadow-none border-0 form-control pl-0"
              placeholder="Search for Products.."
              aria-describedby="basic-addon1"
            />
          </div>
        </a>
      </div>

      <div className="bg-white shadow-sm osahan-main-nav">
        <nav
          className="
          navbar navbar-expand-lg navbar-light
          bg-white
          osahan-header
          p-0
          container
        "
        >
          <Link className="navbar-brand mr-0" to="/">
            <img
              className="img-fluid logo-img rounded-pill shadow-sm"
              src={Logo}
            />
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
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div>
                  <i
                    className=" icofont-location-pin d-flex align-items-center 
                    bg-light rounded-pill p-2 icofont-size border shadow-sm mr-2
                  "
                  >
                    <FaMapMarkerAlt />
                  </i>
                </div>
                <div>
                  <p className="text-elipps text-muted mb-0 small">
                    lokasi saat ini
                  </p>
                  <div className="address"> {address} </div>
                </div>
              </a>
              <div
                className="dropdown-menu osahan-select-loaction p-3"
                aria-labelledby="navbarDropdown"
              >
                <span>Pilih kota Anda untuk mulai belanja</span>
                <form className="form-inline my-2">
                  <div className="input-group p-0 col-lg-12">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Plih  Lokasi"
                    />
                    <div className="input-group-prepend">
                      <div className="btn btn-danger rounded-right btn-sm">
                        <i className="icofont-location-arrow"></i> Pilih
                      </div>
                    </div>
                  </div>
                </form>
                <div className="city pt-2">
                  <h6>Top Kota</h6>
                  <p className="border-bottom m-0 py-1">
                    <a href="#" className="text-dark">
                      Yogyakarta
                    </a>
                  </p>
                  <p className="border-bottom m-0 py-1">
                    <a href="#" className="text-dark">
                      Jakarta
                    </a>
                  </p>
                  <p className="border-bottom m-0 py-1">
                    <a href="#" className="text-dark">
                      Kebumen
                    </a>
                  </p>
                  <p className="m-0 py-1">
                    <a href="#" className="text-dark">
                      kelaten
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
                placeholder="Plilih Product.."
                onChange={onChange}
              />
              <div className="input-group-prepend">
                <button
                  onClick={onPress}
                  className="btn btn-danger rounded-right font-weight-bold "
                >
                  cari
                </button>
              </div>
            </div>
          </div>
          <a className="btn btn-danger ml-auto font-weight-bold ">
            Menjadi seler
          </a>
        </nav>
      </div>
      <Navbar
        color="light"
        light
        expand="md"
        className="bg-color-head headerNav"
      >
        <div className="container pl-1 ">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/" className=" text-white pl-0">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/products">
                  Product
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="text-white"
                  href="https://github.com/reactstrap/reactstrap"
                >
                  F.A.Q.
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="text-white"
                  href="https://github.com/reactstrap/reactstrap"
                >
                  Tentang Kami
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};
