import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Home/Home.css"; 
import PropTypes from 'prop-types';

const texts = [
  "Minimalist designs for luxurious standards",
  "Timeless elegance for your modern spaces",
];

const subtexts = [
  "Sophisticated craftsmanship for modern living. Grab the best value products for you money",
  "Designs that blend tradition with innovation. We design every project as a one-off",
];

const TextAnimations = ({ animationCycle }) => {
  const textRef = useRef(null);
  const textContainerRef = useRef(null);
  const subTextRef = useRef(null); // ✅ Ref for right-side text

  useEffect(() => {
    if (!textContainerRef.current || !textRef.current || !subTextRef.current) return;

    // Ensure left text starts visible
    gsap.set(textContainerRef.current, { opacity: 1, y: 0 });

    // Ensure right text starts off-screen (to the right)
    gsap.set(subTextRef.current, { opacity: 0, x: 50 });

    const letters = textRef.current.querySelectorAll(".letter");
    const tl = gsap.timeline();

    // Animate Left Text (Main Title)
    tl.set(letters, { opacity: 0, y: 12 })
      .to(letters, { opacity: 1, y: 0, duration: 0.5, stagger: 0.04, ease: "back.out(0.1)" }, "<")
      .to({}, { duration: 7 }) // ✅ Keeps text visible longer
      .to(letters, { opacity: 0, y: 12, duration: 0.5, stagger: 0.02, ease: "power2.inOut" });

    // Animate Right Text (Subtext)
    gsap.to(subTextRef.current, {
      opacity: 1,
      x: 0, // Moves into view from right
      duration: 2,
      ease: "power2.out",
    });

    // ✅ Keep Right Text visible slightly longer than the left text
    setTimeout(() => {
      gsap.to(subTextRef.current, {
        opacity: 0,
        x: 50, // ✅ Moves out to the right
        duration: 0.8,
        ease: "power2.inOut",
      });
    }, 9000); // how long it will stay

    return () => tl.kill();
  }, [animationCycle]);

  return (
    <div className="home-text-overlay">
      {/* Left Text (Main Title) */}
      <div className="home-text-left" ref={textContainerRef}>
        <h1 className="animated-text font-syne">
          <span className="text-wrapper" ref={textRef}>
            {texts[animationCycle % texts.length]
              .split(" ")
              .map((word, wordIndex) => (
                <span key={wordIndex} className="word">
                  {word.split("").map((char, index) => (
                    <span key={index} className="letter">{char}</span>
                  ))}
                  <span style={{ marginRight: "5px" }}></span> {/* ✅ Fix word spacing */}
                </span>
              ))}
          </span>
        </h1>
      </div>

      {/* Right Text (Subtext) */}
      <div className="home-text-right" ref={subTextRef}>
        <h2 className="animated-subtext font-raleway">
          {subtexts[animationCycle % subtexts.length]}
        </h2>
      </div>
    </div>
  );
};

TextAnimations.propTypes = {
  animationCycle: PropTypes.number.isRequired,
};

export default TextAnimations;
