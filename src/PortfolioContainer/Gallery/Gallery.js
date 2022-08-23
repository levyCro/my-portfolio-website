import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Gallery.css";

import shape from "../../../src/img/gallery/shape-bg.png";

export default function gallery(props) {
  // control the butten about me with smooth scroll animation
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: 0,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
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
      <ScreenHeading subHeading={"Some of my projects"} title={"Gallery"} />
      <section className="gallery-section fade-in" id={props.id || ""}>
        <div className="container">
          <div ClassName="row">
            <OwlCarousel
              className="owl-carousel"
              id="gallery-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="no connection"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="no connection"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="no connection"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="no connection"
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="no internet" />
      </div>
    </div>
  );
}
