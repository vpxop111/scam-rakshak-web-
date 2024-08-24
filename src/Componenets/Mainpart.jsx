import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";

export default function Mainpart() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen max-w-full mainpart-bg p-8 ma:p-2 ma:mx-3 mi:p-2 mi:mx-5 ml:p-2 ml:mx-2 bg-opacity-70"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-row items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-[6rem] mi:hidden ml:hidden  mi:text-[1.6rem] mi:mx-2 m:text-[1.7rem] ma1:text-[2rem] ma2:text-[2.5rem]  mac:text-[2.8rem] mac1:text-[3.2rem] md:text-[3.5rem] mac2:text-[4.2rem]  font-bold leading-tight mr-2 mi:mr-2  mx-4">
          ScamRakshak can
        </h1>
        <h1 className="text-[6rem] ml:text-[1.2rem] ml:mx-2 mi:text-[1.6rem] mi:mx-2 font-bold m:hidden ma1:hidden ma2:hidden mac:hidden mac1:hidden mac2:hidden md:hidden">
          ScamRakshak can
        </h1>
        <div className="mi:text-[1.6rem] ml:text-[1.2rem]  font-bold text-[#ddff00] m:hidden ma1:hidden ma2:hidden mac:hidden mac1:hidden mac2:hidden md:hidden">
          <TypewriterComponent
            options={{
              strings: ["Detect.", "Defend.", "Protect.", "Secure."],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>
        <div className="text-[6rem] ml:hidden mi:hidden mi:mb-1 m:text-[1.7rem] ma1:text-[2rem] ma2:text-[2.5rem]  mac:text-[2.8rem] mac1:text-[3.2rem] mac2:text-[4.2rem] md:text-[3.5rem]  font-extrabold text-[#ddff00] mt-1">
          <TypewriterComponent
            options={{
              strings: [
                "Fight Scams.",
                "Detect Fraud.",
                "Block Threats.",
                "Block Scams.",
                "Secure Safety.",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>
      </motion.div>

      <div className="mt-8">
        <h2 className="text-[1rem] ml:text-[0.7rem] ml:mx-[1rem] mi:text-[0.9rem] mi:mx-[2rem] m:text-[0.9rem] m:mx-[4rem] ma2:mx-[9rem] font-semibold ma1:text-[1rem] ma1:mx-[6rem] ma2:text-[1rem] mac:text-[1rem] mac:mx-[11rem] mac1:text-[1rem] mac1:mx-[10rem] sm:text-[1.2rem] text-center leading-relaxed mac2:mx-[15rem]">
          ScamRakshak: AI-powered protection against fraud across SMS, email,
          calls, and more.
        </h2>
      </div>

      <motion.button
        className="mt-12 px-10 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-[#cce500] transition-colors duration-300 shadow-lg"
        whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link to="/contact">Learn More</Link>
      </motion.button>
    </motion.div>
  );
}
