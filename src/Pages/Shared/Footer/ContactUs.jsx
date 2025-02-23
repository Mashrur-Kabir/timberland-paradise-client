import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const socialLinks = [
  { name: "Facebook", icon: <FaFacebookF /> },
  { name: "Twitter", icon: <FaTwitter /> },
  { name: "Dribbble", icon: <FaDribbble /> },
  { name: "Instagram", icon: <FaInstagram /> }
];

const ContactUs = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-black text-white p-10 lg:px-20">
      <div className="grid md:grid-cols-4 gap-8 border-b border-gray-700 pb-6">
        {/* Office Info */}
        <div className="font-quicksand">
          <h3 className="font-bold text-lg mb-4 font-syne">Office</h3>
          <p className="text-gray-400">Germany —</p>
          <p className="text-gray-400">785 15h Street, Office 478</p>
          <p className="text-gray-400">Berlin, DE 81566</p>
          <p className="text-orange-400 underline mt-2 cursor-pointer">info@email.com</p>
          <p className="mt-2 font-bold">+1 840 841 25 69</p>
        </div>

        {/* Links */}
        <div className="font-quicksand">
          <h3 className="font-bold text-lg mb-4 font-syne">Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="cursor-pointer hover:text-white transition">Home</li>
            <li className="cursor-pointer hover:text-white transition">Services</li>
            <li className="cursor-pointer hover:text-white transition">About Us</li>
            <li className="cursor-pointer hover:text-white transition">Features</li>
            <li className="cursor-pointer hover:text-white transition">Contacts</li>
          </ul>
        </div>

        {/* Socials with Fixed Width and Absolute Icon */}
      <div className="font-quicksand">
        <h3 className="font-bold text-lg mb-4 font-syne">Socials</h3>
        <ul className="space-y-3">
          {socialLinks.map((item, index) => (
            <motion.li
              key={index}
              className="relative flex items-center cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              // Set a fixed width so all items behave uniformly:
              style={{ width: '200px', overflow: 'hidden' }}
            >
              {/* The social name container */}
              <motion.div
                className="social-name"
                initial={{ x: 0 }}
                animate={hovered === index ? { x: 80, opacity: 0 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-gray-400">{item.name}</span>
              </motion.div>
              {/* The icon is absolutely positioned */}
              <motion.div
                className="social-icon absolute left-8"
                initial={{ x: -50, opacity: 0 }}
                animate={hovered === index ? { x: 2, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white">{item.icon}</span>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>

        {/* Newsletter */}
        <div className="font-quicksand">
          <h3 className="font-bold text-lg mb-4 font-syne">Newsletter</h3>
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
            <div className="px-3 py-2 bg-gray-800">
              <FaEnvelope className="text-white" />
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent outline-none text-white px-3 py-2 w-full"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-3 bg-orange-500 text-white"
            >
              <FaArrowRight />
            </motion.button>
          </div>
          <div className="mt-2 flex items-center gap-2 text-gray-400 text-sm">
            <input type="checkbox" className="accent-orange-500" />
            <span>I agree to the terms and conditions<span className="text-white underline cursor-pointer">Privacy Policy</span></span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-gray-500 text-center mt-6 text-sm font-ysab">
        Timberland © 2025. All Rights Reserved.
      </div>
    </div>
  );
};

export default ContactUs;
