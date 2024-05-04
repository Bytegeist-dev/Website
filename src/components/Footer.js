import React from "react";

export function Footer() {
  return (
    <div className="bg-black-200 text-white flex justify-between items-center p-3 mt-[2rem]">
      <div className="logoContainer">
        <div className="logo-container flex items-center justify-between w-10 space-x-1">
          <img className="w-4" src="./logo.png" alt="logoimage" />
          <p className="text-sm font-commissioner font-bold">BYTEGEIST</p>
        </div>
      </div>
      <div className="ml-[2rem]">
        <p>Designed and Built by ByteGeist</p>
      </div>
      <div className="flex space-x-1">
        <a href="github.com/bytegeistdev"><img src="./github1@3x.png" className="w-[1.8rem]" /></a>
        <a href="linkedin.com/in/bytegeistdev"><img src="./linkedin1@2x.png" className="w-[1.8rem]" /></a>
        <a href="instagram.com/bytegeistdev"><img src="./instagram1@2x.png" className="w-[1.8rem]" /></a>
      </div>
    </div>
  );
}
