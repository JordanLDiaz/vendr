import { appState } from "../AppState.js"
import { moniesService } from "../Services/MoniesService.js"

function _drawMoney() {
  setText('money', appState.money)
}


export class MoniesController {
  constructor() {
    // console.log('monies controller loaded')
  }

  addMoney() {
    // console.log("this is my monely controler button work")
    moniesService.addMoney()
  }





}