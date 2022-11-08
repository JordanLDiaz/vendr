import { Snack } from "./Models/Snack.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Snack.js').Snack[]} */
  values = loadState('values', [Value])

  snacks = [
    new Snack('Goldfish', '🐠', 3.00),
    new Snack('Croissant', '🥐', 3.50),
    new Snack('Sushi', '🍣', 5.75)
  ]

  money = 0
}








export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
