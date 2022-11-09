export class Snack {
  constructor(name, emoji, price) {
    this.name = name
    this.emoji = emoji
    this.price = price
  }

  get ListTemplate() {
    return `<h3 class="col-2 p-2 selectable" title="${this.name}" onclick="app.snacksController.setActive('${this.name}')">${this.emoji}</h3>
    <h4 class="p-2 text-center">Price: $<span>${this.price}</span></h4>`
  }
}

export class Monies {

}