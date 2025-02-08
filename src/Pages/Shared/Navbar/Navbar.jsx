import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import comLogo from '../../../assets/logo/company-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            { name: "Pages", path: "/pages" },
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
                    onClick={toggleMenu}
                >
                    {link.name}
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
