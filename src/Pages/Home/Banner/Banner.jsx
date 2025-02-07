import { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./Banner.css";

// ✅ Import images from `src/assets/images/`
import banner1 from "../../../assets/images/home-banner.jpg";
import banner2 from "../../../assets/images/home-banner2.jpg";

const images = [banner1, banner2];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Reset the overlay and animation elements before each timeline starts
    gsap.set(".overlay", { opacity: 0 }); // Start with the overlay hidden
    gsap.set(".image-container", { scale: 1 });
    gsap.set(".image-piece", { opacity: 1, scale: 1.5 });
    
    const tl = gsap.timeline();

    tl.to(".image-piece", {
      scale: 1, // Zoom-out effect on each piece
      duration: 1.2,
      ease: "power2.inOut",
    })
    .to(".image-container", {
      scale: 1.1, // Slow zoom-in effect on container
      duration: 8,
      ease: "power1.inOut",
    })
    // Fade in the overlay (black) to cover the current image
    .to(".overlay", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    })
    // Swap to the next image once the overlay is fully opaque
    .call(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    })
    // Fade out the overlay to reveal the new image
    .to(".overlay", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    return () => tl.kill();
  }, [currentImage]);

  return (
    <div className="image-wrapper">
      {/* The overlay element used for the transition */}
      <div className="overlay"></div>
      
      {/* Image Container with 8 Pieces */}
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

export default Banner;
