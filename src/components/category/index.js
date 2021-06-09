import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "../../atom/card";
import image1 from "../../assets/img/categorie/1.svg";
import image2 from "../../assets/img/categorie/2.svg";
import image3 from "../../assets/img/categorie/3.svg";
import image4 from "../../assets/img/categorie/4.svg";

export const Category = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="container">
      <div class="title d-flex align-items-center py-3">
        <h5 class="m-0">Category</h5>
        <a
          class="ml-auto btn btn-outline-success btn-sm"
          href="picks_today.html"
        >
          Lainya
        </a>
      </div>
      <Slider {...settings}>
        <div>
          <Card image={image1} />
        </div>
        <div>
          <Card image={image2} />
        </div>
        <div>
          <Card image={image3} />
        </div>
        <div>
          <Card image={image4} />
        </div>
        <div>
          <Card image={image1} />
        </div>
        <div>
          <Card image={image2} />
        </div>
        <div>
          <Card image={image3} />
        </div>
        <div>
          <Card image={image4} />
        </div>
      </Slider>
    </div>
  );
};
