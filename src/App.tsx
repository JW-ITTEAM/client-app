import { Component } from "react";
import { Oval } from "react-loader-spinner";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";
import Sidebar from "./pages/shared/Sidebar";
import "./assets/styles/css/nprogress.css";
import nProgress from "nprogress";

class App extends Component<RouteComponentProps> {
  state: any = {};

  render() {
    console.log(this.props.location);
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar /> : "";
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : "";
    let footerComponent = !this.state.isFullPageLayout ? <Footer /> : "";

    const loader_css: React.CSSProperties = {
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1031,
      background: "rgba(255,255,255,0.7)",
      animation: "bg 1s",
    };

    return (
      <div>
        {this.state.isLoading ? (
          <div style={loader_css}>
            <Oval
              height={50}
              width={50}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={4}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          <></>
        )}
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
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.onRouteChanged();
  }

  async componentDidUpdate(prevProps: any) {
    console.log("componentDidUpdate");
    if (this.props.location !== prevProps.location) {
      this.setState({ isLoading: true });
      nProgress.inc();
      await setTimeout(() => {
        this.onRouteChanged();
      }, 500);
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
    nProgress.done();
    this.setState({ isLoading: false });
  }
}

export default withRouter(App);
