import { motion } from "framer-motion";
import { useState } from "react";
import LogoSlider from "./LogoSlider";
import MainBtn from "./MainBtn";
import Creator from "./Creator";

const HeroSection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Adjust movement based on screen center
    const moveX = (clientX - window.innerWidth / 2) / 15; // 
    const moveY = (clientY - window.innerHeight / 2) / 15;

    setPosition({ x: moveX, y: moveY });
  };

  return (
    <section
      className="bg-gradient-to-tl from-[#e0d7df] to-white"
      onMouseMove={handleMouseMove} 
    >
      <div className="max-w-7xl mx-auto pt-20">
        <div className="relative py-16 px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Join Forces, Innovate Freely, and Reap the Rewards
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              The creator subscription platform for the future. Sign up before the
              end of the month & take home 85% for 3 months!
            </p>
            <div className="mt-6 flex gap-4">
              <MainBtn title={"Sign Up"} />
              <button className="bg-[#FF291933] text-black px-6 py-3 rounded-full text-lg font-semibold">
                Login
              </button>
            </div>
          </div>

          {/* Right Side - Image with Mouse  */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
            <motion.img
              src="/hero1.png"
              alt="Mobile UI"
              className="w-80 md:w-96 transform rotate-6 shadow-lg"
              animate={{
                x: position.x, // Moves left/right
                y: position.y, // Moves up/down
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            />
          </div>
          <div className="w-96 justify-items-end">
          <Creator/>
          </div>
        </div>

        <LogoSlider />
      </div>
    </section>
  );
};

export default HeroSection;
