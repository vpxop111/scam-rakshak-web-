import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.div
      className="flex flex-row justify-between items-center "
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-row">
        <h1 className="text-2xl font-semibold text-[#ddff00]">Scam</h1>
        <h1 className="text-2xl font-semibold">Rakshak</h1>
      </div>
      <div className="flex flex-row text-xl text-white">
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
        className="h-[3.2rem] w-[10rem] text-black bg-[#ddff00] text-[1rem] font-semibold flex items-center justify-center rounded-lg hover:bg-[#cce500] transition-colors cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <Link to="/contact">Join The Waitlist</Link>
      </motion.div>
    </motion.div>
  );
}
