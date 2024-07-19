import React, { useState } from "react";
// react icons
import { HiLightBulb } from "react-icons/hi";
// zustand
import useThemeStore from "../../zustand/useTheme";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      onClick={() => {
        toggleTheme();
        localStorage.setItem(
          "theme",
          JSON.stringify(theme === "light" ? "dark" : "light")
        );
      }}
      className="switch_container"
    >
      <div className="switch_background switch_background_light"></div>
      <div
        className={`switch_background switch_background_dark ${
          theme === "light" ? "" : "switch_background_dark_on"
        }`}
      ></div>

      <div className={`ball ${theme === "light" ? "" : "ball_effect"}`}>
        <HiLightBulb />
      </div>
    </div>
  );
};

export default ThemeBtn;
