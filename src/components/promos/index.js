import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardPromos } from "../../atom/cardPromos";

export const Promos = ({ image, slider }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "100px",
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 998,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "160px",
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {slider
        ? slider.data.lists.map((img, index) => {
            return (
              <div>
                <CardPromos image={`${image}${img.path}`} />
              </div>
            );
          })
        : null}
    </Slider>
  );
};
