import React from "react";

export function Services() {
  return (
    <div className="mt-20">
      <WebCards />
      <UICards />
    </div>
  );
}
function WebCards() {
  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Web Development</h1>
          <div className="max-w-md mx-auto">
            <p className="text-white mb-4 text-center">
              We specialize in comprehensive web development services, crafting
              bespoke solutions that empower businesses to thrive in the digital
              landscape.
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="text-white rounded-lg shadow-md p-6 mr-4 flex flex-col items-center">
            <img
              src="scissors-1@2x.png"
              alt="Card 1 Icon"
              className="w-8 h-8 mb-2" />
            <h2 className="text-xl font-bold mb-2">Customized Solutions</h2>
            <div className="max-w-sm mx-auto text-center">
              <p>
                Tailored web development solutions designed to meet your unique
                business objectives and requirements.
              </p>
            </div>
          </div>
          <div className="text-white rounded-lg shadow-md p-6 mr-4 flex flex-col items-center">
            <img
              src="password-key-1@2x.png"
              alt="Card 1 Icon"
              className="w-8 h-8 mb-2" />
            <h2 className="text-xl font-bold mb-2">Security</h2>
            <div className="max-w-sm mx-auto text-center">
              <p>
                Robust security measures implemented to safeguard your website
                and sensitive data against cyber threats.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src="imac-1@2x.png"
              alt="Card 1 Icon"
              className="w-8 h-8 mb-2" />
            <h2 className="text-xl font-bold mb-2">
              Cross-Platform Compatibility
            </h2>
            <div className="max-w-sm mx-auto text-center">
              <p>
                Websites optimized for seamless performance across various
                browsers and devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function UICards() {
  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">UI/UX Cards</h1>
          <div className="max-w-md mx-auto">
            <p className="text-white mb-4 text-center">
              Crafting intuitive and visually appealing user experiences is at
              the heart of our UI/UX development process.
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="text-white rounded-lg shadow-md p-6 mr-4 flex flex-col items-center">
            <img
              src="User.png"
              alt="Card 1 Icon"
              className="w-8 h-8 mb-2" />
            <h2 className="text-xl font-bold mb-2">User-Centric Design</h2>
            <div className="max-w-sm mx-auto text-center">
              <p>
                Our designs prioritize user needs, ensuring seamless navigation
                and engagement.
              </p>
            </div>
          </div>
          <div className="text-white rounded-lg shadow-md p-6 mr-4 flex flex-col items-center">
            <img
              src="Geometric Flowers.png"
              alt="Card 1 Icon"
              className="w-8 h-8 mb-2" />
            <h2 className="text-xl font-bold mb-2">Visual Aesthetics</h2>
            <div className="max-w-sm mx-auto text-center">
              <p>
                We blend creativity with functionality to create interfaces that
                captivate and inspire.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src="Responsive.png"
              alt="Card 1 Icon"
              className="w-8 h-8 mb-2" />
            <h2 className="text-xl font-bold mb-2">Responsive Design</h2>
            <div className="max-w-sm mx-auto text-center">
              <p>
                Our solutions adapt flawlessly across devices, providing a
                consistent experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
