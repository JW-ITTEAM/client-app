import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Spinner from "./pages/shared/Spinner";

export interface IAppRoutesProps {}

const OceanImport = lazy(() => import("./pages/shipments/oim/OceanImport"));
const OceanImportDetail = lazy(
  () => import("./pages/shipments/oim/OceanImportDetail")
);
const OceanExport = lazy(() => import("./pages/shipments/oex/OceanExport"));
const AirImport = lazy(() => import("./pages/shipments/aim/AirImport"));
const AirExport = lazy(() => import("./pages/shipments/aex/AirExport"));

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const BasicTable = lazy(() => import("./pages/tables/BasicTable"));
const Login = lazy(() => import("./pages/login/Login"));

export default class AppRoutes extends React.Component<IAppRoutesProps> {
  public render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/shipments/oim" component={OceanImport} />
          <Route path="/shipments/oim_detail/" component={OceanImportDetail} />
          <Route path="/shipments/oex" component={OceanExport} />
          <Route path="/shipments/aim" component={AirImport} />
          <Route path="/shipments/aex" component={AirExport} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/tables/basic-table" component={BasicTable} />
          <Route path="/login" component={Login} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}
