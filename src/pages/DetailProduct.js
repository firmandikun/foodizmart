import React from "react";
import { CardDetail } from "../atom/cardDetail";
import { Breadcrumb } from "../components/Breadcrumb";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useParams, withRouter } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Products } from "../atom/products";
import { convertToIdr } from "../assets/js/convert (1)";
import share from "../assets/icontShare.jpeg";
import close from "../assets/close.png";
import { haversineDistance } from "../atom/haversineDistance/haversineDistance";
import { useRef } from "react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";
import { LoadingComponent, LoadingComponentsm } from "../atom/loading";
import startCase from "lodash.startcase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DetailProduct = (props) => {
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
  const [seller, setSeler] = React.useState();
  // console.log(seller);

  const ref = useRef(null);

  const executeScroll = () => {
    ref.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          setSeler(res.data.data.product.shipment_by_seller);
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
      <Breadcrumb name="Produk Detil" />
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-lg-6 col-12">
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
                    <button type="button" className="btn" onClick={handleOpen}>
                      <img src={share} alt="" width={50} />
                    </button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open}>
                        <div className={classes.paper}>
                          <div className="d-flex justify-content-center mb-2">
                            <div className=""></div>
                            <div className="">
                              <a
                                className="btn font-weight-bold "
                                onClick={handleClose}
                              >
                                <img src={close} alt="" width={40} />
                              </a>
                            </div>
                          </div>
                          <div className="mb-2">
                            <h3 style={{ fontWeight: 400, fontSize: 16 }}>
                              Bagikan Produk ini
                            </h3>
                          </div>
                          <div className="d-flex justify-content-center ">
                            <div className=" mx-2 ">
                              <WhatsappShareButton
                                url={`\n${window.location.href}`}
                                title={`Beli ${detail.name} di${
                                  detail.shop_name
                                } dengan harga Rp ${convertToIdr(
                                  harga,
                                  "Rp."
                                )}, \ndi FOODIZMART!`}
                                className="dropdown-item"
                              >
                                <WhatsappIcon size={35} round />
                              </WhatsappShareButton>
                            </div>
                            <FacebookShareButton
                              url={("Cek Link ", window.location.href)}
                              quote={`Beli ${detail.name} di ${detail.shop_name}
                                dengan harga Rp ${convertToIdr(harga, "Rp.")}, -
                                di FOODIZMART!`}
                            >
                              <FacebookIcon size={35} round />
                            </FacebookShareButton>
                          </div>
                        </div>
                      </Fade>
                    </Modal>
                  </div>
                </div>
                <div className="d-flex mt-1 ml-2">
                  <div className="rattings ">
                    <h5 className=" rattings " style={{ fontWeight: 600 }}>
                      {detail.rating_star} rating
                    </h5>
                  </div>
                  <div className="ratting ml-2">
                    <h5 className="rattings " style={{ fontWeight: 600 }}>
                      | {detail.stock} stok
                    </h5>
                  </div>
                  <div className="ratting ml-2">
                    <h5 className=" rattings" style={{ fontWeight: 600 }}>
                      | {detail.product_type}
                    </h5>
                  </div>
                </div>

                <table className="table text-left table-borderless  ">
                  <tbody style={{ color: "#333333" }}>
                    <tr>
                      <td className="pb-2 contenRatting ">Nama Toko</td>
                      <td
                        className=" pb-2 contenRatting"
                        style={{ fontWeight: 500, fontSize: 16 }}
                      >
                        {detail.shop_name}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className=" pt-0 pb-2 contenRatting"
                        // style={{ fontWeight: 600, fontSize: 16 }}
                      >
                        Harga
                      </td>
                      <td
                        className=" pt-0 pb-2 contenRatting"
                        style={{ fontWeight: 500, fontSize: 14 }}
                      >
                        {convertToIdr(harga, "Rp.")}
                      </td>
                    </tr>
                    <tr>
                      <td className=" pt-0 pb-2 contenRatting">Kelurahan</td>
                      <td
                        className=" pt-0 pb-2 d-flex contenRatting"
                        style={{ fontWeight: 500, fontSize: 14 }}
                      >
                        {`${detail.shop_regional_kelurahan_name}, `}
                        {detail.shop_regional_kabupaten_name}
                      </td>
                    </tr>
                    <tr>
                      <td className=" pt-0 pb-2 contenRatting ">Informasi</td>
                      <td
                        className=" pt-0 pb-2 contenRatting "
                        style={{ fontWeight: 500, fontSize: 14 }}
                      >
                        {startCase(detail.product_type)}
                      </td>
                    </tr>
                    <tr>
                      <td className=" pt-0 pb-2 contenRatting">Stok</td>
                      <td
                        className=" pt-0 pb-2 contenRatting "
                        style={{ fontWeight: 500, fontSize: 14 }}
                      >
                        {detail.stock}
                      </td>
                    </tr>
                    <tr>
                      <td className=" pt-0 pb-2 contenRatting">
                        {detail.shipment_by_seller === "true"
                          ? `Gratis Ongkir`
                          : ""}
                      </td>
                      <td
                        className=" pt-0 pb-2 contenRatting"
                        style={{ fontWeight: 500, fontSize: 14 }}
                      >
                        {detail.shipment_by_seller === "true"
                          ? `Radius ${detail.shipment_by_seller_maximum_radius} KM`
                          : ""}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="details">
                <div className=" ">
                  <h6
                    className="mb-2 detail"
                    style={{ color: "#333333", fontWeight: 600 }}
                  >
                    Produk Detil
                  </h6>
                  <p
                    className="  ml-2 text-justify mb-0 deskripsi"
                    style={{ fontWeight: 500, fontSize: 12, color: "#333333" }}
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
          <h5 className="text-left m-0 titleHome" style={{ fontWeight: 600 }}>
            Produk Serupa{" "}
          </h5>
        </div>
        <div className="row">
          {isLoading &&
            [...Array(8)].map(() => {
              return window.innerWidth < 500 ? (
                <LoadingComponentsm />
              ) : (
                <LoadingComponent />
              );
            })}
          {similarProducts.slice(0, page).map((item) => {
            return (
              <Products
                price={item.price}
                image={`${imageProduct}${item.photo}`}
                nameStore={item.shop_name}
                location={`${item.shop_regional_kelurahan_name}, ${item.shop_regional_kabupaten_name}`}
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
            {page === similarProducts.length ? "Lebih Sedikit" : "Selengkapnya"}
          </a>
        </div>
        <div class="title py-3">
          <h5 className="text-left m-0 titleHome" style={{ fontWeight: 600 }}>
            Produk Lainya
          </h5>
        </div>
        <div className="row">
          {isLoading &&
            [...Array(8)].map(() => {
              return window.innerWidth < 500 ? (
                <LoadingComponentsm />
              ) : (
                <LoadingComponent />
              );
            })}
          {otherProduct.slice(0, page).map((item) => {
            return (
              <Products
                price={item.price}
                image={`${imageProduct}${item.photo}`}
                nameStore={item.shop_name}
                location={`${item.shop_regional_kelurahan_name}, ${item.shop_regional_kabupaten_name}`}
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
            {page === otherProduct.length ? "Lebih Sedikit" : "Selengkapnya"}
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default withRouter(DetailProduct);
