import React from "react";
import { useHistory } from "react-router-dom";
import imageMessage from "../assets/foodizmart_conten.png";

const Message = () => {
  const history = useHistory();
  return (
    <div>
      <div className="container messages  ">
        <div className=" row  mt-4 mb-4 text-center image_message">
          <img
            className="img-fluid img-message"
            src={imageMessage}
            alt="image_message"
          />
        </div>
        <h5 className="title_eat"> Happy Eat </h5>
        <p className="subtitle_eat">
          Untuk Melanjutkan Pemesanan Silahkan Download Aplikasi Foodizmart,
          <br />
          Dengan Menekan Tombol Selanjutnya dibawah
        </p>
        <div className="">
          <button className="btn_next">Selanjutnya</button>
        </div>
        <div className="mt-2">
          <button className="btn_back" onClick={() => history.goBack()}>
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
