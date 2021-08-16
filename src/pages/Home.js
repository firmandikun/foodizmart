import React from "react";
import { Products } from "../atom/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "../../src/atom/card";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Promos } from "../components/promos";
import { CardStore } from "../atom/cardStore";
import {
  LoadingCardStore,
  LoadingCategory,
  LoadingComponent,
  LoadingInformation,
} from "../atom/loading";
import { useHistory, withRouter } from "react-router";
import { useSelector } from "react-redux";
import { START_FETCHING_ADRESS } from "../features/locations/constants";
import axios from "axios";
import { haversineDistance } from "../atom/haversineDistance/haversineDistance";
import { useRef } from "react";

const Home = () => {
  const [product, setProduct] = React.useState([]);
  const [store, setStore] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [imageCategory, setImageCategory] = React.useState();
  const [imageProducts, setImageProducts] = React.useState();
  const [imageStore, setImageStore] = React.useState();
  const [seeAllStore, setSeeAllStore] = React.useState(3);
  const [seeAllProduct, setSeeAllProducts] = React.useState(8);
  const [seacrh, setSeacrh] = React.useState();
  const [slider, setSleder] = React.useState(null);
  const [sliderImage, setSlederImage] = React.useState(null);

  const [keywordSearch] = React.useState("Cari Produk Pilihanmu...");
  const [isLoading, setLoading] = React.useState(true);
  const [idAddress, setIdAddress] = React.useState();
  const [levelAddress, setLevelAddress] = React.useState();
  const state = useSelector((state) => state.address);
  const address = `${state.data.provinsi}`;
  const authBasic =
    "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";
  const history = useHistory();

  const executeScroll = () => {
    console.log("");
  };
  const getSlider = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://foodi.otiza.com/apiv1/slider/lists",
        {
          headers: {
            Authorization: authBasic,
          },
        }
      );
      setSleder(response.data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const currentLocations = async (state) => {
    var bodyFormdata = new FormData();
    bodyFormdata.append("google[kelurahan][name]", state.data.kelurahan);
    bodyFormdata.append("google[kecamatan][name]", state.data.kecamatan);
    bodyFormdata.append("google[kabupaten][name]", state.data.kabupaten);
    bodyFormdata.append("google[provinsi][name]", state.data.provinsi);
    try {
      const response = await axios.post(
        "https://foodi.otiza.com/apiv1/regional/get-current-location",
        bodyFormdata,
        {
          headers: {
            Authorization: authBasic,
          },
        }
      );
      if (response.data.status === "success") {
        setIdAddress(response.data.data.id);
        setLevelAddress(response.data.data.level);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getProducts = async () => {
    setLoading(true);
    var bodyFormdata = new FormData();
    if (levelAddress == "kelurahan") {
      bodyFormdata.append("regional[kelurahan][id]", idAddress);
    } else if (levelAddress == "kecamatan") {
      bodyFormdata.append("regional[kecamatan][id]", idAddress);
    } else if (levelAddress == "kabupaten") {
      bodyFormdata.append("regional[kabupaten][id]", idAddress);
    } else if (levelAddress == "provinsi") {
      bodyFormdata.append("regional[provinsi][id]", idAddress);
    }
    try {
      const response = await axios.post(
        "https://foodi.otiza.com/apiv1/home/dashboard",
        bodyFormdata,
        {
          headers: {
            Authorization: authBasic,
          },
        }
      );
      if (response.data.status === "success") {
        let product_by_arround_you = [
          ...response.data.data.product_by_arround_you,
        ];
        let currentLocation = state.data.cordinate;
        product_by_arround_you.map((val) => {
          var nearby_m = haversineDistance(currentLocation, {
            latitude: val.shop_latitude,
            longitude: val.shop_longitude,
          });
          var nearby_km = nearby_m / 1000;
          val.distance = nearby_km.toFixed(1);
          return val;
        });

        let shop_by_arround_you = [...response.data.data.shop_by_arround_you];

        shop_by_arround_you.map((val) => {
          var nearby_m = haversineDistance(currentLocation, {
            latitude: val.latitude,
            longitude: val.longitude,
          });
          var nearby_km = nearby_m / 1000;
          val.distance = nearby_km.toFixed(1);
          return val;
        });

        setProduct(product_by_arround_you);
        setStore(shop_by_arround_you);
        setCategory(response.data.data.top_category);
        setImageCategory(
          response.data.data.support.base_url["product-category"].original
        );
        setImageProducts(response.data.data.support.base_url.product.original);
        setSlederImage(response.data.data.support.base_url.slider.original);
        setImageStore(response.data.data.support.base_url.shop.original);
        localStorage.setItem(
          "dasboard",
          JSON.stringify({
            category: response.data.data.top_category,
            support: response.data.data.support,
          })
        );

        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    if (state.type === START_FETCHING_ADRESS) {
      getProducts();
      getSlider();
      currentLocations(state);
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 6,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "80px",
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "100px",
          slidesToShow: 6,
          autoplay: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 940,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "110px",
          slidesToShow: 4,
          autoplay: true,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "110px",
          slidesToShow: 2,
          autoplay: true,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "170px",
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <Header
        onChange={(e) => setSeacrh(e.target.value)}
        onPress={() =>
          history.push({
            pathname: "/products",
            state: { cari: seacrh, categoryId: "" },
          })
        }
        address={address}
        value={seacrh}
        handleSubmit={handleSubmit}
        search={keywordSearch}
      />
      <div className="container p-0">
        <div className="text-left  py-3">
          <h5 className="m-0">Kategori</h5>
        </div>
        <Slider {...settings}>
          {isLoading &&
            [...Array(6)].map(() => {
              return <LoadingCategory />;
            })}
          {category.map((categ, index) => {
            return (
              <div key={index}>
                <Card
                  image={`${imageCategory}${categ.logo}`}
                  name={categ.name}
                  onPress={() =>
                    history.push({
                      pathname: "/products",
                      state: { categoryId: categ.id, cari: "" },
                    })
                  }
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div>
        <div className="container p-0 ">
          <div className="py-3 osahan-promos">
            <h5 className="text-left m-0">Informasi</h5>
          </div>
          <Promos image={`${sliderImage}`} slider={slider} />
        </div>
      </div>
      <div className="container p-0 list-product">
        <div className="title d-flex align-items-center py-3">
          <h5 className="m-0">Produk</h5>
        </div>
        <div className="row">
          {isLoading &&
            [...Array(8)].map(() => {
              return <LoadingComponent />;
            })}
          {product.slice(0, seeAllProduct).map((product, index) => {
            return (
              <Products
                image={`${imageProducts}${product.photo}`}
                nameProduct={product.name}
                location={product.shop_address}
                nameStore={product.shop_name}
                status={
                  product.product_type === "readystock"
                    ? ""
                    : product.product_type
                }
                price={product.price}
                key={index}
                _id={product.id}
                qty={product.qty_order}
                ratting={product.rating_star}
                scroll={executeScroll}
              />
            );
          })}
          {}
        </div>
        <div className="row pr-2">
          <button
            className="btn btn-outline-danger ml-auto"
            onClick={() =>
              seeAllProduct === product.length
                ? setSeeAllProducts(8)
                : setSeeAllProducts(product.length)
            }
          >
            {seeAllProduct === product.length ? "less more" : "see more"}
          </button>
        </div>
      </div>
      <div className="container p-0">
        <div className="row">
          <div className="col-12">
            <div className="title d-flex align-items-center py-3">
              <h5 className="m-0">Toko</h5>
            </div>
          </div>
        </div>
        <div className="row">
          {isLoading &&
            [...Array(3)].map(() => {
              return <LoadingCardStore />;
            })}
          {store.slice(0, seeAllStore).map((store, index) => {
            return (
              <CardStore
                name={store.name}
                address={store.address}
                id={store.id}
                key={index}
                image={`${imageStore}${store.logo}`}
                ratting={store.rating}
              />
            );
          })}
        </div>
        <div className="row pr-2">
          <button
            className="btn  btn-outline-danger ml-auto mb-3  "
            onClick={() =>
              seeAllStore === store.length
                ? setSeeAllStore(3)
                : setSeeAllStore(store.length)
            }
          >
            {seeAllStore === store.length ? "less more" : "see more"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(Home);
