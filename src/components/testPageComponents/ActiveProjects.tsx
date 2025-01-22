"use client"
import React from "react";
import Image from "next/image";

type ProjectUser = {
  id: string;
  name: string;
  image: string;
};

const person = 'https://via.placeholder.com/40';

const renderUsers = (users: ProjectUser[]) => {
  const maxDisplay = 2;
  const extraCount = users?.length - maxDisplay;

  return (
    <div className="flex ">
      {users?.slice(0, maxDisplay).map((user, index) => (
        <Image
          key={user.id}
          src={user.image || person}
          alt={user.name}
          width={24}
          height={24}
          className={`w-8 h-8 rounded-full border-2 border-white ${index > 0 ? '-ml-2' : ''}`}
        />
      ))}
      {extraCount > 0 && (
        <div className="w-8 h-8 flex items-center justify-center bg-[#E0ECFF] text-[#5997FF] rounded-full border-2 border-white -ml-2">
          +{extraCount}
        </div>
      )}
    </div>
  );
};

const TaskProgressBar = ({ current, total }: { current: number; total: number }) => {
  const progress = (current / total) * 100;
  return (
    <div className="flex items-center space-x-2">
      <div className="flex-grow bg-gray-200 rounded-full h-2">
        <div className="bg-[#5997FF] h-2 rounded-full w-[139px]" style={{ width: `${progress}%` }}></div>
      </div>
      <span className="text-sm font-medium text-gray-700">{`${current}/${total}`}</span>
    </div>
  );
};

const ActiveProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'Project Alpha',
      team: [
        { id: '1', name: 'John Doe', image: '/Avatar.jpg' },
        { id: '2', name: 'Jane Smith', image: '/Avatar.jpg' },
        { id: '3', name: 'Alex Johnson', image: '/Avatar.jpg' },
      ],
      task: { current: 12, total: 90 },
      description:"Create a website for a startup"
    },
    {
      id: 2,
      name: 'Project Beta',
      team: [
        { id: '1', name: 'Michael Brown', image: '/Avatar.jpg' },
        { id: '2', name: 'Emily White', image: '/Avatar.jpg' },
      ],
      task: { current: 50, total: 100 },
       description:"Create a website for a startup"
    },
  ];

  return (
    <div className="rounded-2xl flex-1 bg-white shadow-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-medium text-[#181D27]">Active Projects</div>
        <button
          className=" text-center rounded-lg border border-[#D5D7DA] 
        shadow-sm px-3 py-2 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-indigo-500">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600">Name</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600">Teams</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 flex gap-1">Tasks <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_30_167)">
                  <path d="M6.81004 5.99998C6.96678 5.55442 7.27614 5.17872 7.68334 4.9394C8.09055 4.70009 8.5693 4.61261 9.03483 4.69245C9.50035 4.7723 9.92259 5.01433 10.2268 5.37567C10.5309 5.737 10.6974 6.19433 10.6967 6.66665C10.6967 7.99998 8.69671 8.66665 8.69671 8.66665M8.75004 11.3333H8.75671M15.4167 7.99998C15.4167 11.6819 12.4319 14.6666 8.75004 14.6666C5.06814 14.6666 2.08337 11.6819 2.08337 7.99998C2.08337 4.31808 5.06814 1.33331 8.75004 1.33331C12.4319 1.33331 15.4167 4.31808 15.4167 7.99998Z" stroke="#A4A7AE" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_30_167">
                    <rect width="16" height="16" fill="white" transform="translate(0.75)" />
                  </clipPath>
                </defs>
              </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-200">
                <td className="py-4 px-6">
                  <p className="text-sm font-medium text-gray-900">{project.name}</p>
                  <p className="text-sm font-normal text-gray-600">{project.description}</p>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-700">
                  {renderUsers(project.team)}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-700 w-[230px]">
                  <TaskProgressBar current={project.task.current} total={project.task.total} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ActiveProjects;
