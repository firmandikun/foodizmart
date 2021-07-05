import React from "react";
import { useHistory } from "react-router";
import Slider from "react-slick";

import image1 from "../../assets/img/recommend/r1.jpg";
import image2 from "../../assets/img/recommend/r2.jpg";
import image3 from "../../assets/img/recommend/r3.jpg";
import iconeR from "../../assets/rating.png";
export const CardStore = ({ name, id , image, address}) => {

  const history = useHistory();

  return (
    <div className="col-12 col-md-4 mb-3">
      <a
        onClick={() => history.push(`/detailStore/${id}`)}
        className="text-dark text-decoration-none"
      >
        <div className=" list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm ">
          <div className="recommend-slider2 rounded mb-0">
            <div className="osahan-slider-item p-2 rounded">
              <img
                src={image}
                className="img-fluid mx-auto rounded shadow-sm"
                alt="Responsive image"
              />
            </div>
          </div>
          <div className="p-3 position-relative">
            <h6 className="mb-1 font-weight-bold text-success">{name}</h6>
            <p className="text-muted">{address} </p>
            <div className="text-right ">
              <img src={iconeR} alt="" style={{ width: 20, padding: 2 }} />
              <img src={iconeR} alt="" style={{ width: 20, padding: 2 }} />
              <img src={iconeR} alt="" style={{ width: 20, padding: 2 }} />
              <img src={iconeR} alt="" style={{ width: 20, padding: 2 }} />
              <img src={iconeR} alt="" style={{ width: 20, padding: 2 }} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
