"use client"

import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };
  return (
    <nav className="z-50" style={{
      background: "linear-gradient(90deg, #2128BD 26.98%, rgba(1, 95, 254, 0.65) 100%)",
    }}>
      <div className=" mx-5 flex justify-between items-center">
        <div className='flex gap-2 justify-center items-center'>
          <div className="text-3xl font-Bebas text-white text-center ">Logo</div>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#dashboard" className="text-white no-underline hover:bg-purple-300 px-3 py-2 rounded">Dashboard</a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center space-x-2 text-[#E7DBD0] text-base font-medium px-3 py-2 rounded hover:bg-purple-300 focus:outline-none"
            >
              <span>Appointment</span>
              <Image src="/chevron-down.png" width={20} height={16} alt="help" className="ml-4 mt-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute bg-white text-black shadow-lg rounded mt-2 w-48">
                <a href="#option1" className="block px-4 py-2 text-sm">Option 1</a>
                <a href="#option2" className="block px-4 py-2 text-sm">Option 2</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center space-x-2 text-[#E7DBD0] text-base font-medium px-3 py-2 rounded hover:bg-purple-300 focus:outline-none"
            >
              <span>Workspace</span>
              <Image src="/chevron-down.png" width={20} height={16} alt="help" className="ml-4 mt-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute bg-white text-black shadow-lg rounded mt-2 w-48">
                <a href="#option1" className="block px-4 py-2 text-sm">Option 1</a>
                <a href="#option2" className="block px-4 py-2 text-sm">Option 2</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center space-x-2 text-[#E7DBD0] text-base font-medium px-3 py-2 rounded hover:bg-purple-300 focus:outline-none"
            >
              <span>Finance</span>
              <Image src="/chevron-down.png" width={20} height={16} alt="help" className="ml-4 mt-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute bg-white text-black shadow-lg rounded mt-2 w-48">
                <a href="#option1" className="block px-4 py-2 text-sm">Option 1</a>
                <a href="#option2" className="block px-4 py-2 text-sm">Option 2</a>
              </div>
            )}
          </div>
          <a href="#inbox" className="text-[#E7DBD0] text-base font-medium no-underline  px-3 py-2 rounded">Inbox</a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black hover:bg-purple-300 px-3 py-2 rounded focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-[#9FBBFF80] rounded-full p-[6px]">
            <Image src="/help-circle.png" width={17} height={17} alt="help" />
          </div>

          {/* Uniform Separator */}
          <div className="bg-[#9FBBFF80] h-[60px] w-[0.5px]"></div>

          <div className="relative">
            <div className="bg-[#9FBBFF80] rounded-full p-[6px]">
              <Image src="/bell.png" width={17} height={17} alt="bell" />
            </div>
            <span className="absolute top-[0] right-[0] w-[15px] h-[15px] bg-[#E4413C] rounded-full transform -translate-x-0 -translate-y-2 text-white text-center flex justify-center items-center text-[9.64px]">
              8
            </span>
          </div>

          {/* Uniform Separator */}
          <div className="bg-[#9FBBFF80] h-[60px] w-[0.5px]"></div>

          <div className="relative">
            <div className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full md:me-0">
              <Image
                width={26}
                height={26}
                src='/Profile.png'
                alt="Admin photo"
              />
            </div>
            <span className="absolute top-[0] left-[0] w-3 h-3 bg-green-500 border-2 border-white rounded-full transform -translate-x-1 -translate-y-0.5"></span>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#skills" className="block text-black no-underline hover:bg-purple-300 px-3 py-2 rounded">Skills</a>
          <a href="#projects" className="block text-black no-underline hover:bg-purple-300 px-3 py-2 rounded">Projects</a>
          <a href="#contact" className="block text-black no-underline hover:bg-purple-300 px-3 py-2 rounded">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Header;