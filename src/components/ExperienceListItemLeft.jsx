import React from "react";


const ExperienceListItemLeft = ({title, description, date, company}) => {
  return (
    <div className="flex justify-between h-48">
      {/* LEFT */}
      <div className="w-1/3">
        {/* JOB TITLE */}
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
          {title}
        </div>
        {/* JOB DESCRIPTION */}
        <div className="p-3 text-sm italic">
          {description}
        </div>
        {/* JOB DATE */}
        <div className="p-3 text-red-400 text-sm font-semibold">
          {date}
        </div>
        {/* JOB COMPANY */}
        <div className="bg-white p-2 rounded text-sm font-semibold w-fit">
          {company}
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
