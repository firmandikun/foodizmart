import React from "react";
import { CardDetail } from "../atom/cardDetail";
import { Breadcrumb } from "../components/Breadcrumb";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Otherproducts } from "../components/otherproducts";
import { useParams, withRouter } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Products } from "../atom/products";

const DetailProduct = () => {
  const { id } = useParams();
  const [detail, setDetail] = React.useState({});
  const [otherProduct, setOtherProducts] = React.useState([]);
  const [similarProducts, setSimilarProducts] = React.useState([]);
  const state = useSelector((state) => state.address);
  const [keywordSearch] = React.useState("search product...");
  const [order, setOrder] = React.useState(1);
  const [harga, setHarga] = React.useState();
  const [imageProduct] = React.useState(
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product.medium
  );
  const [seacrh, setSeacrh] = React.useState();

  const history = useHistory();

  const authBasic =
    "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";

  const detailProducts = () => {
    var bodyFormdata = new FormData();
    bodyFormdata.append("product_id", id);
    axios
      .post(
        `https://foodi.otiza.com/apiv1/product/product-detail-for-transaction`,
        bodyFormdata,
        {
          headers: {
            Authorization: authBasic,
          },
        }
      )
      .then((res) => {
        if ((res.data.status = "success")) {
          setDetail(res.data.data.product);
          setOtherProducts(res.data.data.other_product);
          setHarga(res.data.data.product.price);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSimiliarProduct = () => {
    var bodyFormdata = new FormData();
    bodyFormdata.append("search_type", "product");
    axios
      .post(
        "https://foodi.otiza.com/apiv1/product/search-product",
        bodyFormdata,
        {
          headers: {
            Authorization: authBasic,
          },
        }
      )
      .then((res) => {
        setSimilarProducts(res.data.data.product_result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePlus = () => {
    setOrder(() => order + 1);
    setHarga(() => (order + 1) * harga);
  };
  const handleMinus = () => {
    if (order !== 1) {
      setOrder(() => order - 1);
      setHarga(() => harga / order);
    }
  };

  React.useEffect(() => {
    getSimiliarProduct();
  }, [otherProduct, order]);
  React.useEffect(() => {
    detailProducts();
  }, [otherProduct]);

  return (
    <>
      <Header
        handleSubmit={handleSubmit}
        address={state.data.address}
        handleSubmit={handleSubmit}
        search={keywordSearch}
        onChange={(e) => setSeacrh(e.target.value)}
        onPress={() =>
          history.push({
            pathname: "/products",
            state: { cari: seacrh, categoryId: "" },
          })
        }
      />
      <Breadcrumb />
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-lg-6 col-12 p-0">
            <CardDetail data={detail} />
          </div>
          <div className="col-lg-6 col-12 ">
            <div className="p-4 bg-white rounded shadow-sm">
              <div className="mt-2">
                <h2 className=" nameDetailProduct "> {detail.name} </h2>
                <p className=" deskProduk font-weight-light text-dark text-left mt-5 ml-2">
                  <div className="m-0">
                    Harga
                    <b
                      className="h6 text-product  text-dark  "
                      style={{ marginLeft: 100 }}
                    >
                      {harga}
                    </b>
                  </div>
                  <div className="m-0">
                    status
                    <b
                      className="h6 text-product text-dark "
                      style={{ marginLeft: 100 }}
                    >
                      {detail.status_active}
                    </b>
                  </div>
                  <div className="m-0">
                    Kota
                    <b
                      className="h6 text-product text-dark "
                      style={{ marginLeft: 110 }}
                    >
                      {detail.delivery_area}
                    </b>
                  </div>

                  <div className=" d-flex align-items-center  ">
                    Kuantitas
                    <div class="input-group" style={{ marginLeft: 75 }}>
                      <div class="input-group-prepend ">
                        <button
                          class="btn btn-outline-success rounded-0"
                          type="button"
                          onClick={handlePlus}
                        >
                          +
                        </button>
                        <input
                          type="text"
                          class="form-control text-center rounded-0"
                          placeholder={order}
                          aria-label="Example text with two button addons"
                          aria-describedby="button-addon3"
                          style={{ width: 90 }}
                        />
                        <button
                          class="btn btn-outline-warning"
                          onClick={handleMinus}
                          type="button"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
              <div className="details">
                <div className=" ">
                  <p className="font-weight-bold mb-2">Product Details</p>
                  <p className="text-muted small ml-2 text-justify mb-0">
                    {detail.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container list-product">
        <div class="title d-flex align-items-center py-3">
          <h5 class="m-0"> Product Serupa </h5>
          <a class="ml-auto btn btn-outline-success btn-sm" href="">
            See more
          </a>
        </div>
        <div className="row">
          {similarProducts.slice(0, 8).map((item) => {
            return (
              <Products
                price={item.price}
                image={`${imageProduct}${item.photo}`}
                nameStore={item.shop_name}
                location={item.shop_latitude}
                nameProduct={item.name}
                qty={item.qty_order}
                ratting={item.rating_star}
                status={item.product_type}
                _id={item.id}
              />
            );
          })}
        </div>
      </div>
      <Otherproducts title="Produk Lainya" product={otherProduct} />
      <Footer />
    </>
  );
};

export default withRouter(DetailProduct);
