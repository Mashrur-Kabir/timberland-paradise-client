import { useEffect } from "react";
import { gsap } from "gsap";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // Ensure the gray overlay is fully visible at first
    gsap.set(".overlay", { opacity: 1 });

    // Smooth fade-out animation for the overlay
    gsap.to(".overlay", {
      opacity: 0, // Gradual fade-out
      duration: 1.5, // Smooth transition
      delay: 0.8, // Hold the dark gray for a moment before fading
      ease: "power2.out", // Cinematic ease-out effect
    });

    // Animate all image pieces smoothly
    gsap.to(".image-piece", {
      opacity: 1, // Gradually fade in
      scale: 1, // Zoom out smoothly
      x: 0,
      y: 0,
      duration: 1.4, // Smooth zoom-out effect
      delay: 0.7, // Syncs perfectly with overlay fade-out
      ease: "power2.inOut", // Natural motion
    });
  }, []);

  return (
    <div className="image-wrapper">
      {/* Dark Gray Overlay for Smooth Fade-In Effect */}
      <div className="overlay"></div>

      {/* Image Container */}
      <div className="image-container">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="image-piece"></div>
        ))}
      </div>
    </div>
  );
};

export default Home;
