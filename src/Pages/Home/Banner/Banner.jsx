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
    // Reset container scale
    gsap.set(".image-container", { scale: 1 });
    
    // Fade out the overlay
    gsap.to(".overlay", {
      opacity: 0,
      duration: 1,
      delay: 0.7,
      ease: "power2.out",
    });
  
    // Reset each image piece before the animation starts
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
    .to(".image-piece", {
      opacity: 0, // Fade out pieces before image swap
      duration: 0.25,
      onComplete: () => {
        setTimeout(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }, 500);
      },
    })
    .to(".image-piece", {
      opacity: 0, // Fade in new image (set to 1 for fade-in)
      duration: 1,
    });
  
    return () => tl.kill();
  }, [currentImage]);

  return (
    <div className="image-wrapper">
      <div className="overlay"></div>

      {/* ✅ Image Container with 8 Pieces */}
      <div className="image-container">
        {[...Array(8)].map((_, index) => (
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
