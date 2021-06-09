import React from "react";
import { CardDetail } from "../atom/cardDetail";
import { Breadcrumb } from "../components/Breadcrumb";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Otherproducts } from "../components/otherproducts";
import { SimiliarProducts } from "../components/similarProducts";

export const DetailProduct = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-lg-6 p-0">
            <CardDetail />
          </div>
          <div className="col-6">
            <div class="p-4 bg-white rounded shadow-sm">
              <div class="pt-0">
                <h2 class="font-weight-bold">Valencia Orange - Imported</h2>
                <p
                  class="
                    font-weight-light
                    text-dark
                    m-0
                    d-flex
                    align-items-center
                  "
                >
                  Harga : <b class="h6 text-dark m-0">30.000</b>
                  <div className="ml-2">
                    status : <b class="h6 text-dark m-0">Buka</b>
                  </div>
                  <div className="ml-2">
                    Kota : <b class="h6 text-dark m-0">Yogyakarta</b>
                  </div>
                </p>
                <a href="review.html">
                  <div class="rating-wrap text-left mt-2">
                    <p class="label-rating text-muted  small">245 Reviews</p>
                  </div>
                </a>
              </div>
              <div class="pt-2">
                <div class="row d-flex justify-content-between p-1 ">
                  <div>
                    <p class="font-weight-bold m-0">status</p>
                    <p class="text-muted m-0">Buka</p>
                  </div>
                </div>
              </div>
              <div class="details">
                <div class="pt-3 bg-white">
                  <div class="d-flex align-items-center">
                    <div
                      class="btn-group osahan-radio btn-group-toggle"
                      data-toggle="buttons"
                    ></div>
                  </div>
                </div>
                <div class="pt-3">
                  <p class="font-weight-bold mb-2">Product Details</p>
                  <p class="text-muted small text-justify mb-0">
                    High quality Fresh Orange fruit exporters from South Korea
                    for sale. All citrus trees belong to the single genus Citrus
                    and remain almost entirely interfertile. for sale. All
                    citrus trees belong to the single genus Citrus and remain
                    almost entirely interfertile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Otherproducts title="Produk lainya" />
      <SimiliarProducts title="Produk Serupa" />
      <Footer />
    </>
  );
};
