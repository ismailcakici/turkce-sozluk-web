import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { setTheme, getTheme } from "../../utils/ThemeUtils/ThemeUtils";

const ThemeSwitcher: React.FC = () => {
  const [theme, setThemeState] = useState<"light" | "dark">(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThemeState(newTheme);
  };

  return (
    <div
      className=" bg-primary rounded-box shadow-lg cursor-pointer p-3 lg:p-4"
      onClick={toggleTheme}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </div>
  );
};

export default ThemeSwitcher;
