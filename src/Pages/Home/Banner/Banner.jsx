import { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./Banner.css";
import PropTypes from 'prop-types';
import banner1 from "../../../assets/home-banner/home-banner.jpg";
import banner2 from "../../../assets/home-banner/home-banner2.jpg";


const images = [banner1, banner2];

const Banner = ({ animationCycle }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(animationCycle % images.length); // Ensure correct image switching

    const tl = gsap.timeline();

    tl.set(".overlay", { opacity: 0 });
    tl.set(".image-container", { scale: 1 });
    tl.set(".image-piece", { opacity: 1, scale: 1.5 });

    tl.to(".image-piece", { scale: 1, duration: 1.2, ease: "power2.inOut" })
      .to(".image-container", { scale: 1.2, duration: 10, ease: "power1.inOut" })
      .to(".overlay", { opacity: 1, duration: 0.5, ease: "power2.inOut" })
      .call(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      })
      .to(".overlay", { opacity: 0, duration: 1, ease: "power2.inOut" });

    return () => tl.kill();
  }, [animationCycle]); // Ensures it updates when animationCycle changes

  return (
    <div className="image-wrapper">
      <div className="overlay"></div>
      <div className="image-container">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="image-piece"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

Banner.propTypes = {
  animationCycle: PropTypes.number.isRequired,
};

export default Banner;
