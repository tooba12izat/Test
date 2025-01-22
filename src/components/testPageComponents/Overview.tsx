"use client"
import React from "react";
import OverviewCard from "./OverviewCard";
import Dropdown from "./Dropdown";

const data = [
  {
    title: "Paid Invoice",
    amount: "$1000.00",
    change: "14%",
    isPositive: false,
  },
  {
    title: "Pending Invoice",
    amount: "$100.00",
    change: "14%",
    isPositive: false,
  },
  {
    title: "Active Talents",
    amount: "05",
    change: "14%",
    isPositive: true,
  },
  {
    title: "Active Projects",
    amount: "10",
    change: "14%",
    isPositive: true,
  },
];

const Overview: React.FC = () => {
  const items = [
    { label: "Profile", onClick: () => alert("Profile clicked") },
    { label: "Settings", onClick: () => alert("Settings clicked") },
    { label: "Logout", onClick: () => alert("Logout clicked") },
  ];
  return (
    <div className=" basis-3/5 rounded-2xl bg-white shadow-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-medium text-[#181D27]">Overview</div>
        <Dropdown label="This Month" items={items}  />
      </div>
      <div className="flex gap-4">
        {data.map((item, index) => (
          <OverviewCard
            key={index}
            title={item.title}
            amount={item.amount}
            change={item.change}
            isPositive={item.isPositive}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
