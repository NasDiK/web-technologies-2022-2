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
console.log('Pizza = class Pizza');
console.log('margarita, pepperoni, bavarian, toppings, baseAssortiment, enums доступны');
console.log('Балуйтесь в консоле)');
console.log(`Пример const pizz = baseAssortiment['margarita'] и развлекайтесь с ней`);
console.groupEnd();

window.margarita = margarita;
window.pepperoni = pepperoni;
window.bavarian = bavarian;
window.baseAssortiment = baseAssortiment;
window.toppings = toppings;
window.enums = enums;
window.Pizza = Pizza;

const rootDiv = document.getElementById('root');
const pizzasDiv = document.getElementById('pizzasContainer');
const controlDiv = document.getElementById('control');
const basketDiv = document.getElementById('basket');

const Pizzas=[
  baseAssortiment['margarita'],
  baseAssortiment['pepperoni'],
  baseAssortiment['bavarian']
];

renderPizzas(Pizzas, pizzasDiv);
renderControl(baseAssortiment['margarita'], controlDiv);