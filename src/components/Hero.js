import React from "react";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center items-center w-screen h-screen">
      <div className="">
        <HeroContent />
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col items-start justify-center space-y-3 relative ">
      <HeroHeading />
      <HeroDescription />
      <Heroimg />
      <CTAButton />
    </div>
  );
}
function HeroHeading() {
  return (
    <div flex flex-row items-center justify-center>
      <h3 className="text-white text-2xl font-bold">
        We're
        <span className="text-red-500 lg:text-[10rem] md:text-5xl font-bold font-commissioner"> BYTEGEIST</span>
      </h3>
    </div>
  );
}
function HeroDescription() {
  return (
    <div className="text-white w-[20rem] text-xl text-justify">
      <p>
        At ByteGeist, we're not just developers—we're architects of innovation.
        We specialize in creating bespoke web solutions tailored to your unique
        needs. Join us on the journey to digital excellence.
      </p>
    </div>
  );
}
function Heroimg() {
  return (
    <div className="absolute w-1/2 left-[19rem] top-[-4rem] lg:block hidden">
      <img src="heroimg@2x.png" className="h-[30rem]" />
    </div>
  );
}
function CTAButton() {
  return (
    <button className="p-3 bg-[#ff5353] text-white rounded-sm text-xl flex flex-row justify-center items-center h-[3rem] space-y-3">
      Contact us <span><img src="CTAButtonArrow.svg" className="w-[2.5rem]" /></span>
    </button>
  );
}
