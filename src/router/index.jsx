import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import index from "../components/HomePageComponent/index";
import history from "../history/history";
// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={index} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
