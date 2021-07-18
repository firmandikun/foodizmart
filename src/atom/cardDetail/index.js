import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./detail.css";

export const CardDetail = (data) => {
  const [imageProduct] = React.useState(
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product.small
  );

  return (
    <div>
      <div className="recommend-slider mb-3">
        <div className="osahan-slider-item">
          <img
            src={`${imageProduct}${data.data.photo}`}
            className="img-fluid mx-auto shadow-sm rounded"
            alt="Responsive image"
          />
        </div>
      </div>
      <div className="pd-f  align-items-center mb-3">
        <a
          href=""
          className="btn btn-success p-3 rounded btn-block d-flex align-items-center justify-content-center mr-3 btn-lg"
        >
          <i className="icofont-plus m-0 mr-2"></i> Pesan
        </a>
      </div>
    </div>
  );
};
