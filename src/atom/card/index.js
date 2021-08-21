import React from "react";
import { useHistory } from "react-router";
import "./card.css";

export const Card = ({ image, name, onPress }) => {
  const history = useHistory();
  return (
    <div className="col-c ">
      <div
        className="bg-white category_card  shadow-sm rounded text-center  px-1  py-3 c-it"
        style={{ width: 180, height: 100 }}
      >
        <a onClick={onPress}>
          <img src={image} className="img-fluid px-2 mx-auto" />
          <p className="m-0 pt-2 text-muted text-center">{name}</p>
        </a>
      </div>
    </div>
  );
};
