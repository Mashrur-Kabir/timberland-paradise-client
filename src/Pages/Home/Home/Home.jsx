import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import banner1 from "../../../assets/images/home-banner/home-banner.jpg";
import banner2 from "../../../assets/images/home-banner/home-banner2.jpg";
import "./Home.css";
import Intro from './../Intro/Intro';
import StatsSection from './../StatsSection/StatsSection';
import Promo from './../Promo/Promo';
import OurService from './../OurService/OurService';
import TagLine from './../TagLine/TagLine';
import Apartments from './../Apartments/Apartments';
import Team from './../Team/Team';
import OurPartners from './../OurPartners/OurPartners';
import AskUs from './../AskUs/AskUs';

const texts = [
  "Minimalist designs for luxurious standards",
  "Timeless elegance for your modern spaces",
];
const subtexts = [
  "Sophisticated craftsmanship for modern living. Grab the best value products for your money",
  "Designs that blend tradition with innovation. We design every project as a one-off",
];

const Home = () => {
  // Animation cycle (updates every 10 seconds)
  const [animationCycle, setAnimationCycle] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationCycle((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Banner state
  const [currentImage, setCurrentImage] = useState(0);
  const images = [banner1, banner2];

  // Text refs
  const textRef = useRef(null);
  const textContainerRef = useRef(null);
  const subTextRef = useRef(null);

  // Banner animation
  useEffect(() => {
    setCurrentImage(animationCycle % images.length);
    const tl = gsap.timeline();
  
    // Set up banner image styles and transition to next image
    tl.set(".overlay", { backgroundColor: "black", opacity: 0 });
    tl.set(".image-container", { scale: 1 });
    tl.set(".image-piece", { opacity: 1, scale: 1.5 });
  
    // Animate image pieces (from 1.5 scale to 1) immediately
    tl.to(".image-piece", { scale: 1, duration: 1.2, ease: "power2.inOut" });
  
    // Run container scaling concurrently over the full cycle
    tl.to(".image-container", { scale: 1.2, duration: 10, ease: "power1.inOut" });
  
    // At 7 seconds into the cycle, fade in the black overlay over 1.5 sec
    tl.to(".overlay", { opacity: 1, duration: 1.5, ease: "power2.inOut" }, 8.5)
      // Once overlay is fully opaque, update the image
      .call(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      })
      // Fade out the overlay over the remaining 1.5 sec (ending at 10 sec)
      .to(".overlay", { opacity: 0, duration: 1.5, ease: "power2.inOut" });
  
    return () => tl.kill();
  }, [animationCycle, images]);

  // Text animation (merging TextAnimations.jsx functionality)
  useEffect(() => {
    if (!textContainerRef.current || !textRef.current || !subTextRef.current) return;

    // Set initial positions
    gsap.set(textContainerRef.current, { opacity: 1, y: 0 });
    gsap.set(subTextRef.current, { opacity: 0, x: 50 });

    const letters = textRef.current.querySelectorAll(".letter");
    const tl = gsap.timeline();

    tl.set(letters, { opacity: 0, y: 12 })
      .to(letters, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: "back.out(0.1)",
      }, "<")
      .to({}, { duration: 7 }) // keep text visible
      .to(letters, {
        opacity: 0,
        y: 12,
        duration: 0.5,
        stagger: 0.02,
        ease: "power2.inOut",
      });

    gsap.to(subTextRef.current, {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: "power2.out",
    });

    const timer = setTimeout(() => {
      gsap.to(subTextRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power2.inOut",
      });
    }, 9000);

    return () => {
      tl.kill();
      clearTimeout(timer);
    };
  }, [animationCycle]);

  return (
    <div>
      <div className="home-wrapper">
        {/* Banner Background */}
        <div className="overlay"></div>
        <div className="image-container">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="image-piece"
              style={{ backgroundImage: `url(${images[currentImage]})` }}
            ></div>
          ))}
        </div>

        {/* Text Overlay */}
        <div className="home-text-overlay">
          <div className="home-text-left" ref={textContainerRef}>
            <h1 className="animated-text font-syne">
              <span className="text-wrapper" ref={textRef}>
                {texts[animationCycle % texts.length]
                  .split(" ")
                  .map((word, wordIndex) => (
                    <span key={wordIndex} className="word">
                      {word.split("").map((char, index) => (
                        <span key={index} className="letter">
                          {char}
                        </span>
                      ))}
                      <span style={{ marginRight: "5px" }}></span>
                    </span>
                  ))}
              </span>
            </h1>
          </div>
          <div className="home-text-right" ref={subTextRef}>
            <h2 className="animated-subtext font-ysab">
              {subtexts[animationCycle % subtexts.length]}
            </h2>
          </div>
        </div>
      </div>
      <Intro></Intro>
      <StatsSection></StatsSection>
      <Promo></Promo>
      <OurService></OurService>
      <TagLine></TagLine>
      <Apartments></Apartments>
      <Team></Team>
      <OurPartners></OurPartners>
      <AskUs></AskUs>

    </div>
  );
};

export default Home;