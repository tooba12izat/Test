import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  amount: string;
  change?: string;
  isPositive: boolean;
}

const OverviewCard: React.FC<CardProps> = ({ title, amount, change, isPositive }) => {
  return (
    <div className="flex flex-col items-start justify-between bg-white w-[169px] pt-4 rounded-lg shadow-sm shadow-[#0A0D120D] border border-[#E9EAEB]">
      <p className="text-base font-normal px-4 text-[#181D27]">{title}</p>
      <div className="text-xl font-semibold text-[#181D27]  px-4">{amount}</div>
      {change && (
      <div
        className={`text-[10px] mt-1 font-normal px-4 ${
          isPositive ? "text-[#27AE60]" : "text-[#E4413C]"
        }`}
      >
        {isPositive ? "+" : "-"}{change} from last month
      </div>
      )}
      <div className="w-full mt-12">
        {/* Placeholder for the chart */}
        <Image
        src={isPositive ? "/greenFrame.svg" : "/redFrame.png"} // Dynamic image based on isPositive
        alt="Wave Design"
        width={169}
        height={45}
        className=""
      />
      </div>
    </div>
  );
};

export default OverviewCard;
