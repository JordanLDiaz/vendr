import { appState } from "../AppState.js"


class MoniesService {
  addMoney() {
    // console.log("Money service button");
    console.log("money before add", appState.money);
    appState.money = appState.money + .50
    console.log("money after add", appState.money);

  }

}

export const moniesService = new MoniesService