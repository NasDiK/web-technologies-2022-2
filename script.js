import Pizza from './models/Pizza.js';
import {sizeEnum, toppingsEnum, nameTypeEnum} from './enums/index.js';
import {toppings} from './data/index.js';
import { baseAssortiment } from './data/baseAssortment.js';

// const orders = [];

// const btn = document.getElementById('addOrderBtn');

// btn.addEventListener('click', addOrder, false);

// const [ordersDiv] = document.getElementsByClassName('orders');

// function addOrder() {
//   orders.push(new Order());

//   const divOrderChild = document.createElement('div');
//   divOrderChild.innerHTML = 'test';
//   ordersDiv.appendChild(divOrderChild);
//   console.log(orders);
// }

const margarita = baseAssortiment.margarita;
const pepperoni = baseAssortiment.pepperoni;
const bavarian = baseAssortiment.bavarian;
const enums = {sizeEnum, toppingsEnum, nameTypeEnum}

console.group('Т.к. использовал модульность вынес в глобалы');
console.log('Pizza = class Pizza');
console.log('margarita, pepperoni, bavarian, toppings, baseAssortiment, enums доступны');
console.log('Балуйтесь в консоле)');
console.groupEnd();

window.margarita = margarita;
window.pepperoni = pepperoni;
window.bavarian = bavarian;
window.baseAssortiment = baseAssortiment;
window.toppings = toppings;
window.enums = enums;
window.Pizza = Pizza;