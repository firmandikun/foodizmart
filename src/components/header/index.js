import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { Collapse, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import locationIcone from "../../assets/location.png";
import { fecthDataAddress } from "../../features/locations/action";
import useGeoLocation from "../hooks/useGeoLocation";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "white",
  },
});

let district = ["jakarta selatan", "Yogyakarta", "bekasi", "kebumen"];

export const Header = ({
  onChange,
  onPress,
  handleSubmit,
  search,
  location,
}) => {
  const [drawel, setDrawel] = React.useState(false);
  const classes = useStyles();
  const toggleDrawer = (open) => (event) => {
    setDrawel(open);
  };

  const state = useSelector((state) => state.address);
  const address = `${state.data.address}`;
  const [alamat, setAlamat] = React.useState(state.kabupaten);
  const dispatch = useDispatch();
  const locations = useGeoLocation();

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
          <a className="toggle  ml-auto" onClick={toggleDrawer(true)}>
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
          </a>
        </div>
        <a className="text-decoration-none">
          <div className="input-group mt-3 rounded shadow-sm overflow-hidden bg-white">
            <form className="input-group-prepend" onSubmit={handleSubmit}>
              <div>
                <button
                  onClick={onPress}
                  className="border-0 btn  text-danger font-weight-bold bg-white  "
                >
                  <FaSistrix />
                </button>
              </div>

              <input
                type="text"
                className="shadow-none border-0 form-control pl-0"
                placeholder={search || "Cari Produk Pilihanmu..."}
                aria-describedby="basic-addon1"
                placeholder={search}
                onChange={onChange}
              />
            </form>
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
                  <div className="address">{alamat || address}</div>
                </div>
              </a>
              <div
                className="dropdown-menu osahan-select-loaction p-3"
                aria-labelledby="navbarDropdown"
              >
                <span className="text-center mb-3">Pilih Lokasi Otomatis </span>
                <div className="d-flex my-2" style={{ cursor: "pointer" }}>
                  <img src={locationIcone} alt="" width={20} />
                  <li
                    className="ml-2"
                    onClick={() => {
                      setAlamat(address);
                      dispatch(fecthDataAddress(locations, ""));
                    }}
                  >
                    Lokasi Saat Ini..
                  </li>
                </div>
                <span className="text-center mb-3">Pilih Lokasi </span>
                <ul
                  class="list-group list-group-flush"
                  style={{
                    cursor: "pointer",
                    height: 80,
                    overflowY: "scroll",
                    scrollbarWidth: "none",
                  }}
                >
                  {district.map((item) => {
                    return (
                      <li
                        className="list-group-item"
                        onClick={() => {
                          setAlamat(item);
                          dispatch(fecthDataAddress(item, "address"));
                        }}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="input-group mr-sm-2 col-lg-12">
              <form
                onSubmit={handleSubmit}
                className="d-flex"
                style={{ width: 380 }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder={search || "Cari Produk Pilihanmu..."}
                  onChange={onChange}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />

                <div className="input-group-prepend">
                  <button
                    type="submit"
                    onClick={onPress}
                    className="btn btn-danger rounded-right font-weight-bold ml-1 "
                    style={{ backgroundColor: "#f52d56", border: "none" }}
                  >
                    cari
                  </button>
                </div>
              </form>
            </div>
          </div>
          <a
            className="btn btn-danger ml-auto font-weight-bold"
            style={{ backgroundColor: "#f52d56", border: "none" }}
            href="/join_merchant"
          >
            Join Merchant
          </a>
        </nav>
      </div>

      <Drawer
        open={drawel}
        anchor={"left"}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.paper }}
      >
        <div className="list-group" style={{ width: 240 }}>
          <button
            type="button"
            className="list-group-item list-group-item-action status "
            aria-current="true"
          >
            Foodismart
          </button>
          <Link
            type="button"
            className="list-group-item list-group-item-action"
            to="/"
          >
            Home
          </Link>
          <Link
            type="button"
            className="list-group-item list-group-item-action"
            to="/products"
          >
            Produk
          </Link>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            to="/regulation"
          >
            F.A.Q.
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            disabled
          >
            Tentang Kami
          </button>
        </div>
      </Drawer>
      <Navbar
        color="light"
        light
        expand="md"
        className="bg-color-head headerNav"
        // style={{ position: "fixed", top: 0 }}
      >
        <div className="container pl-1 ">
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/" className=" text-white pl-0">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products" className="text-white">
                  Produk
                </NavLink>
              </NavItem>
              {/* <Link type="button" className=" text-white pl-0" to="/products">
                Produk
              </Link> */}
              <NavItem>
                <NavLink className="text-white" href="/faq">
                  F.A.Q.
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/about">
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
