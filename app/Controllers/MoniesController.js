import { appState } from "../AppState.js"
import { moniesService } from "../Services/MoniesService.js"
import { setText } from "../Utils/Writer.js"

function _drawMoney() {
  setText('money', appState.money)
}


export class MoniesController {
  constructor() {
    // console.log('monies controller loaded')
    let money = appState.money
    let template = ''
    for (let i = 0; i < money; i++) {
      template += '💰'
    }
    _drawMoney()
  }

  addMoney() {
    // console.log("this is my money controler button work")
    moniesService.addMoney()
    _drawMoney()
  }





}