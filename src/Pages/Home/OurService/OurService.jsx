import { motion } from 'framer-motion';
import { FaCouch, FaDraftingCompass, FaDesktop, FaTable } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const services = [
  { icon: <FaCouch size={50} className="md:size-[65px] lg:size-[80px]" />, title: 'Design', description: 'Natus error sit voluptatem accus aunti doloremque lautan.' },
  { icon: <FaDraftingCompass size={50} className="md:size-[65px] lg:size-[80px]" />, title: 'Planning', description: 'Natus error sit voluptatem accus aunti doloremque lautan.' },
  { icon: <FaDesktop size={50} className="md:size-[65px] lg:size-[80px]" />, title: 'Visualization', description: 'Natus error sit voluptatem accus aunti doloremque lautan.' },
  { icon: <FaTable size={50} className="md:size-[65px] lg:size-[80px]" />, title: 'Oversight', description: 'Natus error sit voluptatem accus aunti doloremque lautan.' },
];

const OurService = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200, easing: 'ease-in-out', once: true });
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-black text-white p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-64 pb-18">
      <div data-aos="fade-right">
        <p className="uppercase tracking-widest text-gray-400 mb-2 font-ysab font-bold text-sm">Interior Services</p>
        <h2 className="text-5xl font-bold mb-4 font-syne">What we offer</h2>
        <p className="text-gray-400 font-quicksand">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col items-center text-center p-4 hover:shadow-lg rounded-lg transition-transform duration-500 hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div whileHover={{ scale: 1.4, rotate: 5 }} className="text-orange-500 mb-4">
              {service.icon}
            </motion.div>
            <h3 className="text-xl font-syne font-semibold mb-2">
              {hoveredIndex === index ? (
                <Typewriter
                  options={{
                    strings: service.title,
                    autoStart: true,
                    loop: false,
                    delay: 80,
                  }}
                />
              ) : (
                service.title
              )}
            </h3>
            <p className="text-gray-400 font-quicksand text-sm sm:text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
