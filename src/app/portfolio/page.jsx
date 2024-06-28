"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);
  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Instagram Clone",
      desc: "This project showcases my skills in Flutter (front end) and Django (back end). It supports posting, deleting, liking, and commenting on both posts and Reels, along with real-time messaging. It uses JWT authentication for security and includes secure email notifications. Built with clean architecture, it ensures maintainability and scalability.",
      img: "https://drive.google.com/file/d/1-D4e_HybeGGC5PG1kzM61Qq15ru9bO6p/preview",
      link: "https://github.com/yohanse/Instagram-Clone",
    },
    {
      id: 2,
      color: "from-purple-300 to-red-300",
      title: "Portfolio Website",
      desc: "I built my portfolio website to showcase my projects and skills in web development. While the design is based on a tutorial video, I implemented it using Next.js. The site features a clean, responsive layout with detailed descriptions of my work, skills, and experiences, highlighting my proficiency in HTML, CSS, JavaScript, and Next.js.",
      img: "https://www.yohanse.me/",
      link: "https://lama.dev",
    },
    {
      id: 3,
      color: "from-blue-300 to-violet-300",
      title: "Online Store",
      desc: "This project showcases my skills in React with Redux for state management and Django for the back end. It supports a cart system, allowing users to add, delete, and order products. The application includes JWT authentication and features pages such as Home (displaying recent products) and About. Future plans include integrating Chapa for a more convenient payment method.",
      img: "",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-violet-300 to-purple-300",
      title: "Game Hub",
      desc: "I built this project while learning React to solidify my understanding of front-end development. Through Game Hub, I mastered connecting to a backend, creating custom components, and using hooks for state and effect management. This project demonstrates my ability to build dynamic and responsive web applications, showcasing my skills in React and my commitment to learning and growth.",
      img: "",
      link: "https://lama.dev",
    },
    {
      id: 5,
      color: "from-purple-300 to-red-300",
      title: "Checker Game",
      desc: "I developed this project to showcase my skills in Java programming. Utilizing Swing GUI, despite its limitations, I crafted a user-friendly interface. Through this project, I honed my coding techniques and gained valuable insights into Java development.",
      img: "",
      link: "https://lama.dev",
    },
    
  ];
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]">
        <div className="w-screen h-[calc(100vh-6rem)] flex justify-center items-center text-8xl text-center">
          My Works{" "}
          <span>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={80}
              height={80}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </span>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x: x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>

                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[250px] xl:w-[600px] xl:h-[250px]">
                  {item.img != "" ? <iframe src={item.img} width="100%" height="100%" mute style={{zIndex:"100", position:"relative"}} fill></iframe> : <p className="w-full h-full">A demo of the project is coming soon! For now, feel free to check out the project on GitHub.</p>}
                    
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <div className="flex gap-8">
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-2 md:text-md lg:p-2 lg:text-md bg-white text-gray-600 font-semibold m-4 rounded">
                        Check Github
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;