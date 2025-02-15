import { useState } from 'react';
import { useSpring, useSprings, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { PropTypes } from 'prop-types';

import chelsea from '../../../assets/images/team/chelsea.jpg';
import vince from '../../../assets/images/team/vince.jpg';
import anna from '../../../assets/images/team/anna.jpg';

const teamMembers = [
  { image: chelsea, name: 'Chelsea Morgan', role: 'Interior Designer' },
  { image: vince, name: 'Vince Bogard', role: 'Project Manager' },
  { image: anna, name: 'Anna Kinmann', role: 'Visualization Specialist' },
];

// This component represents a single team member and its hover effect
const TeamMember = ({ image, name, role, style }) => {
  const [hovered, setHovered] = useState(false);

  // Define the icons you want to use
  const icons = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn];

  // Define hover classes for each icon:
  const iconHoverClasses = [
    'hover:text-blue-500', // Facebook
    'hover:text-sky-400',  // Twitter
    // For Instagram, we apply a gradient background on hover.
    'hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600',
    'hover:text-blue-700'  // LinkedIn
  ];

  // Animate each icon in a wave-like effect on hover.
  const iconsSprings = useSprings(
    icons.length,
    icons.map((_, i) => ({
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: hovered
        ? { opacity: 1, transform: 'translateY(0px)' }
        : { opacity: 0, transform: 'translateY(20px)' },
      config: { tension: 200, friction: 12 },
      delay: hovered ? i * 100 : 0, // stagger each icon for a wave effect
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
          const Icon = icons[i];
          return (
            <animated.span
              key={i}
              style={iconStyle}
              className={`cursor-pointer transition-colors duration-300 ${iconHoverClasses[i]}`}
            >
              <Icon size={20} className="fill-current" />
            </animated.span>
          );
        })}
      </div>
    </animated.div>
  );
};

// Add PropTypes for TeamMember component
TeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

const Team = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  // Title animation
  const fadeInTitle = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)', zIndex: 0 },
    to: inView ? { opacity: 1, transform: 'translateY(0px)', zIndex: 10 } : {},
    config: { mass: 1, tension: 120, friction: 30, duration: 800 },
    delay: 200,
  });

  // Each team member's container starts with a different initial translateY
  const initialPositions = ['translateY(90px)', 'translateY(170px)', 'translateY(260px)'];

  // Animate the team member cards
  const springs = useSprings(
    teamMembers.length,
    teamMembers.map((_, i) => ({
      from: { opacity: 0, transform: initialPositions[i] },
      to: inView
        ? { opacity: 1, transform: 'translateY(0px)' }
        : { opacity: 0, transform: initialPositions[i] },
      config: { mass: 1, tension: 120, friction: 30, duration: 800 },
      // Adjust delay so they start shortly after the title animation
      delay: inView ? 750 + i * 100 : 0,
    }))
  );

  return (
    <div ref={ref} className="bg-black text-white p-10 lg:px-60 text-center relative pb-28">
      <animated.h2
        style={fadeInTitle}
        className="text-5xl font-bold font-syne mb-10 absolute inset-x-0"
      >
        Designers’ Studio
      </animated.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-20 pt-24">
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

// You're seeing two components because the code is divided into a parent and a child component:

// TeamMember:
// This is a reusable component that represents a single team member's card. It includes the image, name, role, and the hover animation for the social icons.

// Team:
// This is the parent component that manages the overall layout, title animation, and renders a grid of TeamMember components—one for each team member in the teamMembers array.
