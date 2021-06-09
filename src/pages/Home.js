import React from "react";
import { Products } from "../atom/products";
import { Category } from "../components/category";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Promos } from "../components/promos";
import image1 from "../assets/img/listing/v1.jpg";
import image2 from "../assets/img/listing/v2.jpg";
import image3 from "../assets/img/listing/v3.jpg";
import image4 from "../assets/img/listing/v4.jpg";
import image5 from "../assets/img/listing/v5.jpg";
import image6 from "../assets/img/listing/v6.jpg";
import image7 from "../assets/img/listing/v7.jpg";
import image8 from "../assets/img/listing/v8.jpg";
import { CardStore } from "../atom/cardStore";

export const Home = () => {
  return (
    <>
      <Header />
      <Category />
      <Promos />
      <div className="container list-product">
        <div class="title d-flex align-items-center py-3">
          <h5 class="m-0">Pick's Today</h5>
          <a
            class="ml-auto btn btn-outline-success btn-sm"
            href="picks_today.html"
          >
            See more
          </a>
        </div>
        <div className="row">
          <Products image={image1} />
          <Products image={image2} />
          <Products image={image3} />
          <Products image={image4} />
          <Products image={image5} />
          <Products image={image6} />
          <Products image={image7} />
          <Products image={image8} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div class="title d-flex align-items-center py-3">
              <h5 class="m-0">Toko</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <CardStore />
          <CardStore />
          <CardStore />
        </div>
      </div>
      <Footer />
    </>
  );
};
