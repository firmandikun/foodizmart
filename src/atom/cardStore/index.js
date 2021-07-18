import React from "react";
import { useHistory } from "react-router";
export const CardStore = ({ name, id, image, address }) => {
  const history = useHistory();
  return (
    <div className="col-12 col-md-4 mb-3">
      <a
        onClick={() => history.push(`/detailStore/${id}`)}
        className="text-dark text-decoration-none"
      >
        <div className=" list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm ">
          <div className="recommend-slider2 rounded mb-0">
            <div className="osahan-slider-item mx-auto my-2 p-2 card-store rounded">
              <img
                src={image}
                className="img-fluid img-card-products mx-auto rounded shadow-sm"
                alt="Responsive image"
              />
            </div>
          </div>
          <div className="p-3 position-relative">
            <h6 className="mb-1 font-weight-bold text-success">{name}</h6>
            <p className="text-muted">{address} </p>
          </div>
        </div>
      </a>
    </div>
  );
};
