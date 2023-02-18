import Pizza from './Pizza.js';

export default class Order {
  pizzas = [];

  addPizza = () => {
    this.pizzas.push(new Pizza());
  }
}
