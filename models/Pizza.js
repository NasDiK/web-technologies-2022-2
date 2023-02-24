import {sizeEnum, toppingsEnum} from '../enums/index.js';
import {toppings} from '../data/index.js';

export default class Pizza {
  name; //название
  baseEnergy; //каллории
  baseCost; //цена
  size; //размер-enum
  toppings = []; //допы
  addingBySize; //добавочная цена за размер

  constructor(name, baseCost, baseEnergy, addingBySize) {
    this.name = name;
    this.baseCost = baseCost;
    this.baseEnergy = baseEnergy;
    this.addingBySize = addingBySize;

    this.size = sizeEnum.SMALL;
  }

  set size(value) {
    if (![Object.values(sizeEnum)].includes(value))
      throw new Error('unexpected size');
    else {
        this.size=value;
    }
  }

  get size() {
    return this.size;
  }

  addTopping(topping) {
    if(!Object.keys(toppings).includes(topping.toString())) {
      throw new Error('Несуществующий топпинг');
    }
    else {
      this.toppings.push(toppings[topping][this.size]);
    }
  }

  removeTopping(topping) {
    const topIndex = this.toppings.findIndex(({name})=>name===topping.name);
    this.toppings.splice(topIndex, 1);
  }

  getToppings() {
    return this.toppings;
  }

  getSize = () => {
    return this.size;
  }

  getStuffing = () => {}

  calculatePrice = () => {
    return this.baseCost + this.addingBySize[this.size].cost; //+топы надо ещё
  }

  calculateCalories = () => {}    
}