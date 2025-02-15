import { useState } from 'react';
import { useSpring, useSprings, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
/* insta font */
import '@fortawesome/fontawesome-free/css/all.min.css';

import chelsea from '../../../assets/images/team/chelsea.jpg';
import vince from '../../../assets/images/team/vince.jpg';
import anna from '../../../assets/images/team/anna.jpg';

const teamMembers = [
  { image: chelsea, name: 'Chelsea Morgan', role: 'Interior Designer' },
  { image: vince, name: 'Vince Bogard', role: 'Project Manager' },
  { image: anna, name: 'Anna Kinmann', role: 'Visualization Specialist' },
];

const TeamMember = ({ image, name, role, style }) => {
  const [hovered, setHovered] = useState(false);

  // For Instagram we use a placeholder string so we can treat it specially.
  const icons = [FaFacebookF, FaTwitter, 'instagram', FaLinkedinIn];

  // Hover classes for non-Instagram icons.
  const iconHoverClasses = [
    'hover:text-blue-500', // Facebook
    'hover:text-sky-400',  // Twitter
    '',                    // Instagram – handled separately
    'hover:text-blue-700'  // LinkedIn
  ];

  // Animate each icon with a simple wave effect.
  const iconsSprings = useSprings(
    icons.length,
    icons.map((_, i) => ({
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: hovered
        ? { opacity: 1, transform: 'translateY(0px)' }
        : { opacity: 0, transform: 'translateY(20px)' },
      config: { tension: 200, friction: 12 },
      delay: hovered ? i * 100 : 0,
    }))
  );

  return (
    <animated.div
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="overflow-hidden rounded-lg relative"
    >
      <animated.img
        src={image}
        alt={name}
        className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-110"
      />
      <h3 className="text-xl font-bold mt-8 font-syne">{name}</h3>
      <p className="text-gray-400 font-quicksand">{role}</p>
      {/* Icons container */}
      <div className="mt-4 flex justify-center space-x-4">
      {iconsSprings.map((iconStyle, i) => {
        if (i === 2) {
          // For Instagram, we use a Font Awesome icon rendered as text.
          return (
            <animated.span
              key={i}
              style={iconStyle}
              className="cursor-pointer transition-colors duration-300 relative -top-1.5"
            >
              <span
                className="text-white text-2xl transition-colors duration-300 
                          hover:text-transparent bg-clip-text 
                          hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-600 hover:to-purple-700"
              >
                <i className="fab fa-instagram"></i>
              </span>
            </animated.span>
          );
        }
        // For the other icons, use react-icons components.
        const Icon = icons[i];
        return (
          <animated.span
            key={i}
            style={iconStyle}
            className={`cursor-pointer transition-colors duration-300 ${iconHoverClasses[i]}`}
          >
            <Icon size={20} fill="currentColor" className="fill-current" />
          </animated.span>
        );
      })}
      </div>
    </animated.div>
  );
};

TeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

const Team = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const fadeInTitle = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)', zIndex: 0 },
    to: inView ? { opacity: 1, transform: 'translateY(0px)', zIndex: 10 } : {},
    config: { mass: 1, tension: 120, friction: 30, duration: 800 },
    delay: 200,
  });

  const initialPositions = ['translateY(60px)', 'translateY(120px)', 'translateY(180px)'];

  const springs = useSprings(
    teamMembers.length,
    teamMembers.map((_, i) => ({
      from: { opacity: 0, transform: initialPositions[i] },
      to: inView
        ? { opacity: 1, transform: 'translateY(0px)' }
        : { opacity: 0, transform: initialPositions[i] },
      config: { mass: 1, tension: 120, friction: 30, duration: 800 },
      delay: inView ? 750 + i * 100 : 0,
    }))
  );

  return (
    <div ref={ref} className="bg-black text-white p-10 lg:px-60 text-center relative pb-32">
      <animated.h2
        style={fadeInTitle}
        className="text-5xl font-bold font-syne absolute inset-x-0"
      >
        <p className="uppercase tracking-widest text-gray-400 mb-2 font-ysab font-bold text-sm">
          Our Team
        </p>
        Designers’ Studio
      </animated.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-20 pt-28">
        {springs.map((animation, index) => (
          <TeamMember
            key={index}
            image={teamMembers[index].image}
            name={teamMembers[index].name}
            role={teamMembers[index].role}
            style={animation}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
