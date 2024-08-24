import { motion } from "framer-motion";
import Mainpart from "./Mainpart";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <div className="flex flex-col text-white min-h-screen bg-custom-bg bg-cover bg-center">
      <Helmet>
        <title>ScamRakshak - Protect Your Digital Life</title>
        <meta
          name="description"
          content="ScamRakshak provides comprehensive protection against scams and phishing. Secure your digital life with our advanced tools."
        />
        <meta
          name="keywords"
          content="ScamRakshak, scam protection, phishing protection, identity theft monitoring"
        />
        <meta
          property="og:title"
          content="ScamRakshak - Protect Your Digital Life"
        />
        <meta
          property="og:description"
          content="ScamRakshak offers tools to protect against scams and phishing attacks. Stay safe online with our comprehensive solutions."
        />
        <meta property="og:image" content="URL to an image for the preview" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>
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
