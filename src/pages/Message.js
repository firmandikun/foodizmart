import React from "react";
import { useHistory } from "react-router-dom";
import imageMessage from "../assets/foodizmart_conten.png";
import playStore from "../assets/playstore.png";
import Logo from "../assets/logo.png";
import appStores from "../assets/1.png";

const Message = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="navbar-brand">
          <img
            className="img-fluid logo-img rounded-pill shadow-sm"
            src={Logo}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-12">
          <img
            className="img-fluid img-message"
            src={imageMessage}
            alt="image_message"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="row text-center my-2">
        <div className="col-sm-12 ">
          <p className="subtitle_eat text-center">
            Ingin memesan makanan ini ?
            <br />
            Silahkan Download aplikasi Foodizmart
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center  ">
        <div className="col-6  ">
          <img
            className="ml-auto playstore"
            src={playStore}
            alt="image_message"
            style={{ width: 200, height: 55, borderRadius: 10 }}
          />
        </div>

        <div className="col-6">
          <img
            className="mr-auto appStore"
            src={appStores}
            alt="image_message"
            style={{
              width: 180,
              height: 50,
              objectFit: "cover",
              border: "none",
              borderRadius: 10,
            }}
          />
        </div>

        <button
          className="btn_back"
          onClick={() => history.goBack()}
          style={{ marginTop: 20 }}
        >
          Kembali
        </button>
      </div>

      {/* <div className="container messages  ">
        <div className="row">
          <div className="col-12 text-left mt-2 ">
            <div className="navbar-brand ">
              <img
                className="img-fluid logo-img rounded-pill shadow-sm"
                src={Logo}
              />
            </div>
          </div>
        </div>
        <div className=" row  mt-2 mb-2 text-center image_message">
          <div className="col-12">
            <img
              className="img-fluid img-message"
              src={imageMessage}
              alt="image_message"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col- col-sm-12">
            <p className="subtitle_eat">
              Ingin memesan makanan ini ?
              <br />
              Silahkan Download aplikasi Foodizmart
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img
              className="i"
              src={playStore}
              alt="image_message"
              style={{ width: 230 }}
            />

            <img
              className="i"
              src={appStores}
              alt="image_message"
              style={{ width: 200, height: 60, objectFit: "cover" }}
            />

            <div className="mt-1">
              <button className="btn_back" onClick={() => history.goBack()}>
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Message;
