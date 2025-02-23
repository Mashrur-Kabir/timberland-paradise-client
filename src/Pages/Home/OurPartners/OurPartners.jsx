import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaGoogle, FaMicrosoft, FaApple, FaAmazon } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa6';
import { SiTesla } from "react-icons/si";

const partners = [
  { name: 'Google', icon: FaGoogle },
  { name: 'Microsoft', icon: FaMicrosoft },
  { name: 'Apple', icon: FaApple },
  { name: 'Amazon', icon: FaAmazon },
  { name: 'Tesla', icon: SiTesla },
  { name: 'IBM', icon: FaBuilding },
];

const OurPartners = () => {
  return (
    <div className="bg-black text-white pb-32 px-6 lg:px-60">
      <p className='uppercase tracking-widest text-gray-400 mb-2 font-ysab font-bold text-sm text-center'>
        Our Partners
      </p>
      <h2 className="text-5xl font-bold text-center mb-16 font-syne">We Are Trusted</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-gray-500">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center border border-gray-500 w-full h-40 md:h-36 lg:h-44">
            <PartnerLogo name={partner.name} Icon={partner.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

const PartnerLogo = ({ name, Icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Icon
      className={`text-5xl transition-all duration-300 ${
        hovered ? 'text-white' : 'text-gray-500'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={name}
    />
  );
};

OurPartners.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired, // Changed to `elementType` since we're passing a component
    })
  ),
};

PartnerLogo.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired, // Changed to `elementType`
};

export default OurPartners;
