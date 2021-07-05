import React from "react";
import { useHistory } from "react-router-dom";

export const Products = ({
  image,
  nameProduct,
  location,
  price,
  nameStore,
  status,
  _id,
}) => {
  const history = useHistory();
  return (
    <>
      <div className="col-6 col-md-3 mb-3">
        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
          <div className="list-card-image">
            <a
              onClick={() => history.push(`/detail/${_id}`)}
              className="text-dark"
            >
              <div className="member-plan position-absolute">
                <span className="badge m-3 badge-danger">{status}</span>
              </div>
              <div className="p-3">
                <img src={image} className="img-fluid item-img w-100 mb-3" />
                <h6>{nameProduct}</h6>
                <p className="text-muted"> {location} </p>
                <div className="d-flex align-items-center">
                  <h6 className="price m-0 text-success"> {price}</h6>
                  <span className="ml-auto"> {nameStore} </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
