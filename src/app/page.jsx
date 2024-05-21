"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
            src="/hero.jpg"
            fill
            className="h-full w-full object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 justify-center items-center z-40">
          {/* TITLE */}
          <h1 className="text-4xl font-bold">
            Hi, I'm Yohanse Mehabaw, a Full-Stack and Mobile Flutter Developer!
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Welcome to my world of tech expertise! With skills in both
            Electrical Engineering and software sorcery, I create strong
            applications. From React.js to Django and Flutter, I'm here to bring
            your tech dreams to life. Let's work together to innovate and
            excel.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 py-2">
            <Link href="/portfolio">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button></Link>
            <Link href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
