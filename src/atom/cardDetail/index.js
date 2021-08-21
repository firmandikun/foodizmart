import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./detail.css";
import { useHistory } from "react-router-dom";

export const CardDetail = (data) => {
  const [imageProduct] = React.useState(
    localStorage.getItem("dasboard")
      ? JSON.parse(localStorage.getItem("dasboard")).support.base_url.product
          .original
      : null
  );

  const history = useHistory();

  return (
    <div>
      <div className="recommend-slider mb-3">
        <div className="osahan-slider-item">
          <img
            src={`${imageProduct}${data.data.photo}`}
            className=" imageDetail mx-auto shadow-sm rounded"
            alt="Responsive image"
          />
        </div>
      </div>
      <div className="pd-f  align-items-center mb-3">
        <a
          onClick={() => history.push("/message")}
          className="btn btn-success p-3 rounded btn-block border-0 btn-lg"
        >
          <i className="icofont-plus m-0 mr-2"></i> Pesan
        </a>
      </div>
    </div>
  );
};
