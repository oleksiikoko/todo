export const themeMode: string = "Theme";

class ThemeModeLocalStorageController {
  constructor() {
    !localStorage.getItem(themeMode) ||
      !["light-mode", "dark-mode"].includes(localStorage.getItem(themeMode)!);
    localStorage.setItem(themeMode, "light-mode");
  }

  get mode(): string {
    return localStorage.getItem(themeMode) || "";
  }

  set mode(value: string) {
    localStorage.setItem(themeMode, value);
  }

  setLightMode(): string {
    return (this.mode = "light-mode");
  }

  setDarkMode(): string {
    return (this.mode = "dark-mode");
  }
}

export default ThemeModeLocalStorageController;
