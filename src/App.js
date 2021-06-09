import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DetailProduct } from "./pages/DetailProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={DetailProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
