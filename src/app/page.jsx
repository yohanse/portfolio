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
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            fill
            className="h-full w-full object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 justify-center items-center">
          {/* TITLE */}
          <h1 className="text-4xl font-bold">Electrical</h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Welcome to my portfolio! I'm passionate about both software
            development and electrical engineering.
            {/* development and electrical engineering. As a self-learner in the world
          of coding, I'm constantly exploring new technologies and honing my
          skills to create innovative solutions. Alongside my journey in
          software, I'm pursuing my degree in Electrical Engineering, where I
          delve into the fascinating realm of circuits, systems, and renewable
          energy. Explore my projects and journey as I strive to merge the
          worlds of technology and engineering to make a meaningful impact. */}
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
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
