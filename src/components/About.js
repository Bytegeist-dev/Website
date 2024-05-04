import React from "react";

export function About() {
  return (
    <div className="text-white w-screen  p-5 mt-10 flex flex-col">
      <AboutMain />
      <AboutFeatures />
    </div>
  );
}
function AboutMain() {
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="flex flex-col space-y-4 text-left max-w-[30rem]">
        <h2 className="font-commissioner font-bold text-2xl">
          Why <span className="text-blue-500">Us?</span>
        </h2>
        <p className="font-nunito">
          We believe technology has the power to shape a better future. Our work
          blends seamless functionality with impeccable design, creating
          solutions that simplify tasks and enhance user experiences. We are
          relentless in our pursuit of excellence because we understand the
          impact our work has on your business and your customers.
        </p>
      </div>

      <div className="w-[20rem] mt-4">
        <img src="whyusimage@2x.png" alt="Why Us Image" />
      </div>
    </div>
  );
}
function AboutFeatures() {
  return (
    <div className="flex flex-col space-y-10 items-center">
      <FeatureItemRightOne />
      <div className="flex flex-row space-x-10">
        <FeatureItemRightTwo />
        <FeatureItemLeftOne />
      </div>
    </div>
  );
}
function FeatureItemRightOne() {
  return (
    <div className="max-w-[40rem]">
      <h2 className="font-commissioner text-2xl font-bold text-right">
        Innovation.
      </h2>
      <div className="flex item-end justify-end">
        <img src="arrow-left.svg" className="w-1/3" />
      </div>
      <p>
        We will craft cutting-edge web experiences that leverage the latest
        technologies, pushing the boundaries of design and functionality.
      </p>
    </div>
  );
}
function FeatureItemRightTwo() {
  return (
    <div className="max-w-[40rem]">
      <h2 className="font-commissioner text-2xl font-bold text-right">
        User-Centric.
      </h2>
      <div className="flex item-end justify-end">
        <img src="arrow-left.svg" className="w-1/3" />
      </div>
      <p>
        We will create intuitive and seamless web interfaces that prioritize
        your users' needs, making their interactions effortless and enjoyable.
      </p>
    </div>
  );
}
function FeatureItemLeftOne() {
  return (
    <div className="max-w-[40rem]">
      <h2 className="font-commissioner text-2xl font-bold text-left">
        Excellence.
      </h2>
      <div className="flex item-start justify-start">
        <img src="arrow-right.svg" className="w-1/3" />
      </div>
      <p>
        We are committed to delivering exceptional web solutions that are
        well-crafted, perform flawlessly, and surpass your expectations.
      </p>
    </div>
  );
}
