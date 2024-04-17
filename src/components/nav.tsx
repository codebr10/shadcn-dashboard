"use client";

import { useState } from "react";
import {
  Bolt,
  Box,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  UsersRound,
} from "lucide-react";
import { Button } from "./ui/button";
import CustomLink from "./customLink";
import { seed } from "@/data/seed";

const iconMap: Record<string, React.FC<{}>> = {
  dashboard: LayoutDashboard,
  users: UsersRound,
  orders: Box,
  settings: Bolt,
};

const Nav = () => {
  const { menuItems } = seed;

  const [isOpen, setIsOpen] = useState(true);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav
      className={`relative bg-gray-100 border-r-gray-200 border-r-[1px] max-w-20 sm:max-w-48 flex justify-center pt-24 ${isOpen ? "w-1/4" : "w-20"}`}
    >
      <Button
        onClick={handleIsOpen}
        className="hidden sm:block absolute top-6 transform right-[-22px] bg-gray-400 text-white hover:bg-gray-800 p-2 w-11 h-11 rounded-full"
      >
        {isOpen ? (
          <ChevronLeft className="h-6 w-6" />
        ) : (
          <ChevronRight className="h-6 w-6" />
        )}
      </Button>
      <ul className="p-4">
        {menuItems.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <li key={item.id}>
              <CustomLink href={item.link} name={item.title}>
                <Icon />
                <span className={`${isOpen ? "hidden sm:block" : "!hidden"}`}>
                  {item.title}
                </span>
              </CustomLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
