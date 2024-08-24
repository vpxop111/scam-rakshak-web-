import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; // Import the Navbar component

export default function PricingPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleGetStartedClick = () => {
    setShowComingSoon(true);
  };

  if (showComingSoon) {
    return (
      <div className="flex flex-col text-white min-h-screen bg-custom-bg bg-cover bg-center">
        <div className="mx-10 pt-5 mi:mx-3 ml:mx-3">
          <Navbar />
        </div>
        <div className="flex flex-row justify-center text-[4rem] mi:text-[3rem] ml:text-[2.5rem] mt-[17rem] ml:mx-3">
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

  return (
    <div className="flex flex-col min-h-screen bg-black text-white bg-custom-bg bg-cover bg-center">
      <div className="mx-10 mt-7 mi:mx-3 ml:mx-3">
        <Navbar />
      </div>{" "}
      {/* Use the Navbar component */}
      <main className="flex-1 flex items-center justify-center min-h-screen bg-custom-bg bg-cover bg-center">
        <section className="w-full py-10 md:py-24 lg:py-32">
          <div className="container px-4 ml:px-1 md:px-6 mx-auto">
            <div className="text-center space-y-4">
              <motion.h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Pricing Plans
              </motion.h2>
              <motion.p
                className="max-w-[700px] mx-auto text-gray-400 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Protect your digital life with ScamRakshak's affordable and
                comprehensive plans.
              </motion.p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 text-black">
              {[
                {
                  title: "Basic",
                  price: "₹99",
                  features: [
                    "Scam detection",
                    "Phishing protection",
                    "Identity theft monitoring",
                    "Advanced fraud alerts (No)",
                    "Priority support (No)",
                  ],
                },
                {
                  title: "Standard",
                  price: "₹199",
                  features: [
                    "Scam detection",
                    "Phishing protection",
                    "Identity theft monitoring",
                    "Advanced fraud alerts",
                    "Priority support (No)",
                  ],
                },
                {
                  title: "Premium",
                  price: "₹299",
                  features: [
                    "Scam detection",
                    "Phishing protection",
                    "Identity theft monitoring",
                    "Advanced fraud alerts",
                    "Priority support",
                  ],
                },
                {
                  title: "Enterprise",
                  price: "₹499",
                  features: [
                    "Scam detection",
                    "Phishing protection",
                    "Identity theft monitoring",
                    "Advanced fraud alerts",
                    "Priority support",
                    "Dedicated account manager",
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={plan.title}
                  className="bg-white border rounded-lg shadow-md p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{plan.title}</h3>
                    <div className="text-4xl font-bold">{plan.price}</div>
                    <p className="text-sm text-gray-400">per month</p>
                  </div>
                  <div className="p-4 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        {feature.endsWith("(No)") ? (
                          <div className="mr-2 h-4 w-4 text-red-500">✘</div>
                        ) : (
                          <div className="mr-2 h-4 w-4 text-[#ddff00]">✔</div>
                        )}
                        {feature.replace("(No)", "")}
                      </div>
                    ))}
                  </div>
                  <div className="p-4">
                    <motion.button
                      className="w-full bg-[#ddff00] text-black py-2 rounded-lg hover:bg-[#cce500]"
                      onClick={handleGetStartedClick}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t border-white">
        <p className="text-xs text-gray-400">
          &copy; 2024 ScamRakshak. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {["Terms of Service", "Privacy Policy"].map((text, index) => (
            <motion.a
              key={text}
              href="#"
              className="text-xs hover:underline underline-offset-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {text}
            </motion.a>
          ))}
        </nav>
      </footer>
    </div>
  );
}
