import React from "react";
import { motion } from "framer-motion";

export default function Mainpart() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen max-w-full mainpart-bg p-8 bg-opacity-70"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-row text-[4rem] font-medium text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="mx-1">Defend.</h1>
        <h1 className="text-[#ddff00] mx-1">Detect.</h1>
        <h1 className="mx-1">Protect.</h1>
        <h1 className="text-[#ddff00] mx-1">Scams.</h1>
      </motion.div>
      <div className="mt-[1.7rem]">
        <h1 className="text-[1.3rem] text-center">
          ScamRakshak is an AI-powered app that protects users from scams by
        </h1>
        <h1 className="text-[1.3rem] text-center mt-1">
          detecting and preventing fraud across SMS, email, calls, and more.
        </h1>
      </div>
      <motion.button
        className="mt-[3rem] px-10 py-3 bg-white text-[1rem] text-black font-semibold rounded-full hover:bg-[#cce500] transition-colors"
        whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
}
