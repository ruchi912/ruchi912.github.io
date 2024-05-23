import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import "./Contact.scss";
import { Link } from "react-router-dom";
const Contact = (props) => {
  const handleContacform = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return (
    <div>
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>Contact Us</h2>
                <ul className="bread-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <ChevronRightIcon />
                  </li>
                  <li className="active">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                  <div id="myMap">
                    {" "}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5906017.4333756!2d77.166734!3d18.39701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfaaeb9166868d%3A0xdc9d165224e7ab54!2sRaj%20Rajeshwari%20Mandir!5e1!3m2!1sen!2sin!4v1713695007213!5m2!1sen!2sin"
                      width="600"
                      height="480"
                      className="map-contact"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Contact With Us</h2>
                  <p>
                    If you have any questions please fell free to contact with
                    us.
                  </p>
                  {/* <form className="form" method="post" action="mail/mail.php"> */}
                  <form
                    className="form"
                    onClick={(event) => handleContacform(event)}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required=""
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required=""
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required=""
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            required=""
                            autoComplete="off"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn contact-feedback">
                          <button className="btn" type="submit">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="row">
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <PhoneIcon style={{ width: "2em", height: "2em" }} />
                  <div className="content">
                    <h3>+(000) 1234 56789</h3>
                    <p>info@rajarajeshwardevi.com</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <LocationOnIcon style={{ width: "2em", height: "2em" }} />
                  <div className="content">
                    <h3>Mallapur, Ta, Udgir Road</h3>
                    <p>Maharashtra 413512</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <AccessTimeFilledIcon
                    style={{ width: "2em", height: "2em" }}
                  />
                  <div className="content">
                    <h3>06:00 am - 06:30 pm</h3>
                    <p>All Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
