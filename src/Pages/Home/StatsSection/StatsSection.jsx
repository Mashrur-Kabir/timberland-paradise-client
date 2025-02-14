import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "./StatsSection.css";

const stats = [
  { number: 98, label: "Projects" },
  { number: 65, label: "People" },
  { number: 10, label: "Years" },
  { number: 15, label: "Offices" },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setKey((prevKey) => prevKey + 1);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section className="stats-section font-syne" ref={ref}>
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <motion.span
            className="stat-number"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: index * 0.2 }}
          >
            <CountUp key={key} start={0} end={stat.number} duration={4} separator="," />
          </motion.span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
