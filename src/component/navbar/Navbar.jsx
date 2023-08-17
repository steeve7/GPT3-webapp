import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "../../assets/logo.svg";

const menus = [
  { li: "#home", label: "Home" },
  { id: "#wgpt3", label: "What is GPT?" },
  { id: "#possibility", label: "Open Ai" },
  { id: "#features", label: "Case Studies" },
  { id: "#blog", label: "Library" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between items-center md:py-[2rem] md:px-[6rem] py-[1.5rem] px-[4rem] md:p-0 p-[2rem]">
      <div className="flex-1 flex justify-start items-center">
        <div className="mr-[2rem]">
          <img src={Logo} alt="logo" className="w-[63px] h-[16px]" />
        </div>
        <div className="lg:flex flex-row hidden">
          {menus.map((menu, i) => (
            <p key={i} className="text-white font_family">
              <a href={menu.id}>{menu.label}</a>
            </p>
          ))}
        </div>
      </div>
      <div className="md:flex justify-end items-center hidden">
        <p className="text-white font_family">Sign in</p>
        <button
          type="button"
          className="text-white font_family py-[0.5rem] px-[1rem] bg-[#ff4820] rounded-[5px] border-0 outline-none"
        >
          Sign up
        </button>
      </div>
      <div className="ml-[1rem] lg:hidden relative flex">
        {toggleMenu ? (
          <RiCloseLine
            size={27}
            color="#fff"
            onClick={() => setToggleMenu(false)}
            className="cursor-pointer"
          />
        ) : (
          <RiMenu3Line
            size={27}
            color="#fff"
            onClick={() => setToggleMenu(true)}
            className="cursor-pointer"
          />
        )}
        {toggleMenu && (
          <div
            className="flex justify-end items-end flex-col text-end background p-[2rem] 
          absolute md:top-[40px] top-[20px] right-0 mt-[1rem] min-w-[230px] rounded-[5px] scale-up-center"
          >
            <div className="gpt3_navbar-menu_container-links">
              {menus.map((menu, i) => (
                <p key={i} className="text-white font_family py-[1rem] px-0">
                  <a href={menu.id}>{menu.label}</a>
                </p>
              ))}
              <div className="md:hidden block">
                <p className="text-white font_family py-[1rem] px-0">Sign in</p>
                <button
                  type="button"
                  className="text-white font_family py-[0.5rem] px-[1rem] bg-[#ff4820] rounded-[5px] border-0 outline-none"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
