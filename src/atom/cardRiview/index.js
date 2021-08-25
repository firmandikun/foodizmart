import React from "react";
import ratting from "../../assets/rating.png";
export const CardRiview = ({ riview, linkImage, name, time, comment }) => {
  var photos = null;
  if (riview.information !== null) {
    photos = JSON.parse(riview.information).products[0].photo;
  }

  return (
    <div>
      <div className="container p-0">
        <div class="card w-100 border-0 mb-3 ">
          <div class="card-body row ">
            <div className=" d-flex align-items-center justify-content-start ">
              <div className="col-2">
                <img
                  src={`${linkImage}${photos}`}
                  alt=""
                  style={{ width: 60, height: 60 }}
                  className="rounded-circle"
                />
              </div>
              <div className="conten ml-2" style={{ width: 150 }}>
                <h5
                  class="card-title ml-3 my-0"
                  style={{ fontSize: 16, color: " #212529" }}
                >
                  {name}
                </h5>
                <h5
                  class="card-title my-0 ml-3 font-weight-400 "
                  style={{ fontSize: 13, color: " #6C757D " }}
                >
                  {time}
                </h5>
              </div>
            </div>
            <div className=" col-lg-8 col-sm-12 ratting mt-2">
              <div className="d-flex  ">
                <img
                  src={ratting}
                  alt=""
                  style={{ width: 14.26, height: 13.63 }}
                />
                <img
                  src={ratting}
                  alt=""
                  style={{ width: 14.26, height: 13.63 }}
                />
                <img
                  src={ratting}
                  alt=""
                  style={{ width: 14.26, height: 13.63 }}
                />
                <img
                  src={ratting}
                  alt=""
                  style={{ width: 14.26, height: 13.63 }}
                />
              </div>
              <p
                class="card-text text-left mt-1 "
                style={{ fontSize: 12, color: "#212529" }}
              >
                {comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
