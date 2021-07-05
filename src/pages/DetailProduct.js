import React from "react";
import { CardDetail } from "../atom/cardDetail";
import { Breadcrumb } from "../components/Breadcrumb";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Otherproducts } from "../components/otherproducts";
import { SimiliarProducts } from "../components/similarProducts";
import { useParams, withRouter } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const DetailProduct = (props) => {
  const { id } = useParams();
  const [detail, setDetail] = React.useState({});
  const state = useSelector((state) => state.address);

  console.log(state);

  const authBasic =
    "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";

  React.useEffect(() => {
    console.log("params : ", props.match.params.id);
    var bodyFormdata = new FormData();
    bodyFormdata.append("product_id", id);
    axios
      .post(
        `http://foodiadmin.otiza.com/apiv1/product/product-detail`,
        bodyFormdata,
        {
          headers: {
            Authorization: authBasic,
          },
        }
      )
      .then((res) => {
        if ((res.data.status = "success")) {
          console.log(res.data);
          setDetail(res.data.data.product);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header address={state.data.address} />
      <Breadcrumb />
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-lg-6 col-12 p-0">
            <CardDetail />
          </div>
          <div className="col-lg-6 col-12 ">
            <div className="p-4 bg-white rounded shadow-sm">
              <div className="pt-0">
                <h2 className="font-weight-bold"> {detail.name} </h2>
                <p
                  className="font-weight-light text-dark text-left
                  "
                  style={{ lineHeight: 3 }}
                >
                  <div className="m-0">
                    Harga :<b className="h6 text-dark m-0 "> {detail.price} </b>
                  </div>
                  <div className="m-0">
                    status : <b className="h6 text-dark m-0">Buka</b>
                  </div>
                  <div className="m-0">
                    Kota :
                    <b className="h6 text-dark m-0"> {detail.delivery_area} </b>
                  </div>
                </p>
              </div>
              <div className="details">
                <div className="pt-3 bg-white">
                  <div className="d-flex align-items-center">
                    <div
                      className="btn-group osahan-radio btn-group-toggle"
                      data-toggle="buttons"
                    ></div>
                  </div>
                </div>
                <div className="pt-3">
                  <p className="font-weight-bold mb-2">Product Details</p>
                  <p className="text-muted small text-justify mb-0">
                    {detail.description}
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

export default withRouter(DetailProduct);
