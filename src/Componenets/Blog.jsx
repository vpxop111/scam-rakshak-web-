import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="flex flex-col text-white min-h-screen bg-custom-bg bg-cover bg-center">
      <div className="mx-10 pt-5">
        <Navbar />
      </div>
      <div className="flex flex-row justify-center text-[4rem] mt-[17rem]">
        <motion.h1
          className="text-[#ddff00]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Coming
        </motion.h1>
        <motion.h1
          className="mx-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Soon
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          .
        </motion.h1>
        <motion.h1
          className="text-[#ddff00]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          .
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          .
        </motion.h1>
        <motion.h1
          className="text-[#ddff00]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          .
        </motion.h1>
      </div>
    </div>
  );
}
