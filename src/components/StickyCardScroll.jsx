import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainBtn from "./MainBtn";

const sections = [
  {
    id: "Subscriptions",
    title: "Monetize Your Content Through Subscriptions",
    image: "/scrollphn.png",
  },
  {
    id: "Messaging",
    title: "Engage with Your Fans Through Direct Messaging",
    image: "/hero1.png",
  },
  {
    id: "Pay-to-view",
    title: "Monetize Your Content with Pay-to-View Access",
    image: "/scrollphn.png",
  },
];

export default function StickyCardScroll() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentIndex = 0;
      sections.forEach((section, index) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top < window.innerHeight / 3 &&
            rect.bottom > window.innerHeight / 3
          ) {
            currentIndex = index;
          }
        }
      });
      setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bg-gradient-to-tr relative to-[#f7f6f2]  from-red-100">
        <img src="/side.png" alt="side" className="absolute right-0 top-10" />
        <img src="/sideb.png" alt="side" className="absolute left-0 bottom-10" />
      <div className="relative max-w-7xl mx-auto justify-between flex gap-40 px-10 py-20">
        {/* Left Side - Scrollable Content */}
        <div className="w-1/2 space-y-80">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="space-y-4 min-h-screen flex flex-col justify-center"
            >
              <div className="px-3 py-1 bg-gray-200 rounded-full w-fit mb-4">
                💸{section.id}
              </div>
              <h2 className="text-4xl leading-[63px] font-bold">
                {section.title.split(" ").map((word, index, arr) => (
                  <span
                    key={index}
                    className={index === arr.length - 1 ? "text-red-500" : ""}
                  >
                    {word}
                    {index !== arr.length - 1 ? " " : ""}
                  </span>
                ))}
              </h2>
              <div>
                <MainBtn title={"Sign Up"} />
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Sticky Image with Animation */}
        <div className="w-1/2 h-screen flex items-center sticky top-20">
          <AnimatePresence mode="wait">
            <motion.img
              key={sections[activeIndex].id}
              src={sections[activeIndex].image}
              alt={sections[activeIndex].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl shadow-lg w-80 h-[500px] object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
