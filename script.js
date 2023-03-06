import Pizza from './models/Pizza.js';
import {sizeEnum, toppingsEnum, nameTypeEnum} from './enums/index.js';
import {toppings} from './data/index.js';
import { baseAssortiment } from './data/baseAssortment.js';
import {renderPizzas, renderControl} from './models/Components.js';

/*
https://docs.google.com/document/d/164yUCcxY7FH5h3rMhApGNd8RpcPOLX_gTGDBMJ87kMc/edit задание
*/
console.log('Ссылка на задание: https://docs.google.com/document/d/164yUCcxY7FH5h3rMhApGNd8RpcPOLX_gTGDBMJ87kMc/edit');

const margarita = baseAssortiment.margarita;
const pepperoni = baseAssortiment.pepperoni;
const bavarian = baseAssortiment.bavarian;
const enums = {sizeEnum, toppingsEnum, nameTypeEnum}

console.group('Т.к. использовал модульность вынес в глобалы');
console.log('pizzas - список пицц');
console.log('toppings, baseAssortiment, enums доступны');
console.log('Балуйтесь в консоле)');
console.groupEnd();

window.baseAssortiment = baseAssortiment;
window.toppings = toppings;
window.enums = enums;

const rootDiv = document.getElementById('root');
const pizzasDiv = document.getElementById('pizzasContainer');
const controlDiv = document.getElementById('control');
const basketDiv = document.getElementById('basket');

const pizzas = {
  [enums.nameTypeEnum.MARGARITA]: {
    class: baseAssortiment['margarita']
  },
  [enums.nameTypeEnum.PEPPERONI]: {
    class: baseAssortiment['pepperoni']
  },
  [enums.nameTypeEnum.BAVARIAN]: {
    class: baseAssortiment['bavarian']
  },
  isActive: null
}

window.pizzas = pizzas;

const rerenderAll=()=>{
  renderPizzas(pizzas, pizzasDiv, handlers.clickPizzaCardHandler);
  renderControl(pizzas[pizzas.isActive], controlDiv, handlers);
};

const handlers = {
  clickPizzaCardHandler: (number) => {
    pizzas.isActive = number;
    rerenderAll();
  },
  changePizzaSize: (size, pizzaType = Number(pizzas.isActive)) => {
    pizzas[pizzaType].class.size = Number(size);
    rerenderAll();
  },
  rerenderAll
} 

rerenderAll();