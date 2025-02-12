import { useState, useEffect } from "react";
import Banner from "./../Banner/Banner";
import TextAnimations from "../TextAnimations/TextAnimations";
import Intro from "../Intro/Intro";
import StatsSection from "../StatsSection/StatsSection";

const ANIMATION_CYCLE_DURATION = 10000; // 10 seconds, adjust if needed

const Home = () => {
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationCycle((prev) => prev + 1);
    }, ANIMATION_CYCLE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">
      <Banner animationCycle={animationCycle} />
      <TextAnimations animationCycle={animationCycle}></TextAnimations> 
      <Intro></Intro>
      <StatsSection></StatsSection>
    </div>
  );
};

export default Home;
