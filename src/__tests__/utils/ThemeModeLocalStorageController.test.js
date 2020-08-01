import ThemeModeLocalStorageController, {
  themeMode,
} from "../../utils/ThemeModeLocalStorageController";

describe("ThemeModeLocalStorageController", () => {
  describe("Constructor", () => {
    it("empty localStorage", () => {
      localStorage.removeItem(themeMode);
      let themeModeLocalStorageController = new ThemeModeLocalStorageController();
      expect(localStorage.getItem(themeMode)).toBe("light-mode");
    });

    it("uncorrect localStorage", () => {
      localStorage.setItem(themeMode, "uncorrect");
      let themeModeLocalStorageController = new ThemeModeLocalStorageController();
      expect(localStorage.getItem(themeMode)).toBe("light-mode");
    });
  });

  describe("Interfaces", () => {
    localStorage.removeItem(themeMode);
    let themeModeLocalStorageController = new ThemeModeLocalStorageController();

    it("get mode()", () => {
      expect(themeModeLocalStorageController.mode).toBe("light-mode");
    });

    it("set mode()", () => {
      themeModeLocalStorageController.mode = "dark-mode";
      expect(themeModeLocalStorageController.mode).toBe("dark-mode");
    });

    it("setLightMode()", () => {
      themeModeLocalStorageController.setLightMode();
      expect(localStorage.getItem(themeMode)).toBe("light-mode");
      expect(themeModeLocalStorageController.mode).toBe("light-mode");
    });

    it("setDarkMode()", () => {
      themeModeLocalStorageController.setDarkMode();
      expect(localStorage.getItem(themeMode)).toBe("dark-mode");
      expect(themeModeLocalStorageController.mode).toBe("dark-mode");
    });
  });
});
