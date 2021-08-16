import React from "react";
import { Header } from "../components/header";
import { Breadcrumb } from "../components/Breadcrumb";
import { Products } from "../atom/products";
import icontRattig from "../assets/rating.png";
import maps from "../assets/maps.svg";
import phone from "../assets/phone.svg";
import { Footer } from "../components/footer";
import axios from "axios";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { convertTimeAgo, convertToIdr } from "../assets/js/convert (1)";
import {
  LoadingComponent,
  LoadingStore,
  LoadingStoreAlert,
} from "../atom/loading";
import { haversineDistance } from "../atom/haversineDistance/haversineDistance";
import { CardRiview } from "../atom/cardRiview";
import { useRef } from "react";

const DetailStore = (props) => {
  const [detailStore, setDetailStore] = React.useState({});
  const [riview, setRiviewProducts] = React.useState([]);
  const [productStore, setProductsStore] = React.useState([]);
  const [imageProduct] = React.useState(
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product
      .original
  );
  const [isLoading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(8);
  const state = useSelector((state) => state.address);
  const [seacrh, setSeacrh] = React.useState();
  const [totalRiview, setDataRiview] = React.useState();
  const [keywordSearch] = React.useState("search product...");
  const authBasic =
    "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";
  const history = useHistory();
  const [limitRiview, setLimitRiview] = React.useState(3);
  const scrollProduct = useRef(null);

  const scrollToTop = () => {
    console.log("");
  };
  // const state = useSelector((state) => state.address);
  const urlImage = "https://foodi.otiza.com/asset/image/shop/original/";
  const getProductStore = () => {
    setLoading(true);
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
          let productStore = [...res.data.data.products];
          let currentLocation = state.data.cordinate;
          productStore.map((val) => {
            var nearby_m = haversineDistance(currentLocation, {
              latitude: val.shop_latitude,
              longitude: val.shop_longitude,
            });

            var nearby_km = nearby_m / 1000;
            val.distance = nearby_km.toFixed(1);
            return val;
          });
          setProductsStore(productStore);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getDetailStore = () => {
    setLoading(true);
    var bodyFormdata = new FormData();
    bodyFormdata.append("shop_id", props.match.params.shop_id);
    axios
      .post("https://foodi.otiza.com/apiv1/product/shop-detail", bodyFormdata, {
        headers: {
          Authorization: authBasic,
        },
      })
      .then((res) => {
        if ((res.data.status = "success")) {
          setDetailStore(res.data.data.shop);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listRiview = () => {
    var bodyFormdata = new FormData();
    bodyFormdata.append("shop_id", props.match.params.shop_id);
    axios
      .post("https://foodi.otiza.com/apiv1/review/lists", bodyFormdata, {
        headers: {
          Authorization: authBasic,
        },
      })
      .then((res) => {
        if ((res.data.status = "success")) {
          setRiviewProducts(res.data.data.lists);
          // setPhoto(res.data.data.list)
          setDataRiview(res.data.data.total_data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log("products :", detailStore);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    getDetailStore();
    getProductStore();
    listRiview();
  }, [state]);

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
      <Breadcrumb name="Detail Toko" />
      <div className="container mt-5 ">
        <div className="row m-0 p-0">
          {isLoading ? (
            <LoadingStoreAlert />
          ) : (
            <div className="col m-0 p-0">
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                Toko beroperasi pukul
                <strong>
                  {`  ${detailStore.shop_time_open}`} WIB. Pesanan yang lewat
                  pukul
                  {`    ${detailStore.shop_time_closed}   `}
                </strong>
                akan diproses saat toko beroperasi kembali.
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          )}
        </div>
        {isLoading ? (
          <LoadingStore />
        ) : (
          <div className="row bg-white rounded shadow-sm d-flex align-items-center justify-content-around  ">
            <div className="col-lg-2 col-12 storeImage">
              <img
                src={`${urlImage}${detailStore.logo}`}
                className="imgStore"
              />
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <h3
                className="nameStores text-left font-weight-500"
                style={{ fontSize: 20, color: "#212529" }}
              >
                {detailStore.name}
              </h3>
              <div className="d-flex">
                <img
                  src={maps}
                  alt=""
                  style={{ width: 11.58, height: 15.75 }}
                />
                <p className="ml-2 font-italic " style={{ fontSize: 13 }}>
                  {" "}
                  {detailStore.address}{" "}
                </p>
              </div>
              <div className="d-flex" style={{ marginTop: -10 }}>
                <img
                  src={phone}
                  alt=""
                  style={{ width: 14.78, height: 15.75 }}
                />
                <p className="ml-2 " style={{ fontSize: 13 }}>
                  {detailStore.phone}{" "}
                </p>
              </div>
              <p className="text-muted small text-justify mb-0">
                {detailStore.description}
              </p>
            </div>
            <div className="col-lg-4  px-3 col-md-12 col-sm-12 col4Store">
              <div className="">
                <div className="pt-2">
                  <p className="font-weight-bold ml-1 text-left">
                    Kualitas Toko
                    <br />
                    <div
                      className="d-flex align-items-center "
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {detailStore.rating}
                      <img
                        src={icontRattig}
                        alt=""
                        style={{ width: 21.39, height: 20.44 }}
                        className="ml-1"
                      />
                      <img
                        src={icontRattig}
                        alt=""
                        style={{ width: 21.39, height: 20.44 }}
                        className="ml-1"
                      />
                      <img
                        src={icontRattig}
                        alt=""
                        style={{ width: 21.39, height: 20.44 }}
                        className="ml-1"
                      />
                      <img
                        src={icontRattig}
                        alt=""
                        style={{ width: 21.39, height: 20.44 }}
                        className="ml-1"
                      />
                      <img
                        src={icontRattig}
                        alt=""
                        style={{ width: 21.39, height: 20.44 }}
                        className="ml-1"
                      />

                      <span className="ml-4 ulasan">
                        {" "}
                        {`(${totalRiview} ulasan)`}{" "}
                      </span>
                    </div>
                  </p>
                </div>
                <div className="details">
                  <div className="">
                    <p className="font-weight-bold text-left mb-2">
                      Produk Terjual
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "black",
                        textAlign: "left",
                        marginTop: -10,
                      }}
                    >
                      {detailStore.total_product_sold}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="title d-flex align-items-center py-4">
            <h5 className="m-1">Produk Ditoko Ini </h5>
          </div>
        </div>
        <div className="row" style={{ overflow: "hidden" }}>
          {isLoading && (
            <div className="d-flex">
              <LoadingComponent />
              <LoadingComponent />
              <LoadingComponent />
              <LoadingComponent />
            </div>
          )}
          {productStore.slice(0, page).map((product, index) => {
            return (
              <Products
                image={`${imageProduct}${product.photo}`}
                nameProduct={product.name}
                location={product.shop_address}
                nameStore={product.shop_name}
                price={product.price}
                key={index}
                _id={product.id}
                status={
                  product.product_type === "readystock"
                    ? ""
                    : product.product_type
                }
                ratting={product.rating_star}
                distance={product.distance}
                scroll={scrollToTop}
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
          <div className="title d-flex align-items-center py-4">
            <h5 className="m-1">Jumlah Rivie {`(${totalRiview})`} </h5>
          </div>
        </div>

        <div className="row p-0 m-0">
          <div className="col-12 p-0 m-0 ">
            {riview.slice(0, limitRiview).map((item, index) => {
              return (
                <CardRiview
                  riview={item}
                  linkImage={imageProduct}
                  name={item.member_name}
                  time={convertTimeAgo(item.updated_date)}
                  comment={item.comment}
                />
              );
            })}
          </div>
        </div>
        <div className="row ml-auto pr-3">
          <button
            className="btn btn-outline-danger ml-auto mb-3 "
            onClick={() =>
              limitRiview === riview.length
                ? setLimitRiview(3)
                : setLimitRiview(riview.length)
            }
          >
            {limitRiview === riview.length ? "less more" : "see more"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(DetailStore);
