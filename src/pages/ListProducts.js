import React from "react";
import { Products } from "../atom/products";
import { Breadcrumb } from "../components/Breadcrumb";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import icontFillter from "../../src/assets/fillter.png";
import axios from "axios";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { LoadingComponent } from "../atom/loading";

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
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product.medium
  );
  const [drawel, setDrawel] = React.useState(false);
  const classes = useStyles();
  const [keywordSearch] = React.useState(
    props.location.state !== undefined
      ? props.location.state.cari
      : "search prodcuts..."
  );
  const [isloading, setLoading] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setDrawel(open);
  };
  const state = useSelector((state) => state.address);

  const authBasic =
    "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";
  const fecthData = (params) => {
    var bodyFormdata = new FormData();
    bodyFormdata.append("search_type", "product");
    bodyFormdata.append("search_key", params.cari);
    bodyFormdata.append("filter[product_categor_id]", params.categoryId);
    setLoading(true);
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
          setFillterProducts(res.data.data.product_result);
          setLoading(false);
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
  }, []);

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
        address={state.data.address}
        handleSubmit={handleSubmit}
        search={keywordSearch}
      />
      <Breadcrumb />
      <div className="container p-0 list-product">
        <div className="title d-flex align-items-center py-3">
          <h4 className="m-0">Pick's Today</h4>
          <div className="m-0 text-center ml-auto">
            <button
              href=""
              onClick={toggleDrawer(true)}
              className="btn text-muted   bg-white mr-2"
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
          </div>
        </Drawer>

        <div className="row">
          {fillterProducts.map((product, index) => {
            return isloading === true ? (
              LoadingComponent
            ) : (
              <Products
                image={`${imageProduct}${product.photo}`}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};
