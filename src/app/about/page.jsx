"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div>
        {/* TEXT CONTAINER */}
        <div>
          {/* BIOGRAPHY CONTAINER */}
          <div></div>
          {/* SKILLS CONTAINER */}
          <div></div>
          {/* EXPERIENCE CONTAINER */}
          <div></div>
        </div>
        {/* SVG CONTAINER */}
        <div></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
