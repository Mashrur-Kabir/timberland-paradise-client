import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import Banner from "./../Banner/Banner";
import "./Home.css";

const texts = [
  "Minimalist designs for luxurious standards",
  "Timeless aesthetics for modern spaces",
];

// ✅ Customize these values
const subtextVisibleDuration = 8300; // How long the subtext stays visible (in ms)
const subtextHiddenDuration = 1500; // How long before it appears again (in ms)

const Home = () => {
  const textRef = useRef(null);
  const textContainerRef = useRef(null);
  const subTextRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isSubtextVisible, setIsSubtextVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true, delay: 800 });
  }, []);

  useEffect(() => {
    const letters = textRef.current?.querySelectorAll(".letter");

    if (textContainerRef.current && letters) {
      const tl = gsap.timeline();

      // Set initial state
      tl.set(textContainerRef.current, { opacity: 0, y: 20 });
      tl.set(letters, { opacity: 0, y: 12 });

      // Animate the text container
      tl.to(textContainerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      // Animate the letters concurrently
      tl.to(
        letters,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "back.out(0.1)",
        },
        "<"
      );

      // Hold the text for a while before fading out
      tl.to({}, { duration: 6.8, delay: 0.5 });

      // Fade out animation before switching text
      tl.to(textContainerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }, 100);
        },
      });

      tl.to(letters, {
        opacity: 0,
        y: 12,
        duration: 0.5,
        stagger: 0.02,
        ease: "power2.inOut",
      });

      return () => tl.kill();
    }
  }, [currentTextIndex]);

  // ✅ **New useEffect for Subtext Loop**
  useEffect(() => {
    const toggleSubtext = () => {
      setIsSubtextVisible(true);

      setTimeout(() => {
        setIsSubtextVisible(false);
      }, subtextVisibleDuration);
    };

    // Initial trigger
    toggleSubtext();

    // Repeat loop
    const interval = setInterval(toggleSubtext, subtextVisibleDuration + subtextHiddenDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-text-overlay">
        <div className="home-text-left" ref={textContainerRef}>
          <h1 className="animated-text font-syne">
            <span className="text-wrapper" ref={textRef}>
              {texts[currentTextIndex]
                .split(" ") // Split into words
                .map((word, wordIndex) => (
                  <span key={wordIndex} className="word">
                    {word.split("").map((char, index) => (
                      <span key={index} className="letter">{char}</span>
                    ))}
                    &nbsp;
                  </span>
                ))}
            </span>
          </h1>
        </div>

        {/* ✅ Subtext now loops with a custom delay */}
        <div className="home-text-right" data-aos="fade-left">
          <h2
            className="animated-subtext font-raleway"
            ref={subTextRef}
            style={{
              opacity: isSubtextVisible ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Digimos architecto rem ex odio voluptas expedita
          </h2>
        </div>
      </div>

      {/* Banner Component */}
      <Banner />
    </div>
  );
};

export default Home;
