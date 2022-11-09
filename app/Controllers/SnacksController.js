import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"


function _drawSnacks() {

  let template = ''
  appState.snacks.forEach(s => template += s.ListTemplate)
  setHTML('snacks', template)
  console.log('snacks drawn')
}

export class SnacksController {
  constructor() {
    // console.log('SnacksController loaded')
    _drawSnacks()
  }
}