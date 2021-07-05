import React from "react";
import { useHistory } from "react-router";
import "./card.css";

export const Card = ({ image, name, onPress }) => {
  const history = useHistory();
  return (
    <div className="col-c " style={{ width: 185 }}>
      <div className="bg-white shadow-sm rounded text-center  px-3  py-3 c-it">
        <a onClick={onPress}>
          <img src={image} className="img-fluid px-2 mx-auto" />
          <p className="m-0 pt-2 text-muted text-center">{name}</p>
        </a>
      </div>
    </div>
  );
};
