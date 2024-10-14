import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
const MobileMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const onToggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: "0",
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="z-[999] relative" onClick={onToggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        className="fixed left-0 right-0 top-16 z-[999] h-full overflow-y-auto bg-[#18181A] text-white p-6 backdrop-blur"
      >
        <ul>
          {Menus?.map(({ name, subMenu }, i) => {
            const hasSubMenu = subMenu?.length > 0;
            const isClicked = clicked === i;
            return (
              <li key={name}>
                <span
                  className="flex-center-between cursor-pointer hover:bg-white/5 rounded-md p-4 relative"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"}`}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu?.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="flex-center p-2 cursor-pointer hover:bg-white/5 rounded-md gap-x-2"
                      >
                        <Icon size={16} />
                        <span>{name}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
