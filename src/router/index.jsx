import { Route, Router, Switch } from "react-router-dom";
import history from "../history/history";
// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
