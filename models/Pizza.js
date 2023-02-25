import {sizeEnum, toppingsEnum, nameTypeEnum} from '../enums/index.js';
import {toppings} from '../data/index.js';

export default class Pizza {
  nameType; //название из енума
  baseEnergy; //каллории
  baseCost; //цена
  size; //размер-enum
  toppings = []; //допы
  addingBySize; //добавочная цена за размер

  constructor(nameType, baseCost, baseEnergy, addingBySize, size = sizeEnum.SMALL) {
    this.nameType = nameType || nameTypeEnum.MARGARITA;
    this.baseCost = baseCost;
    this.baseEnergy = baseEnergy;
    this.addingBySize = addingBySize;
    this.size = size;
  }

  get name() {
    switch(this.nameType) {
      case nameTypeEnum.BAVARIAN:
        return 'Баварская';
      case nameTypeEnum.MARGARITA:
        return 'Маргарита';
      case nameTypeEnum.PEPPERONI:
        return 'Пеперони';
      default:
          return null;
    }
  }

  set size(value) {
    if (![Object.values(sizeEnum)].includes(value))
      throw new Error('unexpected size');
    else {
        this.size=value;
    }
  }

  addTopping(topping) { //id или название
    const topById = toppings[topping.toString()]?.[this.size];
    const topByName = toppings[toppingsEnum[topping]]?.[this.size];
    const existTopping = topById || topByName || null;

    if (!existTopping) {
      throw new Error('Такого топпинга впринципе не существует')
    }
    else {
      this.toppings.push(existTopping);
    }
  }

  removeTopping(topping) { //можно вписать имя или id
    const topById = toppings[topping.toString()]?.[this.size];
    const topByName = toppings[toppingsEnum[topping]]?.[this.size];
    const existTopping = topById || topByName || null;

    if (!existTopping) {
      throw new Error('Такого топпинга впринципе не существует')
    }

    const topIndex = this.toppings.findIndex(({name})=>name===existTopping.name);

    if(topIndex === -1) {
      throw new Error('Пицца не обладает таким топпингом');
    }
    else {
      this.toppings.splice(topIndex, 1);
    }
  }

  getToppings() {
    return this.toppings;
  }

  getSize = () => {
    switch(this.size) {
      case sizeEnum.BIG:
        return 'Большая';
      case sizeEnum.MEDIUM:
        return 'Средняя';
      case sizeEnum.SMALL:
        return 'Маленькая';
      default: //на крайняк из енума будет прямое значение брать
        const values = Object.values(sizeEnum);
        const index = values.findIndex((id)=>id===this.size);
        return Object.keys(sizeEnum)[index];
    }
  };

  getStuffing = () => {} //Что под этим подразумевается? name-есть, топпинги есть, размер есть

  calculatePrice = () => {
    return this.baseCost + this.addingBySize[this.size].cost + this.getToppingSum(this.toppings, 'cost');
  }

  calculateCalories = () => {
    const baseEnergy = this.baseEnergy;
    const bySize = this.addingBySize[this.size].energy;
    const toppingSum = this.getToppingSum(this.toppings, 'energy');

    return baseEnergy + bySize + toppingSum;
  }    

  getToppingSum(toppings, prop) {
    return toppings.reduce((sum, curTop)=>(sum + curTop?.[prop]), 0);
  }
}