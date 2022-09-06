import { appState } from "../AppState.js";


class SnacksService {
  addToTotal(name) {
    console.log("increasing price in services", name)
    let snack = appState.snacks.find(snack => snack.name === name)
    // @ts-ignore
    appState.transactionTotal += snack.price
  }
}

export const snacksService = new SnacksService()