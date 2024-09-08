import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-slate-800/70 shadow-md z-10">
      <div className="flex">
        {/* Logo Section */}
        <div className="relative flex-none w-24 md:w-36 flex items-center justify-center ml-8 sm:ml-20">
          <img
            src="./src/assets/greenfield.png"
            alt="Logo"
            className="absolute -top-1 left-0 w-32 h-32 md:w-40 md:h-40 object-contain transform scale-130"
          />
        </div>

        {/* Navbar Content Section */}
        <div className="flex-1 grid grid-rows-2">
          {/* Top Row: Links or Navigation Items */}

          <div className="flex items-center justify-center sm:justify-end  ">
            <h1 className="font-mono tracking-tight text-2xl sm:text-3xl md:text-5xl font-bold text-white pt-2 ml-1 sm:mr-20">
              Grienfield Academy
            </h1>
          </div>

          {/* Bottom Row: Additional Links or Search Bar */}
          <div className="flex items-center justify-center sm:text-xl sm:justify-end sm:mr-20">
            <div className="flex space-x-4">
              <a href="#" className="text-white ">
                About
              </a>
              <a href="#" className="text-white ">
                Contact
              </a>
              <a href="#" className="text-white ">
                Teachers Panel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
