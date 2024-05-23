import React, { useEffect } from "react";
import { FacebookOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Footer = (props) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer" className="footer">
      <>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>About Us</h2>
                  <p>
                    Shri Rajarajeshvarya Ashtakam was composed by Adi
                    Shankaracharya. The goddesses of Hinduism are represented as
                    the motherhood of God. She is the transformative power
                    behind the sustaining power of God.
                  </p>
                  <ul className="social" style={{ paddingLeft: "0px" }}>
                    <li>
                      <FacebookOutlined
                        onClick={() =>
                          window
                            .open(
                              "https://www.facebook.com/people/%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80-%E0%A4%AE%E0%A4%BE%E0%A4%A4%E0%A4%BE-%E0%A4%AE%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%BF%E0%A4%B0/100082052265630/",
                              "_blank"
                            )
                            .focus()
                        }
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                          fill: "#ffffff",
                          cursor: "pointer",
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h2>Quick Links</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul style={{ paddingLeft: "0px" }}>
                        <li>
                          <Link to="/">
                            Home{" "}
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/about">
                            {" "}
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            ></i>
                            About Us{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/events">
                            {" "}
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            ></i>
                            Events{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/services">
                            {" "}
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            ></i>
                            Services{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact">
                            {" "}
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            ></i>
                            Contact Us{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Puja Timings</h2>
                  <ul className="time-sidual" style={{ paddingLeft: "0px" }}>
                    <li className="day">06:00 am To 06:30 pm</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Location</h2>

                  <div class="google-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943811.1821030593!2d76.56388083239818!3d17.908528229799284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfaaeb9166868d%3A0xdc9d165224e7ab54!2sRaj%20Rajeshwari%20Mandir!5e0!3m2!1sen!2sin!4v1710009799632!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <p>95W8+RM5, Mallapur, Ta, Udgir Rd, Maharashtra 413512</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content">
                  <p>
                    © Copyright {currentYear} | All Rights Reserved by{" "}
                    <a href="https://www.rajarajeshwardevi.com" target="_blank">
                      rajarajeshwardevi.com
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </footer>
  );
};

export default Footer;
