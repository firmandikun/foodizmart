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
  distance,
}) => {
  const history = useHistory();
  return (
    <>
      <div className="col-6 col-md-3 mb-3">
        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
          <Link to={`/detail/${_id}`}>
            <div className="list-card-image">
              <div className="text-dark">
                <div className="d-flex justify-content-between">
                  <span
                    className="badge status mx-3 mt-3 "
                    style={{ height: 25 }}
                  >
                    {status}
                  </span>
                  <div className="">
                    <span className="badge mt-3 mr-3 badge-warning ml-3">
                      <div className="d-flex align-items-center justify-content-between ">
                        <div className="mx-1">
                          <img src={icontRattig} alt="" style={{ width: 12 }} />
                        </div>
                        <div className="">{ratting > 0 ? ratting : ""}</div>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="card card-product border-0 m-auto ">
                    <img
                      src={image}
                      className=" img-card-products  item-img w-100 mb-2"
                    />
                  </div>
                  <h6 className="mb-0 mt-2" style={{ cursor: "pointer" }}>
                    {nameProduct}
                  </h6>

                  <p className="text-muted "> {nameStore} </p>
                  <div className="d-flex align-items-center">
                    <h6 className="price m-0 text-success">
                      {convertToIdr(price, "Rp")}
                    </h6>
                    <span className="ml-auto"> {location} </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="mt-1">
                      {qty >= 0 ? "Produk Terjual : " + qty : ""}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
