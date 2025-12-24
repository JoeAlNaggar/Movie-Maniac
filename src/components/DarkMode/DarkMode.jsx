import React, { useEffect, useState } from "react";

import "./DarkMode.css";
import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme !== "light";
  });

  const setDarkTheme = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    setIsDark(true);
  };

  const setLightTheme = () => {
    document.documentElement.setAttribute("data-theme", "light");
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    setIsDark(false);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    if (theme === "light") {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={isDark}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="Sun" className="sun" />
        <img src={Moon} alt="Moon" className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
