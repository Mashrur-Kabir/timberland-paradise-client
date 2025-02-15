import { useState } from 'react';
import PropTypes from 'prop-types';

const partners = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
];

const OurPartners = () => {
  return (
    <div className="bg-black text-white pb-32 px-6 lg:px-60">
      <p className='uppercase tracking-widest text-gray-400 mb-2 font-ysab font-bold text-sm text-center'>Our Partners</p>
      <h2 className="text-5xl font-bold text-center mb-16 font-syne">We Are Trusted</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-gray-600">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center border border-gray-600 w-full h-40 md:h-36 lg:h-44"
          >
            <PartnerLogo name={partner.name} logo={partner.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

const PartnerLogo = ({ name, logo }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <img
      src={logo}
      alt={name}
      className={`w-1/3 md:w-1.5/4 lg:3.5/4 h-auto transition-all duration-300 ${hovered ? 'invert' : 'opacity-80'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

OurPartners.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })
  ),
};

PartnerLogo.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default OurPartners;
