import React from "react";
import "./card.css";

export const Card = ({ image }) => {
  return (
    <div className="col-c ml-2 " style={{ width: 140 }}>
      <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
        <a href="/">
          <img src={image} className="img-fluid px-2 mx-auto" />
          <p className="m-0 pt-2 text-muted text-center">Vegetables</p>
        </a>
      </div>
    </div>
  );
};
