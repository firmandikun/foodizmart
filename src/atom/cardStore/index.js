import React from "react";
import Slider from "react-slick";

import image1 from "../../assets/img/recommend/r1.jpg";
import image2 from "../../assets/img/recommend/r2.jpg";
import image3 from "../../assets/img/recommend/r3.jpg";
export const CardStore = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 1700,
    arrows: false,
  };
  return (
    <div class="col-12 col-md-4 mb-3">
      <a href="product_details.html" class="text-dark text-decoration-none">
        <div class=" list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm ">
          <Slider {...settings} div class="recommend-slider2 rounded mb-0">
            <div class="osahan-slider-item p-2 rounded">
              <img
                src={image1}
                class="img-fluid mx-auto rounded shadow-sm"
                alt="Responsive image"
              />
            </div>
            <div class="osahan-slider-item p-2 rounded">
              <img
                src={image2}
                class="img-fluid mx-auto rounded shadow-sm"
                alt="Responsive image"
              />
            </div>
            <div class="osahan-slider-item p-2 rounded">
              <img
                src={image3}
                class="img-fluid mx-auto rounded shadow-sm"
                alt="Responsive image"
              />
            </div>
          </Slider>
          <div class="p-3 position-relative">
            <h6 class="mb-1 font-weight-bold text-success">Toko Makanan</h6>
            <p class="text-muted">kota, Yogyakarta</p>
            <div class="text-right">
              <h6 class="m-0">icone rating</h6>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
