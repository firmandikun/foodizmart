import React from "react";
import "./promos.css";

export const CardPromos = ({ image }) => {
  return (
    <div className="osahan-slider-items mx-2">
      <a href="/">
        <img
          src={image}
          className="img-fluid osahan-slider-item card-promos mx-auto rounded"
          alt="Responsive image"
          style={{ height: 180, objectFit: "cover" }}
        />
      </a>
    </div>
  );
};
