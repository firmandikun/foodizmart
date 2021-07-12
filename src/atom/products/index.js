import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

export const Products = ({
  image,
  nameProduct,
  location,
  price,
  nameStore,
  status,
  _id,
  qty,
  ratting,
}) => {
  const history = useHistory();
  return (
    <>
      <div className="col-xl-3 col-md-6 col-sm-12 mb-3">
        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
          <div className="list-card-image">
            <div className="text-dark">
              <div className="d-flex justify-content-between">
                <span className="badge mx-3 mt-3 badge-danger">{status}</span>
                <span className="badge mt-3 mr-3 badge-success">
                  {ratting > 0 ? ratting : ""}
                </span>
              </div>
              <div className="p-3">
                <div className="card card-product border-0 m-auto ">
                  <img
                    src={image}
                    className="img-fluid img-card-products rounded item-img w-100 mb-2"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <a onClick={() => history.push(`/detail/${_id}`)}>
                  <h6 className="mb-0 mt-2" style={{ cursor: "pointer" }}>
                    {nameStore}
                  </h6>
                </a>

                <p className="text-muted mt-0"> {location} </p>
                <div className="d-flex align-items-center">
                  <h6 className="price m-0 text-success">
                    <CurrencyFormat
                      value={price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp"}
                    />
                  </h6>
                  <span className="ml-auto"> {nameProduct} </span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="mt-1">
                    {" "}
                    {qty >= 0 ? "Produk Terjual : " + qty : ""}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
