import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animatios";
import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubcription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    AnimateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading title={"Testimonial"} subHeading={"My Projects"} />

      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      The idea is to make it easy for everyone to both share
                      their own knowledge and learn something new from others.
                      The goal of the web application is to create a place where
                      people can find and exchange information in a simple and
                      user-friendly manner.
                      <i className="fa fa-quote-right" />
                    </p>

                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>

                  <div className="client-info">
                    <img
                      src="img/testimonial/courseudem.png"
                      alt="Something went wrong !"
                    ></img>
                    <h4>CourseUdem</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      The aim is to make it easy for users to navigate the site,
                      find products that meet their needs, protect their
                      personal information, save time through efficient search
                      and filtering, and ensure accessibility from any device
                      <i className="fa fa-quote-right" />
                    </p>

                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>

                  <div className="client-info">
                    <img
                      src="img/testimonial/ecommerce.png"
                      alt="Something went wrong !"
                    ></img>
                    <h4>E-Commerce Store</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A dynamic website designed for managing CVs, which
                      includes a profile page featuring the actual CV for
                      professional presentation.
                      <i className="fa fa-quote-right" />
                    </p>

                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>

                  <div className="client-info">
                    <img
                      src="img/testimonial/cvsite.png"
                      alt="Something went wrong !"
                    ></img>
                    <h4>CVNavigator</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      An engaging portfolio website designed to exhibit the
                      profiles of multiple individuals simultaneously, offering
                      an interactive and visually appealing experience.
                      <i className="fa fa-quote-right" />
                    </p>

                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>

                  <div className="client-info">
                    <img
                      src="img/testimonial/portfoliowebsite.png"
                      alt="Something went wrong !"
                    ></img>
                    <h4>Portfolio-Website</h4>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src="img/testimonial/shape-bg.png" alt="Something went wrong !" />
      </div>
    </div>
  );
}
