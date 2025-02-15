import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CgArrowLongRight } from "react-icons/cg";
import studioApart from '../../../assets/images/apartments/studio-apart.jpg';
import loftApart from '../../../assets/images/apartments/loft-apart.jpg';

const apartments = [
  {
    image: studioApart,
    title: 'Studio apartments',
    description: 'Dicta sunt explicabo. Nemo ipsam voluptatem quia voluptas aspernatur aut odit aut fugit, sed quia. Dicta sunt explicabo. Nemo voluptatem quia.',
  },
  {
    image: loftApart,
    title: 'Loft apartment',
    description: 'Stet clita bergen, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy.',
  },
];

const Apartments = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 200, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="bg-black text-white p-10 grid grid-cols-1 gap-10 lg:px-60 pb-24">
      {apartments.map((apartment, index) => (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section with Hover Animation */}
          <div data-aos="fade-right" className="overflow-hidden rounded-sm">
            <img
              src={apartment.image}
              alt={apartment.title}
              className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Text Section with AOS */}
          <div data-aos="fade-left">
            <p className="uppercase tracking-widest text-gray-400 mb-2 font-ysab font-bold text-sm">Design Studio</p>
            <h2 className="text-4xl font-bold mb-4 font-syne">{apartment.title}</h2>
            <p className="text-gray-400 font-quicksand mb-4">{apartment.description}</p>
            <p className="w-48 flex items-center text-white font-syne font-semibold group cursor-pointer">
                Read More
                <span 
                    className="ml-2 inline-block transition-all duration-300 transform group-hover:scale-x-250 group-hover:translate-x-2 group-hover:origin-left group-hover:text-orange-500"
                >
                    <CgArrowLongRight />
                </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Apartments;
