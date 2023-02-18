import Order from './models/Order.js';

const orders = [];

const btn = document.getElementById('addOrderBtn');

btn.addEventListener('click', addOrder, false);

function addOrder() {
  orders.push(new Order());

  console.log(orders);
}