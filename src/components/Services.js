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
    <div className="flex justify-center items-center h-1/2 md:h-1/2 text-white mb-5 md:mb-0">
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
        <div className="flex flex-col md:flex-row justify-center mb-8">
          <ServiceCard
            imageSrc="scissors-1@2x.png"
            title="Customized Solutions"
            description="Tailored web development solutions designed to meet your unique business objectives and requirements."
          />
          <ServiceCard
            imageSrc="password-key-1@2x.png"
            title="Security"
            description="Robust security measures implemented to safeguard your website and sensitive data against cyber threats."
          />
          <ServiceCard
            imageSrc="imac-1@2x.png"
            title="Cross-Platform Compatibility"
            description="Websites optimized for seamless performance across various browsers and devices."
          />
        </div>
      </div>
    </div>
  );
}

function UICards() {
  return (
    <div className="flex justify-center items-start h-1/2 md:h-1/2 text-white mt-[5rem]">
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">UI/UX</h1>
          <div className="max-w-md mx-auto">
            <p className="text-white mb-4 text-center">
              Crafting intuitive and visually appealing user <br></br>experiences is at
              the heart of our UI/UX development process.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center mb-8">
          <ServiceCard
            imageSrc="User.png"
            title="User-Centric Design"
            description="Our designs prioritize user needs, ensuring seamless navigation and engagement."
          />
          <ServiceCard
            imageSrc="Geometric Flowers.png"
            title="Visual Aesthetics"
            description="We blend creativity with functionality to create interfaces that captivate and inspire."
          />
          <ServiceCard
            imageSrc="Responsive.png"
            title="Responsive Design"
            description="Our solutions adapt flawlessly across devices, providing a consistent experience."
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ imageSrc, title, description }) {
  return (
    <div className="text-white rounded-lg shadow-md p-6 mr-4 mb-1 flex flex-col items-center max-w-sm md:w-[20rem]">
      <img src={imageSrc} alt="Card Icon" className="w-8 h-8 mb-2" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="max-w-sm mx-auto text-center">
        <p>{description}</p>
      </div>
    </div>
  );
}
