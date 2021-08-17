import React from "react";
import { useHistory } from "react-router-dom";
import { convertToIdr } from "../../assets/js/convert (1)";
import icontRattig from "../../assets/rating.png";
import { Link } from "react-router-dom";

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
                  <h6 className="mb-0 mt-2" style={{ cursor: "pointer" }}>
                    {nameProduct}
                  </h6>

                  <p className="text-muted  "> {nameStore} </p>
                  <div className="d-flex align-items-center">
                    <h6 className="price m-0 text-success">
                      {convertToIdr(price, "Rp")}
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-start">
                    <span className=" mt-1 ">
                      <div className="d-flex align-items-center justify-content-between ">
                        {ratting > 0 ? (
                          <div className="">
                            <img
                              className=""
                              src={icontRattig}
                              alt=""
                              style={{ width: 15 }}
                            />
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="mx-1 mt-1">
                          {" "}
                          {ratting > 0 ? ratting : ""}
                        </div>
                      </div>
                    </span>

                    <div className="mt-2 ">
                      {qty > 0 ? `| Terjual : ` + qty : ""}{" "}
                    </div>
                  </div>
                  <div className="text-left mt-1">
                    <span className=""> {location} </span>
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
