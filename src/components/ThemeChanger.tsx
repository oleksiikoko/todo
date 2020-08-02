import React from "react";
import classNames from "classnames";

import { ThemeModeLocalStorageObserver } from "utils";

import "styles/ThemeChanger.scss";

interface ThemeChangerIterface {
  themeModeLocalStorageObserver: ThemeModeLocalStorageObserver;
}

const ThemeChanger: React.FC<ThemeChangerIterface> = ({
  themeModeLocalStorageObserver,
}) => {
  const themeMode = themeModeLocalStorageObserver.mode;
  const setLightMode = () => themeModeLocalStorageObserver.setLightMode();
  const setDarkMode = () => themeModeLocalStorageObserver.setDarkMode();

  return (
    <div data-testid="theme-changer" className="theme-changer">
      <button
        className={classNames(themeMode, {
          "light-mode-active": themeMode !== "dark-mode",
        })}
        onClick={setLightMode}
      >
        Light
      </button>
      <button
        className={classNames(themeMode, {
          "dark-mode-active": themeMode === "dark-mode",
        })}
        onClick={setDarkMode}
      >
        Dark
      </button>
    </div>
  );
};

export default ThemeChanger;
