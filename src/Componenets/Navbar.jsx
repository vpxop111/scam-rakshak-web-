import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.div
      className="flex flex-row justify-between items-center p-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="flex flex-row items-center">
        <img
          src="https://i.ibb.co/WPmQDXT/Screenshot-2024-08-19-at-1-58-45-AM-removebg-preview-2.png"
          className="h-10 w-10 -mr-3"
        />
        <h1 className="text-2xl font-semibold text-[#ddff00]">cam</h1>
        <h1 className="text-2xl font-semibold">Rakshak</h1>
      </Link>

      {/* Responsive Menu */}
      <div className="hidden md:flex flex-row text-xl text-white">
        <motion.h1
          className="mx-4 hover:text-[#ddff00] transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/">Home</Link>
        </motion.h1>
        <motion.h1
          className="mx-4 hover:text-[#ddff00] transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/pricing">Pricing</Link>
        </motion.h1>
        <motion.h1
          className="mx-4 hover:text-[#ddff00] transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/blog">Blog</Link>
        </motion.h1>
        <motion.h1
          className="mx-4 hover:text-[#ddff00] transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/contact">Contact</Link>
        </motion.h1>
      </div>

      <motion.div
        className=" mac3:hidden h-[3.2rem] w-[10rem] text-black bg-[#ddff00] text-[1rem] font-semibold flex items-center justify-center rounded-lg hover:bg-[#cce500] transition-colors cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <Link to="/contact">Join The Waitlist</Link>
      </motion.div>

      {/* Hamburger Icon for smaller screens */}
      <div className="block md:hidden" onClick={toggleMenu}>
        <div className="h-8 w-8 bg-[#ddff00] flex items-center justify-center rounded-full cursor-pointer">
          <span className="text-black">☰</span>
        </div>
      </div>

      {/* Pop-up menu for smaller screens */}
      {menuOpen && (
        <motion.div
          className="absolute top-16 right-4 bg-[#ddff00] text-black rounded-lg shadow-lg p-4 flex flex-col space-y-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" onClick={toggleMenu} className="text-xl">
            Home
          </Link>
          <Link to="/pricing" onClick={toggleMenu} className="text-xl">
            Pricing
          </Link>
          <Link to="/blog" onClick={toggleMenu} className="text-xl">
            Blog
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="text-xl">
            Contact
          </Link>
          <motion.div
            className="h-[3.2rem] w-[10rem] text-black bg-white text-[1rem] font-semibold flex items-center justify-center rounded-lg hover:bg-[#cce500] transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/contact" onClick={toggleMenu}>
              Join The Waitlist
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
