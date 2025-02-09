import { Link } from "react-router-dom";
import MainBtn from "./MainBtn";

export default function Navbar() {
  return (
    <div className="absolute left-0 right-0">

<nav className="flex max-w-7xl mx-auto justify-between items-center px-8 py-4 ">
   
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
       <Link className="hover:text-black">
       fanvue AI
       </Link> <a href="#" className="hover:text-black">fanvue AI</a>
        <Link className="hover:text-black">Our Mission</Link>
        <Link className="hover:text-black">Support</Link>
        <Link className="hover:text-black">Login</Link>
        <div>
        <MainBtn title={"Sign Up"} />
      </div>
      </div>



     
      
    </nav>
    </div>
    
  );
}
