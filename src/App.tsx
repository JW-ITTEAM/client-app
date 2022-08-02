import React, { Component } from "react";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";
import Sidebar from "./pages/shared/Sidebar";

class App extends Component {
  state = {};

  render() {
    let navbarComponent = <Navbar />;
    let sidebarComponent = <Sidebar />;
    let footerComponent = <Footer />;
    return (
      <div className="container-scroller">
        {sidebarComponent}
        <div className="container-fluid page-body-wrapper">
          {navbarComponent}
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes />
            </div>
            {footerComponent}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
