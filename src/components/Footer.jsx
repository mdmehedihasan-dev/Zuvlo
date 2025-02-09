import { FaGithub, FaSlack } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import MainBtn from "./MainBtn";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-pink-100 p-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center ">
        {/*================== footer top banner part ================== */}
        <div className="bg-[#262626] text-white  rounded-lg w-full  flex flex-col md:flex-row  justify-between">
          <h2 className="text-5xl w-2/3 leading-16 font-bold py-6 px-20">
            Become Part of the Fastest Growing Community of Creators
          </h2>
          <div className="mt-4 md:mt-0 w-1/3 relative">
            <img
              src="/mobileimage.png"
              alt="Mobile Mockup"
              className="w-40 md:w-72 absolute bottom-0 "
            />
          </div>
        </div>
        {/* ==================footer top banner part ================== */}

        {/* ==================footer bottom banner part ================== */}

        <div className="flex justify-between mb-10 gap-x-[500px] items-center">
          <div>
            <div className="mt-10 flex flex-col items-center">
            <img className="w-[243px]" src="logo.png" alt="footer logo" />
              <div className="flex space-x-4 mt-2">
                <span className="bg-red-600 p-1.5 rounded-md">
                  <FaGithub color="#fff" size={30} />
                </span>
                <span className="bg-red-600 p-1.5 rounded-md">
                  <FaXTwitter color="#fff" size={30}  />
                </span>
                <span className="bg-red-600 p-1.5 rounded-md">
                <IoLogoLinkedin color="#fff" size={30}  />
                </span>
                <span className="bg-red-600 p-1.5 rounded-md">
                <FaSlack  color="#fff" size={30} />

                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-10 w-full max-w-3xl bg-[#262626] p-6  rounded-lg text-white">
              <p className="text-[#757575]">
                Sign up for our newsletter and join the growing Rig.dev
                community.
              </p>
              <div className="flex mt-4 gap-x-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="p-2 rounded-l-md w-1/2 text-[#757575] border-[#484848]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 w-1/2 text-[#757575] "
                />
                <MainBtn title={"Subscribe"} rounded={"rounded-md"} />
              </div>
            </div>
          </div>
        </div>
        {/* ==================footer bottom banner part ================== */}

        <div className="w-full h-[1px] bg-black"></div>

        <div className="mt-6 self-start text-black text-sm">
          <div className="flex space-x-4 mt-2">
          <p>&copy; 2023 RigDev ApS</p>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy & Cookies policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
