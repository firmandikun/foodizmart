import React from "react";
import { Products } from "../atom/products";
import { Breadcrumb } from "../components/Breadcrumb";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import icontFillter from "../../src/assets/fillter.png";
import axios from "axios";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { LoadingComponent } from "../atom/loading";
import { haversineDistance } from "../atom/haversineDistance/haversineDistance";
import { useSelector } from "react-redux";
import { useRef } from "react";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "white",
  },
});

export const ListProducts = (props) => {
  const [seacrh, setSeacrh] = React.useState(
    props.location.state !== undefined ? props.location.state.cari : ""
  );
  const [fillterProducts, setFillterProducts] = React.useState([]);
  const [categoryId] = React.useState(
    props.location.state !== undefined ? props.location.state.categoryId : ""
  );
  const [category] = React.useState(
    JSON.parse(localStorage.getItem("dasboard")).category
  );
  const [imageProduct] = React.useState(
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product
      .original
  );
  const [drawel, setDrawel] = React.useState(false);
  const classes = useStyles();
  const [keywordSearch] = React.useState(
    props.location.state !== undefined
      ? props.location.state.cari
      : "Cari Produk Pilihanmu"
  );

  const [hasMore, setHasMore] = React.useState(true);

  const [isloading, setLoading] = React.useState(false);
  const state = useSelector((state) => state.address);
  const [page, setPage] = React.useState(8);

  const toggleDrawer = (open) => (event) => {
    setDrawel(open);
  };

  const executeScroll = () => {
    // ref.current.scrollIntoView({ block: "end", behavior: "smooth" });
    console.log("test");
  };

  const authBasic =
    "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";
  const fecthData = (params) => {
    setLoading(true);
    var bodyFormdata = new FormData();
    bodyFormdata.append("search_type", "product");
    bodyFormdata.append("search_key", params.cari);
    bodyFormdata.append("filter[product_categor_id]", params.categoryId);
    // bodyFormdata.append("pagination", page);

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
        if (res.data.status === "success") {
          let filterProduk = [...res.data.data.product_result];

          let currentLocation = state.data.cordinate;

          filterProduk.map((val) => {
            var nearby_m = haversineDistance(currentLocation, {
              latitude: val.shop_latitude,
              longitude: val.shop_longitude,
            });
            var nearby_km = nearby_m / 1000;
            val.distance = nearby_km.toFixed(1);
            return val;
          });
          setFillterProducts(filterProduk);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fecthMoreData = (params) => {
    var bodyFormdata = new FormData();
    bodyFormdata.append("search_type", "product");
    bodyFormdata.append("search_key", params.cari);
    bodyFormdata.append("filter[product_categor_id]", params.categoryId);
    // bodyFormdata.append("pagination", page + 1);

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
        if (res.data.status === "success") {
          setHasMore(false);
          if (res.data.data.product_result.length > 0) {
            let filterProduk = [...res.data.data.product_result];

            let currentLocation = state.data.cordinate;

            filterProduk.map((val) => {
              var nearby_m = haversineDistance(currentLocation, {
                latitude: val.shop_latitude,
                longitude: val.shop_longitude,
              });
              var nearby_km = nearby_m / 1000;
              val.distance = nearby_km.toFixed(1);
              return val;
            });
            setTimeout(() => {
              setFillterProducts(fillterProducts.concat(filterProduk));
            }, 1500);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    fecthData({
      cari: seacrh,
      categoryId: categoryId,
    });
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header
        onChange={(e) => setSeacrh(e.target.value)}
        onPress={() =>
          fecthData({
            cari: seacrh,
            categoryId: categoryId,
          })
        }
        handleSubmit={handleSubmit}
        search={keywordSearch}
      />
      <Breadcrumb name="List Produk" />
      <div className="container  list-product">
        <div className="title d-flex align-items-center py-3">
          <h4 className="m-0">Pick's Today</h4>
          <div className="m-0 text-center ml-auto">
            <button
              href=""
              onClick={toggleDrawer(true)}
              className="btn text-muted   bg-white mr-3"
            >
              <img
                src={icontFillter}
                alt=""
                style={{ width: 16, marginRight: 5 }}
              />
              fillter
            </button>
          </div>
        </div>
        <Drawer
          open={drawel}
          anchor={"right"}
          onClose={toggleDrawer(false)}
          classes={{ paper: classes.paper }}
        >
          <div class="list-group" style={{ width: 350 }}>
            <button
              type="button"
              className="list-group-item border-0 rounded-0 font-weight-bold "
              style={{ backgroundColor: "#f52d56", color: "white" }}
              aria-current="true"
            >
              Fillter Products
            </button>

            {category.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    fecthData({
                      cari: seacrh,
                      categoryId: item.id,
                    });
                    setDrawel(false);
                  }}
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          {/* sort */}
          <div class="list-group" style={{ width: 350 }}>
            <button
              type="button"
              className="list-group-item border-0 rounded-0 font-weight-bold "
              style={{ backgroundColor: "#f52d56", color: "white" }}
              aria-current="true"
            >
              Sort Products
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => {
                let data = [...fillterProducts];
                data.sort((a, b) => {
                  return a.price - b.price;
                });
                setFillterProducts(data);
                setDrawel(false);
              }}
            >
              Harga Termurah
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action d-flex justify-content-between "
              activeClassName="active"
              onClick={() => {
                let data = [...fillterProducts];
                data.sort((a, b) => {
                  return b.price - a.price;
                });
                setFillterProducts(data);
                setDrawel(false);
              }}
            >
              Harga Termahal
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action d-flex justify-content-between "
              activeClassName="active"
              onClick={() => {
                let data = [...fillterProducts];
                data.sort((a, b) => {
                  return b.rating_star - a.rating_star;
                });
                setFillterProducts(data);
                setDrawel(false);
              }}
            >
              Ratting
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action d-flex justify-content-between "
              activeClassName="active"
              onClick={() => {
                let data = [...fillterProducts];
                data.sort((a, b) => {
                  return b.qty_order - a.qty_order;
                });
                setFillterProducts(data);
                setDrawel(false);
              }}
            >
              Order Terbanyak
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action d-flex justify-content-between "
              activeClassName="active"
              onClick={() => {
                let data = [...fillterProducts];
                data.sort((a, b) => {
                  return b.distance - a.distance;
                });
                setFillterProducts(data);
                setDrawel(false);
              }}
            >
              Terdekat
            </button>
          </div>
        </Drawer>

        <div className="row listProducts ">
          {isloading && (
            <div className="d-flex">
              <LoadingComponent />
              <LoadingComponent />
              <LoadingComponent />
              <LoadingComponent />
            </div>
          )}

          {fillterProducts.slice(0, page).map((product, index) => {
            return isloading === true ? (
              <LoadingComponent />
            ) : (
              <Products
                image={`${imageProduct}${product.photo}`}
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
        </div>
        <div className="row pr-4 mb-2">
          {page === fillterProducts.length ? (
            <a
              className="btn btn-outline-danger disabled ml-auto"
              onClick={() => setPage(page + 4)}
            >
              {page === fillterProducts.length ? "semua produk" : "lainya"}
            </a>
          ) : (
            <a
              className="btn btn-outline-danger  ml-auto"
              onClick={() => setPage(page + 4)}
            >
              {page === fillterProducts.length ? "semua produk" : "lainya"}
            </a>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
