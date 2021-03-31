import { Route, Router, Switch } from "react-router-dom";
import ProductView from "../components/HomePageComponent";
import history from "../history/history";
// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={ProductView} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
