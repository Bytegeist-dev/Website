import React from "react";

export function Footer() {
  return (
    <div className="bg-black-200 text-white flex flex-row justify-between items-center p-3 mt-[2rem]">
      <div className="logo-container flex items-center space-x-1">
        <img className="w-3 md:w-4" src="./logo.png" alt="logoimage" />
        <p className="text-xs md:text-sm lg:text-base font-commissioner font-bold">BYTEGEIST</p>
      </div>
      <div className="mt-2 md:mt-0">
        <p className="text-xs md:text-sm lg:text-base">Designed and Built by ByteGeist</p>
      </div>
      <div className="flex space-x-2 md:space-x-4 mt-2 md:mt-0">
        <a href="github.com/bytegeistdev"><img src="./github1@3x.png" className="w-[1.5rem] md:w-[1.8rem]" alt="GitHub" /></a>
        <a href="linkedin.com/in/bytegeistdev"><img src="./linkedin1@2x.png" className="w-[1.5rem] md:w-[1.8rem]" alt="LinkedIn" /></a>
        <a href="instagram.com/bytegeistdev"><img src="./instagram1@2x.png" className="w-[1.5rem] md:w-[1.8rem]" alt="Instagram" /></a>
      </div>
    </div>
  );
}
