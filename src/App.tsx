import { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";
import Sidebar from "./pages/shared/Sidebar";

class App extends Component<RouteComponentProps> {
  state: any = {};

  render() {
    console.log(this.props.location);
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
    this.onRouteChanged();
  }

  componentDidUpdate(prevProps: any) {
    console.log("componentDidUpdate");
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("Route Changed");
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ["/login"];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({ isFullPageLayout: true });
        document
          .querySelector(".page-body-wrapper")
          ?.classList.add("full-page-wrapper");
      } else {
        this.setState({
          isFullPageLayout: false,
        });
        document
          .querySelector(".page-body-wrapper")
          ?.classList.remove("full-page-wrapper");
      }
    }
  }
}

export default withRouter(App);
