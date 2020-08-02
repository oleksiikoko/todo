import React from "react";
import { render, screen } from "@testing-library/react";

import ThemeChanger from "../../components/ThemeChanger";
import ThemeModeLocalStorageObserver from "../../utils/ThemeModeLocalStorageObserver";

describe("ThemeChanger", () => {
  const themeMode = new ThemeModeLocalStorageObserver();

  describe("render", () => {
    beforeEach(() => {
      render(<ThemeChanger themeModeLocalStorageObserver={themeMode} />);
    });

    it("wrapper", () => {
      expect(themeMode.mode).toEqual("light-mode");
      expect(screen.queryByTestId("theme-changer")).toBeTruthy();
      expect(screen.queryByTestId("theme-changer")).toHaveClass(
        "theme-changer"
      );
    });

    it("buttons", () => {
      expect(screen.queryAllByRole("button")).toHaveLength(2);
      expect(screen.queryAllByRole("button")[0]).toHaveClass(themeMode.mode);
      expect(screen.queryAllByRole("button")[0]).toHaveClass(
        "light-mode-active"
      );
      expect(screen.queryAllByRole("button")[1]).toHaveClass(themeMode.mode);
      expect(screen.queryAllByRole("button")[1]).not.toHaveClass(
        "dark-mode-active"
      );
    });
  });

  describe("change theme", () => {
    beforeEach(() => {
      themeMode.setDarkMode();
      render(<ThemeChanger themeModeLocalStorageObserver={themeMode} />);
    });

    it("buttons", () => {
      expect(themeMode.mode).toEqual("dark-mode");
      expect(screen.queryAllByRole("button")[0]).toHaveClass(themeMode.mode);
      expect(screen.queryAllByRole("button")[0]).not.toHaveClass(
        "light-mode-active"
      );
      expect(screen.queryAllByRole("button")[1]).toHaveClass(themeMode.mode);
      expect(screen.queryAllByRole("button")[1]).toHaveClass(
        "dark-mode-active"
      );
    });
  });
});
