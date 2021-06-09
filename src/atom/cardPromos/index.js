import React from "react";

export const CardPromos = ({ image }) => {
  return (
    <div class="osahan-slider-item mx-2">
      <a href="promo_details.html">
        <img
          src={image}
          class="img-fluid mx-auto rounded"
          alt="Responsive image"
        />
      </a>
    </div>
  );
};
