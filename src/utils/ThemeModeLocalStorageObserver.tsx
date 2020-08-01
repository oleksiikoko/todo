import ThemeModeLocalStorageController from "./ThemeModeLocalStorageController";

class ThemeModeLocalStorageObserver {
  private observers: Array<Function>;
  private themeModeLocalStorageController: ThemeModeLocalStorageController;
  constructor() {
    this.observers = [];
    this.themeModeLocalStorageController = new ThemeModeLocalStorageController();
  }

  subscribe(fn: Function) {
    this.observers.push(fn);
  }

  unsubscribe(fn: Function) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  broadcast(data: string) {
    this.observers.forEach((subscriber) => subscriber(data));
  }

  get mode() {
    return this.themeModeLocalStorageController.mode;
  }

  setLightMode() {
    this.broadcast(this.themeModeLocalStorageController.setLightMode());
  }

  setDarkMode() {
    this.broadcast(this.themeModeLocalStorageController.setDarkMode());
  }
}

export default ThemeModeLocalStorageObserver;
