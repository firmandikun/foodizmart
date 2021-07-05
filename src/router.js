import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ListProducts } from "./pages/ListProducts";
import DetailStore from "./pages/DetailStore";
import DetailProduct from "./pages/DetailProduct";
import { Provider, useDispatch, useSelector } from "react-redux";

import useGeoLocation from "./components/hooks/useGeoLocation";
import { fecthDataAddress } from "./features/locations/action";

const Routers = () => {
  const dispatch = useDispatch();
  const location = useGeoLocation();

  React.useEffect(() => {
    // console.log(state);
    if (location.loaded) {
      
      dispatch(fecthDataAddress(location));
    }
  }, [location, dispatch]);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" exact component={DetailProduct} />
          <Route path="/products" exact component={ListProducts} />
          <Route path="/detailStore/:shop_id" exact component={DetailStore} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;