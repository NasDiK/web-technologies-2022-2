import * as enums from '../enums/index.js';
import * as data from '../data/index.js';

/**
 * Возвращает путь к картинке пицце
 * @param {import('../enums/index.js').nameTypeEnum} type 
 */
const getPizzasLogoUrl = (type) => {
  switch(type) {
    case enums.nameTypeEnum.BAVARIAN:
      return '../assets/pizzas/bavarian(not).png';
    case enums.nameTypeEnum.MARGARITA:
      return '../assets/pizzas/margarita.png';
    case enums.nameTypeEnum.PEPPERONI:
      return '../assets/pizzas/pepperoni.png';
  }
};

/**
 * Возвращает путь к картинке топпинга
 * @param {import('../enums/index.js').toppingsEnum} type 
 */
const getToppingLogoUrl = (type) => {
  switch(type) {
    case enums.toppingsEnum.CREAMY_MOZZARELLA:
      return '../assets/toppings/creamy_mozzarella.png';
    case enums.toppingsEnum.CHEESE_BOARD:
      return '../assets/toppings/cheese_board.png';
    case enums.toppingsEnum.CHEDDAR_AND_PARMESAN:
      return '../assets/toppings/cheddar_and_parmesan.png';
  }
};

/**
 * Возвращает HTML карточки пиццы
 * @param {string} title Заголовок пиццы
 * @param {import('../enums/index.js').nameTypeEnum} type nameTypeEnum
 * @returns {HTMLElement}  
 */
export const renderPizzaCard = (title, type) => {
  let result = `
  <div class="pizza-card-wrapper">
    <img src="${getPizzasLogoUrl(type)}" alt="пицца" />
    <h3>${title}</h3>
  </div>
  `;

  return result;
};

export const renderToppingCard = (cost, type) => {
  let result = `
  <div class="topping-card">
    <img src="${getToppingLogoUrl(type)}" alt="топпинг" />
    <p>${cost} Р</p>
  </div>
  `;

  return result;
};

/*---------------------------------------------------Рендер групп--------------------------------------------------------------------------------------------*/

/**
 * Render pizzas into HTML Node
 * @param {Pizza []} pizzas 
 * @param {HTMLElement} element 
 * @returns {void}
 */
export const renderPizzas = (pizzas, element) => {
  element.innerHTML = pizzas.reduce((acc, pizza)=>{
    const {name, nameType} = pizza;

    return acc+renderPizzaCard(name, nameType);
  }, '');

  const elements = document.getElementsByClassName('pizza-card-wrapper');
  for (element of elements) {
    element.addEventListener('click', (function (ev) {
      for (element of elements) {
        if (element !== this) {
          element.classList.remove('active');
        }
        else {
          toggleActive.apply(element, ev);
        }
      }
    }).bind(element));
  }
};

/**
 * Render control panel into HTML Node
 * @param {import('../models/Pizza'.default)} pizza 
 * @param {HTMLElement} element 
 * @returns {void}
 */
export const renderControl = (pizza, element) => {
  const cost = pizza.calculatePrice();
  const energy = pizza.calculateCalories();

  element.innerHTML = `
    <h2>Выберите размер</h2>
    <select id="select-size">
      ${pizza.addingBySize[enums.sizeEnum.BIG] && `<option value='${enums.sizeEnum.BIG}'>Большая</option>`}
      ${pizza.addingBySize[enums.sizeEnum.MEDIUM] && `<option value='${enums.sizeEnum.MEDIUM}'>Средняя</option>`}
      ${pizza.addingBySize[enums.sizeEnum.SMALL] && `<option value='${enums.sizeEnum.SMALL}'>Маленькая</option>`}
    </select>
    <h2>Выберите размер</h2>
    <div class="flex-column">
      <div class="toppings-wrapper">
        ${renderToppingCard(data.toppings[enums.toppingsEnum.CREAMY_MOZZARELLA][pizza.size].cost, enums.toppingsEnum['CREAMY_MOZZARELLA'])}
        ${renderToppingCard(data.toppings[enums.toppingsEnum.CHEESE_BOARD][pizza.size].cost, enums.toppingsEnum['CHEESE_BOARD'])}
        ${renderToppingCard(data.toppings[enums.toppingsEnum.CHEDDAR_AND_PARMESAN][pizza.size].cost, enums.toppingsEnum['CHEDDAR_AND_PARMESAN'])}
      </div>
      <button>Добавить в корзину за ${cost}Р (${energy} кКалл) </button>
    </div>
  `;

  const elements = document.getElementsByClassName('topping-card');
  for (element of elements) {
      element.addEventListener('click', toggleActive.bind(element));
  }

  const selectSizeNode = document.getElementById('select-size');
  selectSizeNode.onchange = (ev) => {
    alert(ev.target.value);
  }
};

function toggleActive (event) {
  this.classList.toggle('active');
}