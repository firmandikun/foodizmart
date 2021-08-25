import React from "react";
import { useHistory } from "react-router-dom";
import { convertToIdr } from "../../assets/js/convert (1)";
import icontRattig from "../../assets/rating.png";
import { Link } from "react-router-dom";
import "./product.css";

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
  scroll,
}) => {
  const history = useHistory();
  return (
    <>
      <div className="col-6 col-md-3 mb-3">
        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
          <div
            onClick={() => {
              history.push(`/detail/${_id}`);
              scroll();
            }}
          >
            <div className="list-card-image">
              <div className="text-dark">
                <div className="p-3">
                  <div className="card card-product border-0 m-auto ">
                    <img
                      src={image}
                      className=" img-card-products  item-img w-100 mb-2"
                    />
                    <div className="position-absolute" style={{ bottom: 20 }}>
                      <span className="badge  status mx-3">{status}</span>
                    </div>
                  </div>
                  <h6
                    className="mb-0 mt-2 nameP"
                    style={{ cursor: "pointer", fontWeight: 600 }}
                  >
                    {nameProduct}
                  </h6>

                  <p className="text-muted nameS">{nameStore}</p>
                  <div className="d-flex align-items-center">
                    <h6 className="price m-0 text-success">
                      {convertToIdr(price, "Rp")}
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-start m-0 p-0">
                    <span className=" mt-1 ">
                      <div className="d-flex align-items-center justify-content-start m-0 p-0 ">
                        {ratting > 0 ? (
                          <div>
                            <img
                              className="icone_ratting"
                              src={icontRattig}
                              alt=""
                              style={{ width: 15 }}
                            />
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="mt-1" style={{ fontWeight: 500 }}>
                          {ratting > 0 ? (
                            <div>
                              <span className="ml-1 nameS">{ratting}</span>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="mt-1">
                          {ratting > 0 ? (
                            <div>
                              <span className="mx-2"> | </span>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </span>

                    <div
                      className="mt-2 terjual nameS"
                      style={{ fontWeight: 500 }}
                    >
                      {qty > 0 ? `Terjual : ` + qty : ""}{" "}
                    </div>
                  </div>
                  <div className="text-left mt-1">
                    <span className="nameS" style={{ fontWeight: 500 }}>
                      {" "}
                      {location}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
