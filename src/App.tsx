import { Component } from "react";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";
import Sidebar from "./pages/shared/Sidebar";

class App extends Component {
  state: any = {};

  render() {
    console.log(this.props);
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar /> : "";
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : "";
    let footerComponent = !this.state.isFullPageLayout ? <Footer /> : "";
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

  componentDidMount() {
    console.log("componentDidMount");
    this.onRouteChange();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  onRouteChange() {
    console.log("Route Changed");
    const body = document.querySelector("body");
  }
}

export default App;
