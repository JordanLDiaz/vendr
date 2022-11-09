import { appState } from "../AppState.js"

class SnacksService {

  setActive(name) {
    let snack = appState.snacks.find(s => s.name == name)
    console.log('selected', snack)
  }

}




export const snacksService = new SnacksService()