import React from "react";
import { Products } from "../../atom/products";
import image1 from "../../assets/img/listing/v1.jpg";
import image2 from "../../assets/img/listing/v2.jpg";
import image3 from "../../assets/img/listing/v3.jpg";
import image4 from "../../assets/img/listing/v4.jpg";

import { Link } from "react-router-dom";

export const Otherproducts = ({ title, product }) => {
   const [imageProduct] = React.useState(
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product.medium
  );
  return (
    <div>
      <div className="container list-product">
        <div class="title d-flex align-items-center py-3">
          <h5 class="m-0">{title} </h5>
          <a
            class="ml-auto btn btn-outline-success btn-sm"
            href=""
          >
            See more
          </a>
        </div>
        <div className="row">
          {
            product.slice(0,8).map((item, index) => {
              return <Products nameProduct={item.name} nameStore={item.shop_name} price={item.price}   image={`${imageProduct}${item.photo}`} />
            })
          }
        
        </div>
      </div>
    </div>
  );
};
