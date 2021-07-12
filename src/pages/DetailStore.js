import React from "react";
import { Header } from "../components/header";
import logoStore from "../../src/assets/logo.png";
import { Products } from "../atom/products";
import icontShare from "../assets/share.png";
import iconeR from "../assets/rating.png";
import { Footer } from "../components/footer";
import axios from "axios";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const DetailStore = (props) => {
  const [detailStore, setDetailStore] = React.useState({});
  const [otherProduct, setOtherProducts] = React.useState([]);
  const [productStore, setProductsStore] = React.useState([]);
  const [imageProduct] = React.useState(
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product.small
  );
  const [page, setPage] = React.useState(8);
  const state = useSelector((state) => state.address);
  const [seacrh, setSeacrh] = React.useState();
  const [keywordSearch] = React.useState("search product...");
  const authBasic =
    "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";
  const history = useHistory();
  const getDetailStore = async () => {
    var bodyFormdata = new FormData();
    bodyFormdata.append("shop_id", props.match.params.shop_id);
    axios
      .post(
        "http://foodiadmin.otiza.com/apiv1/product/shop-detail",
        bodyFormdata,
        {
          headers: {
            Authorization: authBasic,
          },
        }
      )
      .then((res) => {
        if ((res.data.status = "success")) {
          console.log("api detai store :", res.data.data.shop);
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOtherProducts = () => {
    console.log("params : ", props.match.params.shop_id);
    var bodyFormdata = new FormData();
    bodyFormdata.append("product_id", props.match.params.shop_id);
    axios
      .post(
        "http://foodi.otiza.com/apiv1/product/product-detail-for-transaction",
        bodyFormdata,
        {
          headers: {
            Authorization: authBasic,
          },
        }
      )
      .then((res) => {
        if ((res.data.status = "success")) {
          setOtherProducts(res.data.data.other_product);
          setDetailStore(res.data.data.shop);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getProductStore = () => {
    console.log("params : ", props.match.params.shop_id);
    var bodyFormdata = new FormData();
    bodyFormdata.append("shop_id", props.match.params.shop_id);
    axios
      .post(
        "https://foodi.otiza.com/apiv1/product/get-all-product-by-shop",
        bodyFormdata,
        {
          headers: {
            Authorization: authBasic,
          },
        }
      )
      .then((res) => {
        if ((res.data.status = "success")) {
          setProductsStore(res.data.data.products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    getOtherProducts();
    getDetailStore();
    getProductStore();
  }, []);

  return (
    <>
      <Header
        address={state.data.address}
        onChange={(e) => setSeacrh(e.target.value)}
        onPress={() =>
          history.push({
            pathname: "/products",
            state: { cari: seacrh, categoryId: "" },
          })
        }
        search={keywordSearch}
        handleSubmit={handleSubmit}
      />
      <div className="container mt-5 ">
        <div className="row bg-white rounded shadow-sm d-flex align-items-center justify-content-around px-4 py-5 ">
          <div className="col-lg-4 col-12 ">
            <img
              src={`http://foodiadmin.otiza.com/asset/image/shop/small/${detailStore.logo}`}
              alt=""
              className="img-fluid"
            />
            <p className="h6">Indonesia, Yogyakarta, condongcatur </p>
            <div class="text-left" style={{ marginLeft: 30 }}>
              <img src={iconeR} alt="" style={{ width: 20, padding: 2 }} />
              <img src={iconeR} alt="" style={{ width: 20, padding: 2 }} />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <p className="h5 font-weight-light" style={{ fontSize: 15 }}>
              Product terjual
              <span className="font-weight-bold "> {detailStore.price} </span>|
              Jumlah Riview
              <span className="font-weight-bold "> {detailStore.saldo} </span>
              <div className="d-flex  mt-3 " style={{ marginLeft: 30 }}>
                <p className="text-muted">{detailStore.phone}</p>
                <button className="btn btn-danger ">
                  <img src={icontShare} alt="icont share" width="30" />
                </button>
              </div>
            </p>
          </div>
          <div className="col-lg-4  col-md-12 col-sm-12 ">
            <div className="p-4 ">
              <div className="pt-2">
                <div className="row d-flex justify-content-between p-1 ">
                  <div>
                    <p className="font-weight-bold m-0">status</p>
                    <p className="text-muted m-0">Buka</p>
                  </div>
                </div>
              </div>
              <div className="details">
                <div className="pt-3">
                  <p className="font-weight-bold mb-2">Deskripsi</p>
                  <p className="text-muted small text-justify mb-0">
                    {detailStore.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div class="title d-flex align-items-center py-4">
            <h5 class="m-1">Produk Ditoko Ini </h5>
          </div>
        </div>
        <div className="row">
          {productStore.slice(0, page).map((product, index) => {
            return (
              <Products
                image={`${imageProduct}${product.photo}`}
                nameProduct={product.name}
                location="yogyakarta, condong catur"
                nameStore={product.shop_name}
                price="20000"
                key={index}
              />
            );
          })}
        </div>
        <div className="row ml-auto pr-3">
          <button
            className="btn btn-outline-danger ml-auto"
            onClick={() =>
              page === productStore.length
                ? setPage(8)
                : setPage(productStore.length)
            }
          >
            {page === productStore.length ? "less more" : "see more"}
          </button>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div class="title d-flex align-items-center py-4">
            <h5 class="m-1">Produk Lainya </h5>
          </div>
        </div>

        <div className="row">
          {otherProduct.slice(0, page).map((product, index) => {
            return (
              <Products
                image={`${imageProduct}${product.photo}`}
                nameProduct={product.name}
                location="yogyakarta, condong catur"
                nameStore={product.shop_name}
                price="20000"
                key={index}
              />
            );
          })}
        </div>
        <div className="row ml-auto pr-3">
          <button
            className="btn btn-outline-danger ml-auto"
            onClick={() =>
              page === otherProduct.length
                ? setPage(8)
                : setPage(otherProduct.length)
            }
          >
            {page === otherProduct.length ? "less more" : "see more"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(DetailStore);
