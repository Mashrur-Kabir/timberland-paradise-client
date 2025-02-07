import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import Banner from "./../Banner/Banner";
import "./Home.css";

const Home = () => {
  const textRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true, delay: 800 });

    const letters = textRef.current?.querySelectorAll(".letter");

    if (textContainerRef.current) {
      gsap.fromTo(
        textContainerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 1 }
      );
    }

    if (letters) {
      gsap.fromTo(
        letters,
        { opacity: 0, y: 12 }, // ✅ how LOWER letter start
        {
          opacity: 1,
          y: 0,
          duration: 0.5, // ✅ fluidity of effect
          stagger: 0.04, // ✅ Adjust for smoother sequencing
          ease: "back.out(0.1)", // ✅ Creates a "bouncy peeking" effect
          delay: 1,
        }
      );
    }
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-text-overlay">
        <div className="home-text-left" ref={textContainerRef}>
          <h1 className="animated-text font-syne">
          <span className="text-wrapper" ref={textRef}>
              {
                "Minimalist designs for luxurious standards"
                  .split(" ") // ✅ Split into words
                  .map((word, wordIndex) => (
                    <span key={wordIndex} className="word">
                      {word.split("").map((char, index) => (
                        <span key={index} className="letter">{char}</span>
                      ))}
                      &nbsp; {/* ✅ Adds space between words */}
                    </span>
                  ))
              }
            </span>
          </h1>
        </div>

        <div className="home-text-right" data-aos="fade-left">
          <h2 className="animated-subtext font-raleway">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Digimos architecto rem ex odio voluptas expedita</h2>
        </div>
      </div>

      <Banner />
    </div>
  );
};

export default Home;
