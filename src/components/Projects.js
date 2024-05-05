import React from "react";
import "./Project.css";

export function Projects() {
  return (
    <div className="h-50vh mt-20 overflow-hidden flex flex-col space-y-10">
      <ProjectRowOne />
      <ProjectRowTwo />
      <ProjectRowThree />
    </div>
  );
}

function ProjectRowOne() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-5 md:space-y-0 md:space-x-5 md:overflow-x-auto relative overflow-y-hidden">
      <ProjectComponent image="projectimagecontainer-1@2x.png" alt="project1" text="Project 1" />
      <ProjectComponent image="projectimagecontainer-2@2x.png" alt="project2" text="Project 2" />
      <h1 className="text-9xl font-commissioner font-bold text-white col-span-1 md:col-span-1">Built</h1>
      <ProjectComponent image="projectimagecontainer-3@2x.png" alt="project3" text="Project 3" />
      <ProjectComponent image="projectimagecontainer-4@2x.png" alt="project4" text="Project 4" />
    </div>
  );
}

function ProjectRowTwo() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-5 md:space-y-0 md:space-x-5 md:overflow-x-auto relative overflow-y-hidden">
      <ProjectComponent image="projectimagecontainer-5@2x.png" alt="project5" text="Project 5" />
      <ProjectComponent image="projectimagecontainer-6@2x.png" alt="project6" text="Project 6" />
      <div className="md:flex md:flex-col md:items-center md:justify-center md:col-span-5">
        <h1 className="text-9xl font-commissioner font-bold text-white">By</h1>
      </div>
      <ProjectComponent image="projectimagecontainer-7@2x.png" alt="project7" text="Project 7" />
      <ProjectComponent image="projectimagecontainer-8@2x.png" alt="project8" text="Project 8" />
    </div>
  );
}

function ProjectRowThree() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-5 md:space-y-0 md:space-x-5 md:overflow-x-auto relative overflow-y-hidden">
      <ProjectComponent image="projectimagecontainer-9@2x.png" alt="project9" text="Project 9" />
      <ProjectComponent image="projectimagecontainer-10@2x.png" alt="project10" text="Project 10" />
      <h1 className="text-9xl font-commissioner font-bold text-white col-span-1 md:col-span-1">Us</h1>
      <ProjectComponent image="projectimagecontainer-11@2x.png" alt="project11" text="Project 11" />
      <ProjectComponent image="projectimagecontainer-12@2x.png" alt="project12" text="Project 12" />
    </div>
  );
}

function ProjectComponent({ image, alt, text }) {
  return (
    <div className="image-container relative group">
      <img src={image} alt={alt} className="w-full h-auto rounded-lg group-hover:opacity-70 transition-opacity duration-300" />
      <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-0 rounded-[3.7rem]"></div>
      <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
}


