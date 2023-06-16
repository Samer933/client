import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animatios";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubcription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div>
      <ScreenHeading title={"Testimonial"} subHeading={"My Projects"} />

      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel">
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      samer is a good person , and he always delivers ontime his
                      works.
                      <i className="fa fa-quote-right"/>
                    </p>
                   
                    <ul className="stars list-unstyled">
                      
                        <li>
                            <i className="fa fa-star"/>
                        </li>

                        <li>
                            <i className="fa fa-star"/>
                        </li>

                        <li>
                            <i className="fa fa-star"/>
                        </li>
                       
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                       
                        <li>
                            <i className="fa fa-star"/>
                        </li>

                    </ul>
                  </div>
                   
                   <div className="client-info">
                    
                   </div>


                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
