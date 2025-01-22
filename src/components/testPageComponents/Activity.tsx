"use client"
import React from "react";
import Dropdown from "./Dropdown";

interface TimelineItem {
  id: number;
  user: string;
  action: string;
  project: string;
  date: string;
  time: string;
}

const Activity: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      user: "Joe Doe",
      action: "marked",
      project: "Website Design Project",
      date: "8 Feb 2024",
      time: "07:23 P.M",
    },
    {
      id: 2,
      user: "Joe Doe",
      action: "marked",
      project: "Website Design Project",
      date: "8 Feb 2024",
      time: "07:23 P.M",
    },
    {
      id: 3,
      user: "Joe Doe",
      action: "marked",
      project: "Website Design Project",
      date: "8 Feb 2024",
      time: "07:23 P.M",
    },
    {
      id: 4,
      user: "Joe Doe",
      action: "marked",
      project: "Website Design Project",
      date: "8 Feb 2024",
      time: "07:23 P.M",
    },
  ];

  const items = [
    { label: "Profile", onClick: () => alert("Profile clicked") },
    { label: "Settings", onClick: () => alert("Settings clicked") },
    { label: "Logout", onClick: () => alert("Logout clicked") },
  ];

  return (
    <div className="rounded-2xl flex-1 basis-2/5 bg-white shadow-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-medium text-[#181D27]">Activity</div>
        <Dropdown label="Today" items={items} />
      </div>
      <div className="max-w-2xl mx-auto mt-8">
      <div className="relative">
        {/* Vertical Dashed Line */}
        <div className="absolute top-0 left-[9px] w-0.5 h-full border-l-2 border-dashed border-gray-300"></div>

        {timelineData.map((item) => (
          <div key={item.id} className="relative flex items-center space-x-4 mb-6">
            {/* Blue Dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-2 h-2 ml-[5px] bg-[#015FFE] rounded-full"></div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <p className="text-xl text-gray-900">
                <span className="font-normal">{item.user}</span> {item.action}{" "}
                <span className="font-medium ">
                  “{item.project}”
                </span>{" "}
                as completed
              </p>
              <p className="text-xl text-gray-500 font-normal">{`${item.date} ${item.time}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>

        );
        };

export default Activity;
