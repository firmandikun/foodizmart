import React from "react";
import { Link } from "react-router-dom";

export const Products = ({ image }) => {
  return (
    <>
      <div class="col-6 col-md-3 mb-3">
        <div
          class="
                          list-card
                          bg-white
                          h-100
                          rounded
                          overflow-hidden
                          position-relative
                          shadow-sm
                        "
        >
          <div class="list-card-image">
            <Link to="/detail" class="text-dark">
              <div class="member-plan position-absolute">
                <span class="badge m-3 badge-danger">10%</span>
              </div>
              <div class="p-3">
                <img src={image} class="img-fluid item-img w-100 mb-3" />
                <h6>Chilli</h6>
                <div class="d-flex align-items-center">
                  <h6 class="price m-0 text-success">$0.8/kg</h6>
                  <a
                    data-toggle="collapse"
                    href="#collapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample1"
                    class="btn btn-success btn-sm ml-auto"
                  >
                    +
                  </a>
                  <div class="collapse qty_show" id="collapseExample1">
                    <div>
                      <span class="ml-auto" href="#">
                        <form
                          id="myform"
                          class="cart-items-number d-flex"
                          method="POST"
                          action="#"
                        >
                          <input
                            type="button"
                            value="-"
                            class="
                                            qtyminus
                                            btn btn-success btn-sm
                                          "
                            field="quantity"
                          />
                          <input
                            type="text"
                            name="quantity"
                            value="1"
                            class="qty form-control"
                          />
                          <input
                            type="button"
                            value="+"
                            class="qtyplus btn btn-success btn-sm"
                            field="quantity"
                          />
                        </form>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
