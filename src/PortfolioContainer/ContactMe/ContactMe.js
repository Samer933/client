import React, { useState } from "react";
import Typical from "react-typical";

import "./ContactMe.css";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animatios";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubcription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Keep the Lines Open"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {""}
            <Typical loop={Infinity} steps={["Get in Contact 📧", 1000]} />
          </h2>

          <a href="https://www.facebook.com/samer.salkini93">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/samer-salkini-835b08166/">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://www.instagram.com/samer_salkini/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/Samer933">
            <i className="fa fa-github"></i>
          </a>
        </div>

        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="Something Went Wrong !!" />
          </div>
          <form>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" />
            <label htmlFor="email">Email</label>
            <input type="email" />
            <label htmlFor="message">Message</label>
            <textarea type="text" />
            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
