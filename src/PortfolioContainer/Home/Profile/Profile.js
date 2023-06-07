//rsf
import React from "react";
import Typical from "react-typical";
import  "./Profile.css";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details-name">
          <div className="cloz">
            <div className="cloz-icon">
            <a href="https://www.facebook.com/samer.salkini93">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/samer-salkini-835b08166/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://www.instagram.com/samer_salkini/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://twitter.com/samer_salk54291">
              <i className="fa fa-twitter"></i>
            </a>
                </div>   
          </div>

          <div className="proflie-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlighted-text">Samer</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev ",
                    1000,
                    "Full Stak Developer 👨‍💻",
                    1000,
                    "MERN Stack Dev 🧑‍💻",
                    1000,
                    "Cross Platform Dev 🗺️",
                    1000,
                    "React/React Native Dev 📱",
                    1000,
                  ]}
                />
              </h1>

              <span className="profile-role-tagline">
              Creating full-stack applications is well within reach.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me {""}
            </button>
            <a href="CV.pdf" download="Samer's Resume">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">


            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
