"use client"
import React from "react";
import Dropdown from "./Dropdown";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TimeTracking: React.FC = () => {
  const carddata = [
    {
      title: "Unbilled Hours",
      amount: "08:00:12",
      isPositive: false,
    },
    {
      title: "Unbilled Amount",
      amount: "$ 100.00",
      isPositive: false,
    },
    {
      title: "Billed Hours",
      amount: "03:33:33",
      isPositive: true,
    },
    {
      title: "Billed Amount",
      amount: "$ 10",
      isPositive: true,
    },
  ];
  const items = [
    { label: "Profile", onClick: () => alert("Profile clicked") },
    { label: "Settings", onClick: () => alert("Settings clicked") },
    { label: "Logout", onClick: () => alert("Logout clicked") },
  ];


  const data: ChartData<"bar", number[], string> = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Value",
        data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60], // Static values
        backgroundColor: "#3B82F6", // Tailwind blue
        borderRadius: 5, // Rounded bars
        barThickness: 20, // Width of each bar
      },
    ],
  };

  // Options for the chart
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      tooltip: {
        enabled: true, // Enables tooltips
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides the vertical grid lines
        },
        ticks: {
          color: "#6B7280", // Tailwind gray-500
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20, 
          color: "#6B7280", // Tailwind gray-500
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#E5E7EB", // Tailwind gray-200
        },
      },
    },
  };
  return (
    <div className="rounded-2xl flex-1 basis-3/5 bg-white shadow-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-medium text-[#181D27]">Time Tracking</div>
        <div className="flex gap-3">
          <Dropdown label="All Talents" items={items} />
          <Dropdown label="This Year" items={items} />
        </div>
      </div>
      <div className="flex gap-3 ">
        {carddata.map((item, index) => (
          <div key={index} className="flex flex-col items-start justify-between bg-white w-[169px] py-4 rounded-lg shadow-sm shadow-[#0A0D120D] border border-[#E9EAEB]">
            <p className="text-base font-normal px-4 text-gray-500">{item.title}</p>
            <div className={`text-xl font-semibold px-4 ${item.isPositive ? "text-[#27AE60]" : "text-gray-900"}`}>{item.amount}</div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-4xl mx-auto p-4 h-[300px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TimeTracking;
