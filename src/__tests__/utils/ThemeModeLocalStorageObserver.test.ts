import { ThemeModeLocalStorageObserver } from "../../utils";

describe("ThemeModeLocalStorageObserver", () => {
  const themeModeLocalStorageObserver: ThemeModeLocalStorageObserver = new ThemeModeLocalStorageObserver();
  const mockSubscriber = jest.fn();
  themeModeLocalStorageObserver.subscribe(mockSubscriber);

  it("get mode()", () => {
    expect(
      ["light-mode", "dark-mode"].includes(themeModeLocalStorageObserver.mode)
    ).toBe(true);
  });

  it("setLightMode()", () => {
    themeModeLocalStorageObserver.setLightMode();

    expect(mockSubscriber).toHaveBeenCalledTimes(1);
  });

  it("setDartMode()", () => {
    themeModeLocalStorageObserver.setLightMode();

    expect(mockSubscriber).toHaveBeenCalledTimes(2);
  });

  it("unsubscribe()", () => {
    themeModeLocalStorageObserver.unsubscribe(mockSubscriber);
    themeModeLocalStorageObserver.setLightMode();

    expect(mockSubscriber).toHaveBeenCalledTimes(2);
  });
});
