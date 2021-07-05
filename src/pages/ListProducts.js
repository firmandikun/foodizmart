import React from "react";
import { Products } from "../atom/products";
import { Breadcrumb } from "../components/Breadcrumb";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import icontFillter from "../../src/assets/fillter.png";
import axios from "axios";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import icontCenteng from "../../src/assets/centang.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

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
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product.small
  );
  const [page, setPage] = React.useState(8);
  const [drawel, setDrawel] = React.useState(false);
  const classes = useStyles();

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
    axios
      .post(
        "http://foodiadmin.otiza.com/apiv1/product/search-product",
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
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    console.log(category);

    fecthData({
      cari: seacrh,
      categoryId: categoryId,
    });
  }, []);

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
                data.reverse((a) => {
                  return a.price;
                });
                setFillterProducts(data);
                setDrawel(false);
              }}
            >
              <p className="mt-2">Termahal</p>
              <img src={icontCenteng} alt="" className="mt-2" width={20} />
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action d-flex justify-content-between "
              activeClassName="active"
              onClick={() => {
                let data = [...fillterProducts];
                data.reverse((a) => {
                  return a.rating_star;
                });
                setFillterProducts(data);
                setDrawel(false);
              }}
            >
              <p className="mt-2">Ratting</p>
              <img src={icontCenteng} alt="" className="mt-2" width={20} />
            </button>
          </div>
        </Drawer>
        <InfiniteScroll
          dataLength={fillterProducts.length}
          next={() => setPage(page + 4)}
          hasMore={true}
          style={{ display: "flex", flexWrap: "wrap" }}
          loader={<h4>Loading...</h4>}
        >
          {fillterProducts.slice(0, page).map((product, index) => {
            return (
              <Products
                image={`${imageProduct}${product.photo}`}
                nameProduct={product.name}
                location="yogyakarta, condong catur"
                nameStore={product.shop_name}
                status={product.product_type}
                price={product.price}
                key={index}
                _id={product.id}
              />
            );
          })}
        </InfiniteScroll>
      </div>
      <Footer />
    </div>
  );
};
