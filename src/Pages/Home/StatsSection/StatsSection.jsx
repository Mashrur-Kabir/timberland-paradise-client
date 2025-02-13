import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion, useAnimation } from "framer-motion";
import "./StatsSection.css";

const stats = [
  { number: 98, label: "Projects" },
  { number: 65, label: "People" },
  { number: 10, label: "Years" },
  { number: 15, label: "Offices" },
];

const StatsSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="stats-section font-syne" ref={ref}>
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <motion.span
            className="stat-number"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 2, ease: "easeOut", delay: index * 0.2 },
              },
            }}
          >
            <CountUp start={0} end={stat.number} duration={6} separator=","/>
          </motion.span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
