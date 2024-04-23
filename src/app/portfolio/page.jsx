"use client";
import { motion } from "framer-motion";
import ProjectsCard from "../../components/ProjectsCard";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll grid gap-5 grid-cols-1 sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-3  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
        <ProjectsCard imgUrl={"/hero.png"} title={"My Project"} description={"Done with great attitude"}></ProjectsCard>
      </div>
    </motion.div>
  )
}

export default PortfolioPage