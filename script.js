import Order from './models/Order.js';
import Pizza from './models/Pizza.js';
import {size} from './enums/index.js';
import {baseAssortiment, toppings} from './data/index.js';

const orders = [];

const btn = document.getElementById('addOrderBtn');

btn.addEventListener('click', addOrder, false);

const [ordersDiv] = document.getElementsByClassName('orders');

function addOrder() {
  orders.push(new Order());

  const divOrderChild = document.createElement('div');
  divOrderChild.innerHTML = 'test';
  ordersDiv.appendChild(divOrderChild);
  console.log(orders);
}

console.log(baseAssortiment);
console.log(toppings)