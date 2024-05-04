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
    <div className="flex flex-row justify-between items-center space-x-10 overflow-x-auto relative h-max overflow-y-hidden">
      <div className="image-container h-full relative">
        <img src="projectimagecontainer-1@2x.png" alt="project1" className="w-[15rem] h-max" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 1</p>
        </div>
      </div>
      <div className="image-container relative">
        <img src="projectimagecontainer-2@2x.png" alt="project2" className="w-[15rem] h-full" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 2</p>
        </div>
      </div>
      <h1 className="text-9xl font-commissioner font-bold text-white">Built</h1>
      <div className="image-container rounded-lg relative">
        <img src="projectimagecontainer-3@2x.png" alt="project3" className="w-[15rem] h-max rounded-md" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity  duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 3</p>
        </div>
      </div>
      <div className="image-container relative">
        <img src="projectimagecontainer-4@2x.png" alt="project4" className="w-[15rem] h-max" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 4</p>
        </div>
      </div>
    </div>
  );
}
function ProjectRowTwo() {
  return (
    <div className="flex flex-row justify-between items-center space-x-10 overflow-x-auto relative overflow-y-hidden">
      <div className="image-container h-full relative">
        <img src="projectimagecontainer-5@2x.png" alt="project5" className="w-[15rem] h-max rounded-lg" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 5</p>
        </div>
      </div>
      <div className="image-container relative">
        <img src="projectimagecontainer-6@2x.png" alt="project6" className="w-[15rem] h-max rounded-lg" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 6</p>
        </div>
      </div>
      <h1 className="text-9xl font-commissioner font-bold text-white">By</h1>
      <div className="image-container h-full relative">
        <img src="projectimagecontainer-7@2x.png" alt="project7" className="w-[15rem] h-max rounded-lg" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 7</p>
        </div>
      </div>
      <div className="image-container relative">
        <img src="projectimagecontainer-8@2x.png" alt="project8" className="w-[15rem] h-max rounded-lg" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 8</p>
        </div>
      </div>
    </div>
  );
}
function ProjectRowThree() {
  return (
    <div className="flex flex-row justify-between items-center space-x-10 overflow-x-auto relative overflow-y-hidden">
      <div className="image-container relative">
        <img src="projectimagecontainer-9@2x.png" alt="project9" className="w-[15rem] h-max rounded-lg" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 9</p>
        </div>
      </div>
      <div className="image-container relative">
        <img src="projectimagecontainer-10@2x.png" alt="project10" className="w-[15rem] h-max rounded-lg" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 10</p>
        </div>
      </div>
      <h1 className="text-9xl font-commissioner font-bold text-white">ByteGeist</h1>
      <div className="image-container relative">
        <img src="projectimagecontainer-11@2x.png" alt="project11" className="w-[15rem]  h-max rounded-lg" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 11</p>
        </div>
      </div>
      <div className="image-container relative">
        <img src="projectimagecontainer-12@2x.png" alt="project12" className="w-[15rem] h-max rounded-lg" />
        <div className="overlay absolute inset-0 bg-white opacity-0 transition-opacity duration-300 rounded-lg"></div>
        <div className="text absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white">Project 12</p>
        </div>
      </div>
    </div>
  );
}
