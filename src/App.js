import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/style.css";
import store from "./app/store";
import { Provider } from "react-redux";
import Routers from "./router";
import { MainApp } from "./MainApp";

// import useGeoLocation from "../hooks/useGeoLocation";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routers />
        <MainApp />
      </Provider>
    </div>
  );
}

export default App;
