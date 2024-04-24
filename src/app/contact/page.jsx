"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const text = "Say Hello";
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-2/5 flex justify-center items-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form action="" className="h-1/2 lg:h-full lg:w-3/5 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
          <span>Dear Yohanse</span>
          <textarea rows="6" className="bg-transparent border-b-2 border-b-black outline-none resize-none"></textarea>
          <span>My mail address is:</span>
          <input type="text" className="bg-transparent border-b-2 border-b-black outline-none"/>
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
          {sucess && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
          {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
