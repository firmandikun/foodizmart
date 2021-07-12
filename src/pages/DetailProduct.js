import React from "react";
import { CardDetail } from "../atom/cardDetail";
import { Breadcrumb } from "../components/Breadcrumb";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Otherproducts } from "../components/otherproducts";
import { SimiliarProducts } from "../components/similarProducts";
import { useParams, withRouter } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory} from "react-router";
import { Products } from "../atom/products";

const DetailProduct = (props) => {
  const { id } = useParams();
  const [detail, setDetail] = React.useState({});
  const [otherProduct, setOtherProducts] = React.useState([])
  const [similarProducts, setSimilarProducts] = React.useState([])
  const state = useSelector((state) => state.address);
  const [keywordSearch] = React.useState(  "search product..." )
  const [order, setOrder ] = React.useState(1)
  const [harga, setHarga] = React.useState()
  const [imageProduct] = React.useState(
    JSON.parse(localStorage.getItem("dasboard")).support.base_url.product.medium
  );
   const [seacrh, setSeacrh] = React.useState();
  

  const history = useHistory();

  const authBasic =
    "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";

  const detailProducts = () => {
    var bodyFormdata = new FormData();
        bodyFormdata.append("product_id", id);
        axios
          .post(
            `https://foodi.otiza.com/apiv1/product/product-detail-for-transaction` ,
            bodyFormdata,
            {
              headers: {
                Authorization: authBasic,
              },
            }
          )
          .then((res) => {
            if ((res.data.status = "success")) {
              setDetail(res.data.data.product);
              setOtherProducts(res.data.data.other_product)
              setHarga(res.data.data.product.price)
            }
          })
          .catch((err) => {
            console.log(err);
          });
     }


  const getSimiliarProduct = () => {
    var bodyFormdata = new FormData();
    bodyFormdata.append("search_type", "product");
        axios
          .post(
            `https://foodi.otiza.com/apiv1/product/search-product` ,
          bodyFormdata,
            {
              headers: {
                Authorization: authBasic,
              },
            }
          )
          .then((res) => {
              setSimilarProducts(res.data.data.product_result);
          })
          .catch((err) => {
            console.log(err);
          });
  }

  React.useEffect(() => {
    detailProducts()
    getSimiliarProduct()
  }, []);

   const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePlus = () => { 
      setOrder(() => order + 1 )
      setHarga(() => ( order + 1 ) * harga)
  }
  const handleMinus = () => { 
      setOrder(() => order - 1 )
      // setHarga(() =>  order / harga)
  }

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
      <Breadcrumb />
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-lg-6 col-12 p-0">
            <CardDetail />
          </div>
          <div className="col-lg-6 col-12 ">
            <div className="p-4 bg-white rounded shadow-sm">
              <div className="pt-0">
                <h2 className="font-weight-bold"  > {detail.name} </h2>
                <p
                  className="font-weight-light text-dark text-left
                  "
                  style={{ lineHeight: 3 }}
                >
                  <div className="m-0">
                    Harga :<b className="h6 text-dark m-0 "> {harga} </b>
                  </div>
                  <div className="m-0">
                    status : <b className="h6 text-dark m-0"> {detail.status_active} </b>
                  </div>
                  <div className="m-0">
                    Kota :
                    <b className="h6 text-dark m-0"> {detail.delivery_area} </b>
                  </div>
                </p>
                <div className="d-flex" >
                <button className="btn btn-danger mx-2" onClick={handlePlus} > +  </button>
                <p> {order} </p>
                <button className="btn btn-success mx-2" onClick={handleMinus } > -  </button>
                 </div>
              </div>
              <div className="details">
                <div className="pt-3 bg-white">
                  <div className="d-flex align-items-center">
                    <div
                      className="btn-group osahan-radio btn-group-toggle"
                      data-toggle="buttons"
                    ></div>
                  </div>
                </div>
                <div className="pt-3">
                  <p className="font-weight-bold mb-2">Product Details</p>
                  <p className="text-muted small text-justify mb-0">
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
          <a
            class="ml-auto btn btn-outline-success btn-sm"
            href=""
          >
            See more
          </a>
        </div>
        <div className="row">
          {
         similarProducts.slice(0, 8).map((item) => {
           return <Products price={item.price} image={`${imageProduct}${item.photo}`} nameStore={item.shop_name} location={item.shop_latitude} nameProduct={item.name} />
         })
       }
        </div>
      </div>
      <Otherproducts title="Produk Lainya" product={otherProduct} />
      <Footer />
    </>
  );
};

export default withRouter(DetailProduct);
