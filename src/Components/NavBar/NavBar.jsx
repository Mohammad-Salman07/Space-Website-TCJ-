// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/logo.png"

const NavBar = () => {
  return (
   <div data-aos="fade-down" className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4">
     <div className="container">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 text-white font-bold text-2xl">
          <img src={Logo} alt="" className="w-10 ml-5"/>
          <span>TCJ Space </span>
        </div>
        <div className="text-white hidden md:block">
            <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
                <li>
                    <a href="#"> About</a>
                </li>
                <li>
                    <a href="#">Tecnology</a>
                </li>
                <li>
                    <a href="#">Galxy</a>
                </li>
                <li>
                    <a href="#">Satelite</a>
                </li>
            </ul>
        </div>
        <div>
            <button className="text-white border-2 border-white px-3 py-1 rounded-md mr-5">
                Login
            </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default NavBar;
