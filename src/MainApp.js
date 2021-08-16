import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { Terms } from "./pages/terms";
import { AboutPage } from "./pages/AboutPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ContacPage } from "./pages/ContacPage";
import Faq from "./pages/Faq";
// import { Contac } from "./pages/Contac";
import { MerchantPage } from "./pages/MerchantPage";
import { Contac } from "./pages/Contac";

export const MainApp = () => {
  //   const { url } = useRouteMatch();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/trems" component={Terms} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={Contac} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/contact_investor" component={ContacPage} />
          <Route exact path="/join_merchant" component={MerchantPage} />
        </Switch>
      </Router>
    </div>
  );
};
