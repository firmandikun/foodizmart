import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./detail.css";
import image1 from "../../assets/img/recommend/r1.jpg";
import image2 from "../../assets/img/recommend/r2.jpg";
import image3 from "../../assets/img/recommend/r3.jpg";

export const CardDetail = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false
  };

  return (
    <div>
      <Slider {...settings} className="recommend-slider mb-3">
        <div className="osahan-slider-item">
          <img
            src={image1}
            className="img-fluid mx-auto shadow-sm rounded"
            alt="Responsive image"
          />
        </div>
        <div className="osahan-slider-item">
          <img
            src={image2}
            className="img-fluid mx-auto shadow-sm rounded"
            alt="Responsive image"
          />
        </div>
        <div className="osahan-slider-item">
          <img
            src={image3}
            className="img-fluid mx-auto shadow-sm rounded"
            alt="Responsive image"
          />
        </div>
      </Slider>
      <div className="pd-f d-flex align-items-center mb-3">
        <a
          href="cart.html"
          className="btn btn-warning p-3 rounded btn-block d-flex align-items-center justify-content-center mr-3 btn-lg"
        >
          <i className="icofont-plus m-0 mr-2"></i> ADD TO CART
        </a>
        <a
          href="cart.html"
          className="btn btn-danger p-3 rounded btn-block d-flex align-items-center justify-content-center btn-lg m-0"
        >
          <i className="icofont-cart m-0 mr-2"></i> BUY NOW
        </a>
      </div>
    </div>
  );
};
