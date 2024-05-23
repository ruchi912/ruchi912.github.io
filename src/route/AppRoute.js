import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import AboutUs from "../pages/aboutus/AboutUs";
import PujaEvents from "../pages/pujaevents/PujaEvents";
import Services from "../pages/services/Services";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Authenticated from "../authentication/Authenticated";
import { Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { oktaConfig } from "../authentication/oktaConfig";
const oktaAuth = new OktaAuth(oktaConfig);
function AppRoute(props) {
  const [isScroll, setIsScroll] = useState(false);
  const navigateTo = useNavigate();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigateTo(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <div className="main-div">
        <button
          onClick={() => topFunction()}
          className="moveToTop"
          id="myBtn"
          style={isScroll ? { display: "block" } : { display: "none" }}
          title="Go to top"
        >
          <ArrowUpwardIcon style={{ width: "1em", height: "1em" }} />
        </button>
        <div>
          <Header />
        </div>
        <div style={{ minHeight: "400px" }}>
          <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="*" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<Authenticated />}>
                <Route path="" element={<AboutUs />} />
              </Route>
              {/* <Route path="/about" element={<AboutUs />} /> */}
              <Route path="/events" element={<PujaEvents />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sign/callback" Component={LoginCallback} />
            </Routes>
          </Security>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AppRoute;
