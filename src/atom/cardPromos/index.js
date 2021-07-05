import React from "react";

export const CardPromos = ({ image }) => {
  return (
    <div className="osahan-slider-item mx-2">
      <a href="promo_details.html">
        <img
          src={image}
          className="img-fluid mx-auto rounded"
          alt="Responsive image"
        />
      </a>
    </div>
  );
};
