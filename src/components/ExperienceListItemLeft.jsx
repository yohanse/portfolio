import React from "react";

const ExperienceListItemLeft = () => {
  return (
    <div className="flex justify-between h-48">
      {/* LEFT */}
      <div className="w-1/3">
        {/* JOB TITLE */}
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
          Head of Remote Education
        </div>
        {/* JOB DESCRIPTION */}
        <div className="p-3 text-sm italic">
          My current employment. way better than the position before!
        </div>
        {/* JOB DATE */}
        <div className="p-3 text-red-400 text-sm font-semibold">
          2024 - Present
        </div>
        {/* JOB COMPANY */}
        <div className="bg-white p-2 rounded text-sm font-semibold w-fit">
          A2SV
        </div>
      </div>
      {/* CENTER */}
      <div className="w-fit">
        {/* LINE */}
        <div className="w-1 h-full bg-gray-600 relative">
          {/* LINE CIRCLE */}
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-1/3"></div>
    </div>
  );
};

export default ExperienceListItemLeft;
