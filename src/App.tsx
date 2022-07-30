import React, { Component } from "react";
import "./App.scss";
import Navbar from "./pages/shared/Navbar";
import Sidebar from "./pages/shared/Sidebar";

class App extends Component {
  state = {};

  render() {
    let navbarComponent = <Navbar />;
    let sidebarComponent = <Sidebar />;
    return (
      <div className="container-scroller">
        {sidebarComponent}
        <div className="container-fluid page-body-wrapper">
          {navbarComponent}
          <div className="main-panel">
            <div className="content-warpper">AppRoutes</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
