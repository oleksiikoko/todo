import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "../styles/ThemeChanger.scss";

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(
    localStorage.getItem("Theme") === "dark"
  );

  const changeTheme = () => {
    let toDoLight = document.querySelectorAll(".light-mode");
    let toDoDark = document.querySelectorAll(".dark-mode");

    for (var i = 0; i < toDoLight.length; ++i) {
      toDoLight[i].classList.add("dark-mode");
      toDoLight[i].classList.remove("light-mode");
    }

    for (var i = 0; i < toDoDark.length; ++i) {
      toDoDark[i].classList.add("light-mode");
      toDoDark[i].classList.remove("dark-mode");
    }
  };

  const handleChange = (state: boolean) => {
    if (themeState !== state) {
      setThemeState(!themeState);
      changeTheme();

      if (state) {
        localStorage.setItem("Theme", "dark");
      } else {
        localStorage.setItem("Theme", "light");
      }
    }
  };

  useEffect(() => {
    !localStorage.getItem("Theme") && localStorage.setItem("Theme", "light");
  });

  return (
    <div className={`theme-changer ${localStorage.getItem("Theme")}-mode`}>
      <button
        className={classNames(
          { "dark-mode": themeState },
          { "light-mode": !themeState },
          { "light-mode-active": !themeState }
        )}
        onClick={() => handleChange(false)}
      >
        Light
      </button>
      <button
        className={classNames(
          { "dark-mode": themeState },
          { "light-mode": !themeState },
          { "dark-mode-active": themeState }
        )}
        onClick={() => handleChange(true)}
      >
        Dark
      </button>
    </div>
  );
};

export default ThemeChanger;
