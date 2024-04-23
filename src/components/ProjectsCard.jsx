import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectsCard = ({ imgUrl, title, description }) => {
  return (
    <div className="">
      <div
        className="h-72 md:h-92 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay hidden justify-center items-center gap-2 absolute rounded-t-xl top-0 left-0 h-full w-full bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            href=""
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer group-hover/link:text-white"></CodeBracketIcon>
          </Link>
          <Link
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            href=""
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer group-hover/link:text-white"></EyeIcon>
          </Link>
        </div>
      </div>

      <div className="rounded-b-xl">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
