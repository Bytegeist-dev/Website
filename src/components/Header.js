import React from "react";

export function Header() {
  return (
    <header className="z-10 text-white header flex flex-row items-center content-center justify-between bg-gray-900 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-20 p-[1rem] sticky top-0">
      <Logo />
      <NavButtons />
      <ButtonOne />
    </header>
  );
}

function Logo() {
  return (
    <div className="logo-container flex items-center justify-between w-20 space-x-1">
      <img className="w-5" src="./logo.png" alt="logoimage" />
      <p className="text-xl font-commissioner font-bold">BYTEGEIST</p>
    </div>
  );
}

function NavButtons() {
  return (
    <div className="hidden md:flex flex-row items-center justify-between">
      <a href="#" className="mx-3">About</a>
      <a href="#" className="mx-3">Projects</a>
      <a href="#" className="mx-3">Services</a>
    </div>
  );
}

function ButtonOne() {
  return (
    <button className="rounded-md bg-[#474eff] text-white px-4 py-2">
      Contact Us
    </button>
  );
}
