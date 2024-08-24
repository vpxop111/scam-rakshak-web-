import { motion } from "framer-motion";
import Mainpart from "./Mainpart";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div className="flex flex-col text-white min-h-screen bg-custom-bg bg-cover bg-center">
      <motion.div
        className="mx-0 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="pt-5">
          <div className="mx-10 ma:mx-3 mi:mx-3 ml:mx-3">
            <Navbar />
          </div>
          <div>
            <Mainpart />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
