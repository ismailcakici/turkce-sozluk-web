import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <div className="w-full h-14 rounded-box bg-base-200 shadow-lg flex items-center justify-between pl-2 py-5">
      <div className="flex items-center">
        <h1 className="lg:font-bold text-sm md:text-base lg:text-xl font-merriweather">
          Güncel Türkçe Sözlük
        </h1>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
