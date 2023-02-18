import {size} from '../enums/index.js';

export default class Pizza {
  name; //название
  baseEnergy; //каллории
  basePrice; //цена
  size; //размер-enum
  toppings = []; //допы

  constructor() {

  }

  set size(value) {
    if (![size.BIG, size.MEDIUM, size.SMALL].includes(value))
      throw new Error('unexpected size');
    else {
        this.size=value;
    }
  }

  get size() {
    return this.size;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  removeTopping(topping) {
    const topIndex = this.toppings.findIndex(({name})=>name===topping.name);
    this.toppings.splice(topIndex, 1);
  }

  getToppings(topping) {}

  getSize = () => {
    return this.size;
  }

  getStuffing = () => {}

  calculatePrice = () => {}

  calculateCalories = () => {}    
}