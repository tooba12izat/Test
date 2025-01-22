"use client"
import React from "react";
import Image from "next/image";

const ActiveTalent: React.FC = () => {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      hiredDate: '18 Dec 2024',
      totalHours: '35 hrs',
      image: '/Avatar.jpg', // Placeholder image
    },
    {
      id: 2,
      name: 'Jane Smith',
      hiredDate: '15 Nov 2023',
      totalHours: '40 hrs',
      image: '/Avatar.jpg', // Placeholder image
    },
    {
      id: 3,
      name: 'Alex Johnson',
      hiredDate: '10 Sep 2022',
      totalHours: '30 hrs',
      image: '/Avatar.jpg', // Placeholder image
    },
  ];


  return (
    <div className="rounded-2xl flex-1 bg-white shadow-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-medium text-[#181D27]">Active Talents</div>
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
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600">Hired Date</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600">Total Working Hours</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b border-gray-200">
                <td className="py-4 px-6 text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-2">
                    <Image src={employee.image} alt={employee.name} width={40} height={40} className=" rounded-full" />
                    <span>{employee.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-700">{employee.hiredDate}</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-">{employee.totalHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ActiveTalent;
