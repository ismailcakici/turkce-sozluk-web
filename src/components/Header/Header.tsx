import React from "react";
import logo from "../../assets/image/logo192.png";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <div className="w-full h-14 rounded-box bg-base-200 flex items-center justify-between px-5 py-5">
      <div className="space-x-3 flex items-center">
        <img className="w-10 lg:w-12" src={logo} alt="tdk-logo" />
        <h1 className="lg:font-bold text-sm md:text-base lg:text-xl font-merriweather">
          Güncel Türkçe Sözlük
        </h1>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
