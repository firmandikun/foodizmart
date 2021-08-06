import React from "react";
import { Products } from "../../atom/products";

export const Otherproducts = ({ title, product }) => {
  const [imageProduct] = React.useState(
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product.medium
  );
  return (
    <div>
      <div className="container list-product">
        <div class="title d-flex align-items-center py-3">
          <h5 class="m-0">{title} </h5>
          <a class="ml-auto btn btn-outline-success btn-sm" href="">
            See more
          </a>
        </div>
        <div className="row">
          {product.slice(0, 8).map((item, index) => {
            return (
              <Products
                nameProduct={item.name}
                _id={item.id}
                nameStore={item.shop_name}
                price={item.price}
                qty={item.qty_order}
                ratting={item.rating_star}
                status={item.product_type}
                image={`${imageProduct}${item.photo}`}
                distance={item.distance}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
