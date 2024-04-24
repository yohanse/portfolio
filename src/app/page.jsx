"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            fill
            className="h-full w-full object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 justify-center items-center z-40">
          {/* TITLE */}
          <h1 className="text-4xl font-bold">Hi, I'm Yohanse Mehabaw, a Full-Stack and Mobile Flutter Developer!</h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            I'm an Electrical Engineering student with a passion for software
            development. My background in engineering gives me a strong
            understanding of hardware-software interaction, which I leverage to
            build robust and efficient applications. Whether it's full-stack
            development or creating mobile apps with Flutter, I'm always up for
            a challenge. As a problem-solving enthusiast, I've honed my skills
            on Codeforces, reaching the rank of Expert. Explore my projects to see my skills in action,
            and let's connect to discuss how I can help bring your ideas to
            life!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 py-2">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
