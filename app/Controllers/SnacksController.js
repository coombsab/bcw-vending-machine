import { appState } from "../AppState.js"
import { snacksService } from "../Services/SnacksService.js"

export class SnacksController {

  constructor() {
    _drawSnacks()
  }

  addToTotal(name) {
    console.log("increasing price in controller", name)
    snacksService.addToTotal(name)
  }
}

function _drawSnacks() {
  let snacks = appState.snacks
  let template = ""

  snacks.forEach(snack => template += snack.Template)

  // @ts-ignore
  document.getElementById("shop").innerHTML = template
}