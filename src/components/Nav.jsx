import Logo from "../assets/logo.webp";
import React, { useEffect, useState } from "react";
import { Menus } from "../utils";
import DesktopMenu from "../components/DesktopMenu";
import MobileMenu from "../components/MobileMenu";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-16 fixed inset-0 flex-center text-[15px] duration-500 z-[999] text-white ${
        isScrolled ? "bg-[#18181A] " : "bg-transparent"
      }`}
    >
      <nav className="px-3  w-full max-w-7xl mx-auto flex-center-between">
        <div className="flex-center gap-x-3 z-[999] relative">
          {/* <img src={Logo} alt="logo" className="size-8" /> */}
          <h3 className="text-xl font-semibold">Navakarana</h3>
        </div>
        {/* Menus */}
        {/* Desktop Menu */}
        <ul className="lg:flex-center hidden gap-x-1 ">
          {Menus.map((menu) => (
            <DesktopMenu menu={menu} key={menu.name} />
          ))}
        </ul>

        <div className="lg:hidden flex-center gap-x-5">
          <MobileMenu Menus={Menus} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
