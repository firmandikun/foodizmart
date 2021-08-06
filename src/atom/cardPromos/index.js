import React from "react";
import { Link } from "react-router-dom";

export const CardPromos = ({ image }) => {
  return (
    <div className="osahan-slider-items mx-2">
      <a href="/">
        <img
          src={image}
          className="img-fluid osahan-slider-item mx-auto rounded"
          alt="Responsive image"
          style={{ height: 170, objectFit: "cover" }}
        />
      </a>
    </div>
  );
};
