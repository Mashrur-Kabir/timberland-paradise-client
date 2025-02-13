import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import comLogo from '../../../assets/logo/company-logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) AOS.init({ duration: 1000, once: true }); // Initialize AOS when opening the menu
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* left side of the navbar */}
      <div className="navbar-logo">
        <img
          src={comLogo}
          alt="Logo"
          className="navbar-logo-image"
        />
        <span className="navbar-logo-text font-syne">Timberland</span>
      </div>

      {/* right side of the navbar */}
      <div className="flex gap-5">
        {/* Menu Icon for Medium/Small Screens */}
        <button className="icon-button menu mb-1" onClick={toggleMenu}>
            <HiMenu className="text-2xl" />
        </button>
        {/* Links for Larger Screens */}
        <ul className={`navbar-links font-syne ${isMenuOpen ? "navbar-links-open" : ""}`}>
            {[
            { name: "Home", path: "/" },
            { name: "Pages", path: "./pages" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Blog", path: "/blog" },
            { name: "Shop", path: "/shop" },
            ].map((link, index) => (
            <li key={index} className="navbar-link-item">
                <NavLink
                to={link.path}
                className={({ isActive }) =>
                    isActive
                    ? "navbar-link active"
                    : "navbar-link"
                }
                >
                {link.name}
                <span className="underline"></span>
                </NavLink>
            </li>
            ))}
        </ul>

        {/* Icons Always Visible */}
        <div className="navbar-icons">
            <button className="icon-button cart mr-5">
                <MdOutlineShoppingCart className="text-2xl" />
            </button>
            <button className="icon-button search">
                <FiSearch className="text-2xl" />
            </button>
        </div>

        {/* Overlay for Medium/Small Screens */}
        <div className={`navbar-overlay ${isMenuOpen ? "navbar-overlay-open" : ""}`}>
          {isMenuOpen && (
            <div className="overlay-navbar">
              <div className="overlay-navbar-logo">
                <img
                  src={comLogo}
                  alt="Logo"
                  className="overlay-navbar-logo-image"
                />
                <span className="overlay-navbar-logo-text font-syne">Timberland</span>
              </div>
              <div className="flex items-center">
                <p className="font-quicksand onText" data-aos="fade-down">Close</p>
                <button
                  className="icon-button close-overlay"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  onClick={closeMenu}
                >
                  <IoMdClose className="text-3xl" />
                </button>
              </div>
            </div>
          )}

          <ul className="overlay-links font-syne">
            {[
              { name: "Home", path: "/" },
              { name: "Pages", path: "/pages" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Blog", path: "/blog" },
              { name: "Shop", path: "/shop" },
            ].map((link, index) => (
              <li key={index} className="overlay-link-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "overlay-link active"
                      : "overlay-link"
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                  <span className="underline"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
