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
import { LoadingComponent } from "../atom/loading";
import { useHistory, withRouter } from "react-router";
import { useSelector } from "react-redux";
import { START_FETCHING_ADRESS } from "../features/locations/constants";
import axios from "axios";

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
  const [imageSlider, setImageSleder] = React.useState(null);
  const [keywordSearch] = React.useState("Search For Product...");
  const [isLoading, setLoading] = React.useState(true);
  const state = useSelector((state) => state.address);
  const address = `${state.data.provinsi}, ${state.data.kabupaten}`;

  const authBasic =
    "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";

  const history = useHistory();
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
      setImageSleder(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getProducts = async (state) => {
    setLoading(true);
    var bodyFormdata = new FormData();
    bodyFormdata.append("google[kelurahan][name]", state.data.kelurahan);
    bodyFormdata.append("google[kecamatan][name]", state.data.kecamatan);
    bodyFormdata.append("google[kabupaten][name]", state.data.kabupaten);
    bodyFormdata.append("google[provinsi][name]", state.data.provinsi);
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
        setProduct(response.data.data.product_by_arround_you);
        setStore(response.data.data.shop_by_arround_you);
        setCategory(response.data.data.top_category);
        setImageCategory(
          response.data.data.support.base_url["product-category"].original
        );
        setImageProducts(response.data.data.support.base_url.product.medium);
        setImageStore(response.data.data.support.base_url.shop.medium);
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
    getSlider();
  }, []);

  React.useEffect(() => {
    if (state.type === START_FETCHING_ADRESS) {
      getProducts(state);
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
          centerPadding: "60px",
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
          slidesToShow: 1,
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
          centerPadding: "110px",
          slidesToShow: 2,
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
          {category.map((categ, index) => {
            return isLoading ? (
              <LoadingComponent />
            ) : (
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
        <Promos image={imageSlider} />
      </div>
      <div className="container p-0 list-product">
        <div className="title d-flex align-items-center py-3">
          <h5 className="m-0">Produk</h5>
        </div>
        <div className="row">
          {product.slice(0, seeAllProduct).map((product, index) => {
            return (
              <Products
                image={`${imageProducts}${product.photo}`}
                nameProduct={product.name}
                location="yogyakarta, condong catur"
                nameStore={product.shop_name}
                status={product.product_type}
                price={product.price}
                key={index}
                _id={product.id}
                qty={product.qty_order}
                ratting={product.rating_star}
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
          {store.slice(0, seeAllStore).map((store, index) => {
            return isLoading ? (
              <LoadingComponent />
            ) : (
              <CardStore
                name={store.name}
                address={store.address}
                id={store.id}
                key={index}
                image={`${imageStore}${store.logo}`}
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
