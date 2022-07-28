import React, { Component } from "react";
import Navbar from "./pages/shared/Navbar";
import "./App.scss";

class App extends Component {
  state = {};

  render(): React.ReactNode {
    let navbarComponent = <Navbar />;
    return (
      <div className="container-scroller">
        SidebarComponent
        <div className="container-fluid page-body-wrapper">
          {navbarComponent}
        </div>
        <div className="main-panel">
          <div className="content-warpper">AppRoutes</div>
        </div>
      </div>
    );
  }

  onRouteChange() {
    console.log("ROUTE CHANGED");
    // const { i18n } = this.props;
    const body = document.querySelector("body");
  }
}

export default App;
