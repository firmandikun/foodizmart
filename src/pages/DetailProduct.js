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
import { convertToIdr } from "../assets/js/convert (1)";
import { LoadingComponent } from "../atom/loading";
import { haversineDistance } from "../atom/haversineDistance/haversineDistance";

const DetailProduct = () => {
  const { id } = useParams();
  const [detail, setDetail] = React.useState({});
  const [otherProduct, setOtherProducts] = React.useState([]);
  const [similarProducts, setSimilarProducts] = React.useState([]);
  const state = useSelector((state) => state.address);
  const [keywordSearch] = React.useState("Cari Produk Pilihanmu");
  const [order, setOrder] = React.useState(1);
  const [harga, setHarga] = React.useState();
  const [imageProduct] = React.useState(
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product.medium
  );
  const [seacrh, setSeacrh] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(8);

  const history = useHistory();
  const authBasic =
    "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";
  const detailProducts = () => {
    setLoading(true);
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
          let other_product = [...res.data.data.other_product];
          let currentLocation = state.data.cordinate;
          other_product.map((val) => {
            var nearby_m = haversineDistance(currentLocation, {
              latitude: val.shop_latitude,
              longitude: val.shop_longitude,
            });

            var nearby_km = nearby_m / 1000;

            val.distance = nearby_km.toFixed(1);

            return val;
          });
          setDetail(res.data.data.product);
          setOtherProducts(res.data.data.other_product);
          setHarga(res.data.data.product.price);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSimiliarProduct = async (nama_product) => {
    setLoading(true);
    var bodyFormdata = new FormData();
    bodyFormdata.append("search_type", "product");
    bodyFormdata.append("search_key", nama_product);
    try {
      const response = await axios.get(
        "https://foodi.otiza.com/apiv1/product/search-product",
        {
          headers: {
            Authorization: authBasic,
          },
        }
      );

      if (response.data.status === "success") {
        let product_result = [...response.data.data.product_result];
        let currentLocation = state.data.cordinate;
        product_result.map((val) => {
          var nearby_m = haversineDistance(currentLocation, {
            latitude: val.shop_latitude,
            longitude: val.shop_longitude,
          });

          var nearby_km = nearby_m / 1000;

          val.distance = nearby_km.toFixed(1);

          return val;
        });
        setSimilarProducts(response.data.data.product_result);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  React.useEffect(() => {
    getSimiliarProduct(detail.name);
  }, []);

  React.useEffect(() => {
    detailProducts();
  }, [id, state]);

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
      <Breadcrumb name="Produk detail" />
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-lg-6 col-12 p-0">
            <CardDetail data={detail} />
          </div>
          <div className="col-lg-6 col-12 ">
            <div className="p-4 bg-white rounded shadow-sm">
              <div className="mt-2 ">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h1 className=" nameDetailProduct text-left ml-2 ">
                      {detail.name}
                    </h1>
                  </div>
                  <div>
                    <button className="btn btn-outline-danger">
                      {" "}
                      berbagi{" "}
                    </button>
                  </div>
                </div>

                <div className="d-flex mt-3 ml-2">
                  <div className="ratting ">
                    <h5 className="font-weight-700">
                      {detail.rating_star} ratting
                    </h5>
                  </div>
                  <div className="ratting ml-2">
                    <h5 className="font-weight-700">| {detail.stock} stock</h5>
                  </div>
                  <div className="ratting ml-2">
                    <h5 className="font-weight-700">| {detail.product_type}</h5>
                  </div>
                </div>

                <p className=" deskProduk font-weight-light text-dark text-left  ml-2">
                  <div className="mx-0 mt-2">
                    nama toko
                    <b
                      className="h6 text-product text-dark "
                      style={{ marginLeft: 63 }}
                    >
                      {detail.shop_name}
                    </b>
                  </div>
                  <div className="mx-0 mt-2">
                    Harga
                    <b
                      className="h6 text-product  text-dark  "
                      style={{ marginLeft: 100 }}
                    >
                      {convertToIdr(harga, "Rp.")}
                    </b>
                  </div>
                  <div className="mx-0 mt-2">
                    status
                    <b
                      className="h6 text-product text-dark "
                      style={{ marginLeft: 100 }}
                    >
                      {detail.status_active}
                    </b>
                  </div>

                  <div className="mx-0 mt-2">
                    Informasi
                    <b
                      className="h6 text-product text-dark "
                      style={{ marginLeft: 78 }}
                    >
                      {detail.product_type}
                    </b>
                  </div>
                  <div className="mx-0 mt-2">
                    Kota
                    <b
                      className="h6 text-product text-dark "
                      style={{ marginLeft: 110 }}
                    >
                      {detail.delivery_area}
                    </b>
                  </div>

                  <div className=" d-flex align-items-center my-2 ">
                    Stock
                    <div class="input-group" style={{ marginLeft: 102 }}>
                      {detail.stock}
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
          <a class="ml-auto btn btn-outline-success btn-sm">See more</a>
        </div>
        <div className="row">
          {similarProducts.slice(0, 8).map((item) => {
            return (
              <Products
                price={item.price}
                image={`${imageProduct}${item.photo}`}
                nameStore={item.shop_name}
                location={item.shop_address}
                nameProduct={item.name}
                qty={item.qty_order}
                ratting={item.rating_star}
                status={
                  item.product_type === "readystock" ? "" : item.product_type
                }
                _id={item.id}
                distance={item.distance}
              />
            );
          })}
        </div>
        <div class="title d-flex align-items-center py-3">
          <h5 class="m-0"> Produk Lainyaa </h5>
          <a
            class="ml-auto btn btn-outline-success btn-sm"
            onClick={() =>
              page === otherProduct.length
                ? setPage(8)
                : setPage(otherProduct.length)
            }
          >
            {page === otherProduct.length ? "less more" : "see more"}
          </a>
        </div>
        <div className="row">
          {otherProduct.slice(0, page).map((item) => {
            return (
              <Products
                price={item.price}
                image={`${imageProduct}${item.photo}`}
                nameStore={item.shop_name}
                location={item.shop_address}
                nameProduct={item.name}
                qty={item.qty_order}
                ratting={item.rating_star}
                status={
                  item.product_type === "readystock" ? "" : item.product_type
                }
                _id={item.id}
                distance={item.distance}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default withRouter(DetailProduct);
