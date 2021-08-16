import React from "react";
import { useHistory } from "react-router-dom";
import imageMessage from "../assets/foodizmart_conten.png";
import playStore from "../assets/playstore.png";
import appStores from "../assets/1.png";

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
        
        <p className="subtitle_eat">
          Ingin memesan makanan ini ? 
          <br />
          Silahkan Download aplikasi Foodizmart
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <img
            className="i"
            src={playStore}
            alt="image_message"
            style={{ width : 230 }}
          />
          <div style={{ }} > 
          <img
            className="i"
            src={appStores}
            alt="image_message"
            style={{width : 200, height : 60, objectFit : "cover" }}
          />
          </div>

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
