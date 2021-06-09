import React from "react";
import { Products } from "../../atom/products";
import image1 from "../../assets/img/listing/v1.jpg";
import image2 from "../../assets/img/listing/v2.jpg";
import image3 from "../../assets/img/listing/v3.jpg";
import image4 from "../../assets/img/listing/v4.jpg";

import { Link } from "react-router-dom";

export const Otherproducts = ({ title }) => {
  return (
    <div>
      <div className="container list-product">
        <div class="title d-flex align-items-center py-3">
          <h5 class="m-0">{title} </h5>
          <a
            class="ml-auto btn btn-outline-success btn-sm"
            href="picks_today.html"
          >
            See more
          </a>
        </div>
        <div className="row">
          <Products image={image1} />
          <Products image={image2} />
          <Products image={image3} />
          <Products image={image4} />
        </div>
      </div>
    </div>
  );
};
