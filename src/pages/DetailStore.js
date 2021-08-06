import React from "react";
import { Header } from "../components/header";
import { Breadcrumb } from "../components/Breadcrumb";
import { Products } from "../atom/products";
import icontRattig from "../assets/rating.png";
import { Footer } from "../components/footer";
import axios from "axios";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { convertToIdr } from "../assets/js/convert (1)";
import {
  LoadingComponent,
  LoadingStore,
  LoadingStoreAlert,
} from "../atom/loading";
import { haversineDistance } from "../atom/haversineDistance/haversineDistance";

const DetailStore = (props) => {
  const [detailStore, setDetailStore] = React.useState({});
  const [riview, setRiviewProducts] = React.useState([]);
  const [productStore, setProductsStore] = React.useState([]);
  const [imageProduct] = React.useState(
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product.small
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
  // const state = useSelector((state) => state.address);

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
      .post("http://foodi.otiza.com/apiv1/review/lists", bodyFormdata, {
        headers: {
          Authorization: authBasic,
        },
      })
      .then((res) => {
        if ((res.data.status = "success")) {
          setRiviewProducts(res.data.data.lists);
          setDataRiview(res.data.data.total_data);
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
          <div className="row bg-white rounded shadow-sm d-flex align-items-center justify-content-around px-2 py-2 ">
            <div className="col-lg-2 col-12 storeImage">
              <img
                src={`http://foodiadmin.otiza.com/asset/image/shop/small/${detailStore.logo}`}
                alt=""
                className="imgStore"
              />
              <p className="h6 mt-2"> {detailStore.address} </p>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <h3 className="font-weight-bold text-left">
                {" "}
                {detailStore.name}{" "}
              </h3>
              <p
                className=" font-weight-light text-left "
                style={{ fontSize: 12 }}
              >
                Jumlah Riview
                <span className="font-weight-bold "> {totalRiview} </span>|
                Jumlah Saldo
                <span className="font-weight-bold ">
                  {" "}
                  {convertToIdr(detailStore.saldo, "Rp.")} |{" "}
                </span>
                <br />
                Phone
                <span className="font-weight-bold "> {detailStore.phone} </span>
              </p>
            </div>
            <div className="col-lg-4  col-md-12 col-sm-12 ">
              <div className="p-4 ">
                <div className="pt-2">
                  <div className="row d-flex justify-content-start p-1 ">
                    <p className="font-weight-bold ml-1 text-left">status :</p>
                    <p className="text-muted ml-2">
                      {detailStore.status_active}
                    </p>
                  </div>
                </div>
                <div className="details">
                  <div className="">
                    <p className="font-weight-bold text-left mb-2">Deskripsi</p>
                    <p className="text-muted small text-justify mb-0">
                      {detailStore.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row p-0 m-0">
              <div className="col-lg-2 col-sm-12 ">
                Kualitas Produk
                <div className="d-flex">
                  <p> {detailStore.rating}</p>
                  <img
                    src={icontRattig}
                    alt=""
                    className="ml-1"
                    style={{ width: 15, height: 15 }}
                  />
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
                status={product.product_type === "readystock" ? "" : product.product_type }
                ratting={product.rating_star}
                distance={product.distance}
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
            <h5 className="m-1">List Riview</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {isLoading && <LoadingComponent></LoadingComponent>}
            {riview.slice(0, 4).map((item, index) => {
              return (
                <div>
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-12">
                        <div className="card-body text-left">
                          <p className="card-text">{item.member_name}</p>
                          <p className="card-text">{item.comment}</p>
                          <p className="card-text">
                            <small className="text-muted">
                              {item.updated_date}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(DetailStore);
