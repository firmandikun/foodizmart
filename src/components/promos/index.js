import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardPromos } from "../../atom/cardPromos";
import image1 from "../../assets/img/promo1.jpg";
import image2 from "../../assets/img/promo2.jpg";
import image3 from "../../assets/img/promo3.jpg";
import image4 from "../../assets/img/promo4.jpg";

export const Promos = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container ">
      <div class="py-3 osahan-promos">
        <div class="d-flex align-items-center mb-3">
          <h5 class="m-0">Promos for you</h5>
          <a href="promos.html" class="ml-auto btn btn-outline-success btn-sm">
            See more
          </a>
        </div>
        <Slider {...settings}>
          <div>
            <CardPromos image={image1} />
          </div>
          <div>
            <CardPromos image={image2} />
          </div>
          <div>
            <CardPromos image={image3} />
          </div>
          <div>
            <CardPromos image={image4} />
          </div>
          <div>
            <CardPromos image={image1} />
          </div>
          <div>
            <CardPromos image={image2} />
          </div>
          <div>
            <CardPromos image={image3} />
          </div>
          <div>
            <CardPromos image={image4} />
          </div>
        </Slider>
      </div>
    </div>
  );
};
