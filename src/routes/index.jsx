import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Registration from "../pages/Registration";
function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
