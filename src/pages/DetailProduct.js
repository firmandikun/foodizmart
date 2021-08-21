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
import share from "../assets/icontShare.jpeg";
import { haversineDistance } from "../atom/haversineDistance/haversineDistance";
import { useRef } from "react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";

const DetailProduct = (props) => {
  // console.log(props);
  const { id } = useParams();
  const [detail, setDetail] = React.useState({});
  const [otherProduct, setOtherProducts] = React.useState([]);
  const [similarProducts, setSimilarProducts] = React.useState([]);
  const state = useSelector((state) => state.address);
  const [keywordSearch] = React.useState("Cari Produk Pilihanmu");
  const [harga, setHarga] = React.useState();
  const [imageProduct] = React.useState(
    localStorage.getItem("dasboard")
      ? JSON.parse(localStorage.getItem("dasboard")).support.base_url.product
          .original
      : null
  );
  const [seacrh, setSeacrh] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(8);

  const ref = useRef(null);

  const executeScroll = () => {
    ref.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  var shareUrl = `https://foodizmart.duriansultan.com/${props.location.pathname}`;

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
      <div ref={ref}>
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
      </div>
      <Breadcrumb name="Produk detail" />
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-lg-6 col-12 p-0">
            <CardDetail data={detail} />
          </div>
          <div className="col-lg-6 col-12 " style={{ overflow: "hidden" }}>
            <div className="p-4 bg-white rounded shadow-sm">
              <div className="mt-2 ">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2
                      className=" nameDetailProduct text-left mt-2 ml-2  "
                      style={{ lineHeight: 1, color: "#333333" }}
                    >
                      {detail.name}
                    </h2>
                  </div>
                  <div>
                    <div class="btn-group ">
                      <button
                        type="button"
                        className="btn "
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src={share} alt="" width={50} />
                      </button>
                      <div class="dropdown-menu  " style={{ marginRight: 78 }}>
                        <div className="d-flex justify-content-center px-4">
                          <WhatsappShareButton
                            url={`${window.location.href}`}
                            title={`Beli ${detail.name} di ${detail.shop_name} dengan harga Rp ${detail.price} di `}
                            hashtag={"#hashtag"}
                            className="dropdown-item"
                          >
                            <WhatsappIcon size={35} round />
                          </WhatsappShareButton>
                          <FacebookShareButton
                            url={shareUrl}
                            quote={`Beli ${detail.name} di ${detail.shop_name} dengan harga Rp ${detail.price} di`}
                          >
                            <FacebookIcon size={35} round />
                          </FacebookShareButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-3 ml-2">
                  <div className="rattings ">
                    <h5 className=" rattings ">{detail.rating_star} rating</h5>
                  </div>
                  <div className="ratting ml-2">
                    <h5 className="rattings ">| {detail.stock} stock</h5>
                  </div>
                  <div className="ratting ml-2">
                    <h5 className=" rattings">| {detail.product_type}</h5>
                  </div>
                </div>

                <div className="d-flex  align-items-center mt-2">
                  <div className=" ml-2 ">
                    <div className="d-flex flex-column ">
                      <div>
                        <h6 style={{ color: "#333333" }}>Nama Toko</h6>
                      </div>
                      <div className=" mr-auto">
                        <h6 style={{ color: "#333333" }}>Harga</h6>
                      </div>
                      <div className=" mr-auto">
                        <h6 style={{ color: "#333333" }}>Status</h6>
                      </div>
                      <div className=" mr-auto">
                        <h6 style={{ color: "#333333" }}>Informasi</h6>
                      </div>
                      <div className=" mr-auto">
                        <h6 style={{ color: "#333333" }}>Kota</h6>
                      </div>
                      <div className=" mr-auto">
                        <h6 style={{ color: "#333333" }}>Stok</h6>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2">
                    <div className="d-flex flex-column ml-4">
                      <div>
                        <h6 className="font-weight-light">
                          {detail.shop_name}
                        </h6>
                      </div>
                      <div className="mr-auto">
                        <h6 className="font-weight-light ">
                          {convertToIdr(harga, "Rp.")}
                        </h6>
                      </div>
                      <div className=" mr-auto">
                        <h6 className="font-weight-light">
                          {detail.status_active}
                        </h6>
                      </div>
                      <div className=" mr-auto">
                        <h6 className="font-weight-light">
                          {detail.product_type}
                        </h6>
                      </div>
                      <div className="mr-auto">
                        <h6 className="font-weight-light ">
                          {detail.delivery_area}
                        </h6>
                      </div>
                      <div className=" mr-auto">
                        <h6 className="font-weight-light"> {detail.stock}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details">
                <div className=" ">
                  <h6
                    className="mb-2"
                    style={{ color: "#333333", fontWeight: "bold" }}
                  >
                    Product Details
                  </h6>
                  <p
                    className="  ml-2 text-justify mb-0"
                    style={{ color: "#333333" }}
                  >
                    {detail.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container list-product">
        <div class="title  py-3">
          <h5 class="m-0 text-left"> Product Serupa </h5>
        </div>
        <div className="row">
          {similarProducts.slice(0, page).map((item) => {
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
                scroll={executeScroll}
              />
            );
          })}
        </div>
        <div className="row pr-2">
          <a
            class="ml-auto btn btn-outline-danger btn-sm"
            onClick={() =>
              page === similarProducts.length
                ? setPage(8)
                : setPage(similarProducts.length)
            }
          >
            {page === similarProducts.length ? "less more" : "see more"}
          </a>
        </div>
        <div class="title py-3">
          <h5 class="m-0 text-left"> Produk Lainyaa </h5>
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
                scroll={executeScroll}
              />
            );
          })}
        </div>
        <div className="row pr-2">
          <a
            class="ml-auto mb-3 btn btn-outline-danger btn-sm"
            onClick={() =>
              page === otherProduct.length
                ? setPage(8)
                : setPage(otherProduct.length)
            }
          >
            {page === otherProduct.length ? "less more" : "see more"}
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default withRouter(DetailProduct);
