import React from "react";

export const CardPromos = ({ image }) => {
  return (
    <div className="osahan-slider-item mx-2"  >
      <a href="" >
        <img
          src={image}
          className="img-fluid osahan-slider-item mx-auto rounded"
          alt="Responsive image"
       
        />
      </a>
    </div>
  );
};
