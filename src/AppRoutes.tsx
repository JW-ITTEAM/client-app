import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Spinner from "./pages/shared/Spinner";

export interface IAppRoutesProps {}

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const BasicTable = lazy(() => import("./pages/tables/BasicTable"));

export default class AppRoutes extends React.Component<IAppRoutesProps> {
  public render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/tables/basic-table" component={BasicTable} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}
