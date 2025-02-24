import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex justify-between items-center h-16 md:h-20">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <img className="w-16 h-16" src="./logo.png" alt="Logo" />
        <span>LamaLogo</span>
      </Link>
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "O"}
        </div>
        <div
          className={`flex flex-col items-center justify-center
         bg-[#e6e6ff] w-full h-screen absolute top-16
         transition-all ease-in-out gap-8 font-medium text-lg ${
           open ? "-right-0" : "-right-[100%]"
         }`}
        >
          <Link to="/">Home</Link>
          <Link to="">Trending</Link>
          <Link to="">Most Popular</Link>
          <Link to="">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login ✌️
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="">Trending</Link>
        <Link to="">Most Popular</Link>
        <Link to="">About</Link>
        <Link to="">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login ✌️
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
