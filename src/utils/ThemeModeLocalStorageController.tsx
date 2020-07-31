const themeModeList: string = "Theme";

class ThemeModeLocalStorageController {
  constructor() {
    !localStorage.getItem(themeModeList) &&
      localStorage.setItem(themeModeList, "light-mode");
  }

  get mode(): string {
    return localStorage.getItem(themeModeList) || "";
  }

  set mode(themeMode: string) {
    localStorage.setItem(themeModeList, themeMode);
  }

  setLightMode(): string {
    return (this.mode = "light-mode");
  }

  setDarkMode(): string {
    return (this.mode = "dark-mode");
  }
}

export default ThemeModeLocalStorageController;
