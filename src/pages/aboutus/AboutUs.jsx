import React from "react";
import "./AboutUs.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Link } from "react-router-dom";
const AboutUs = (props) => {
  return (
    <>
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
        <div className="container">
          <div className="accordion_tab">
            <div className="accordion_tab_wrapper">
              <input
                type="radio"
                id="one"
                name="accordion_group"
                className="radio"
                checked
              />
              <input
                type="radio"
                id="two"
                name="accordion_group"
                className="radio"
              />
              <input
                type="radio"
                id="three"
                name="accordion_group"
                className="radio"
              />
              <input
                type="radio"
                id="four"
                name="accordion_group"
                className="radio"
              />
              <input
                type="radio"
                id="five"
                name="accordion_group"
                className="radio"
              />
              <div className="accordion_tab_group" style={{ width: "520px" }}>
                <label for="one" className="tab" id="one-tab">
                  About Us
                </label>
                <label for="two" className="tab" id="two-tab">
                  Deities of the Mandir
                </label>
                <label for="three" className="tab" id="three-tab">
                  Deities Layout
                </label>
                <label for="four" className="tab" id="four-tab">
                  Priests
                </label>
                <label for="five" className="tab" id="five-tab">
                  Trustees & Executive Board
                </label>
              </div>
              <div className="accordion_tab_contents">
                <div className="accordion_tab_content" id="one-tab-content">
                  <h2 className="accordion_tab_title">About Us</h2>
                  <p className="accordion_tab_description">
                    The HyperText Markup Language or HTML is the standard markup
                    language for documents designed to be displayed in a
                    webbrowser. It is often assisted by technologies such as
                    Cascading Style Sheets and scripting languages such as
                    JavaScript.
                  </p>
                </div>
                <div className="accordion_tab_content" id="two-tab-content">
                  <h2 className="accordion_tab_title">Deities of Mandir</h2>
                  <p className="accordion_tab_description">
                    Cascading Style Sheets is a style sheet language used for
                    describing the presentation of a document written in a
                    markuplanguage such as HTML or XML. CSS is a cornerstone
                    technology of the World Wide Web, alongside HTML and
                    JavaScript.
                  </p>
                </div>
                <div className="accordion_tab_content" id="three-tab-content">
                  <h2 className="accordion_tab_title">Deities of Layout</h2>
                  <p className="accordion_tab_description">
                    JavaScript, often abbreviated as JS, is a programming
                    language that is one of the core technologies of the World
                    WideWeb, alongside HTML and CSS. As of 2022, 98% of websites
                    use JavaScript on the client side for webpage behavior,
                    oftenincorporating third-party libraries
                  </p>
                </div>
                <div className="accordion_tab_content" id="four-tab-content">
                  <h2 className="accordion_tab_title">Priesta</h2>
                  <p className="accordion_tab_description">
                    What is Framesworks? In computer programming, a software
                    framework is an abstraction in which software, providing
                    generic functionality, canbe selectively changed by
                    additional user-written code, thus providing
                    application-specific software
                  </p>
                </div>
                <div className="accordion_tab_content" id="five-tab-content">
                  <h2 className="accordion_tab_title">
                    Trustees & Executive Board
                  </h2>
                  <p className="accordion_tab_description">
                    What is Framesworks? In computer programming, a software
                    framework is an abstraction in which software, providing
                    generic functionality, canbe selectively changed by
                    additional user-written code, thus providing
                    application-specific software
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
