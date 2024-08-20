import Navbar from "./Navbar"; // Adjust the path according to your project structure
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-black text-white bg-custom-bg bg-cover bg-center">
        <div className="mx-10 mt-7 mi:mx-3 ml:mx-3">
          <Navbar />
        </div>
        <section className="bg-black dark:bg-black min-h-screen bg-custom-bg bg-cover bg-center">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <motion.h2
              className="mb-4 text-4xl   tracking-tight font-extrabold text-center text-white dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h2>
            <motion.p
              className="mb-8 lg:mb-16 font-light text-center text-gray-400 dark:text-gray-300 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </motion.p>
            <motion.form
              action="#"
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-black border border-gray-600 hover:border-[#ddff00] text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-300 bg-black rounded-lg border border-gray-600 hover:border-[#ddff00] shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </motion.div>
              <motion.div
                className="sm:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-300 bg-black rounded-lg shadow-sm border border-gray-600 hover:border-[#ddff00] focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="py-3 px-5 text-sm font-semibold text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#ddff00]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "#ddff00" }}
                whileTap={{ scale: 0.95 }}
              >
                Send message
              </motion.button>
            </motion.form>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
