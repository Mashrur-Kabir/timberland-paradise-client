import React from "react";
import "./Intro.css";
import AOS from "aos";
import "aos/dist/aos.css";
import intro1 from '../../../assets/images/intro1.jpg';
import intro2 from '../../../assets/images/intro2.jpg';

const Intro = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="intro-section">
      <div className="intro-left-column">
        <div className="intro-content">
          <p className="intro-subtitle font-raleway" data-aos="fade-down">
            WHAT WE DO
          </p>
          <h1 className="intro-title font-syne" data-aos="fade-right">
            We help you realize your ideas quickly and efficiently
          </h1>
        </div>
        <div className="intro-image-left" data-aos="fade-up">
          <img
            src={intro1}
            alt="Modern Living Room"
            className="intro-image img1"
          />
        </div>
      </div>
      <div className="intro-right-column">
        <div className="intro-image-right" data-aos="fade-up" data-aos-delay="200">
          <img
            src={intro2}
            alt="Modern Dining Room"
            className="intro-image img2"
          />
        </div>
        <p className="intro-description font-raleway" data-aos="fade-left">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor
          incididunt.
        </p>
      </div>
    </section>
  );
};

export default Intro;
