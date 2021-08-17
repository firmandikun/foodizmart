import React from "react";
import { useHistory } from "react-router";
import icontRattig from "../../assets/rating.png";
export const CardStore = ({ name, id, image, address, ratting, distance }) => {
  const history = useHistory();
  return (
    <div className="col-12 col-md-4 mb-3">
      <a
        onClick={() => history.push(`/detailStore/${id}`)}
        className="text-dark text-decoration-none"
      >
        <div className=" list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm p-3 ">
          <div className="recommend-slider2 rounded mb-0 ">
            <div className="osahan-slider-item mx-auto rounded">
              <img
                src={image}
                className="img-fluid  mx-auto img-card-store rounded shadow-sm"
                alt="Responsive "
              />
            </div>
          </div>
          <div className=" mt-3 position-relative">
            <h6
              className="mb-1 font-weight-bold text-success text-left "
              style={{ cursor: "pointer" }}
            >
              {name}
            </h6>
            <div className="d-flex ">
              <div>
                {ratting > 0 ? (
                  <div className="ratting d-flex ml-1">
                    <div className="image-ratting ml-1">
                      <img src={icontRattig} alt="" style={{ width: 18 }} />
                    </div>
                    <div className="ratting ml-2 mt-1 ">
                      <p className="text-muted text-left "> {ratting} </p>
                    </div>
                    <span className="mx-2 mt-1 "> | </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <p className="text-muted mt-1"> {address} </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
