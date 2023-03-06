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
export const renderPizzaCard = (title, type, isActiveNumber) => {
  let result = `
  <div class="pizza-card-wrapper pizza-${type} ${Number(isActiveNumber) === type && 'active'}">
    <img src="${getPizzasLogoUrl(type)}" alt="пицца" />
    <h3>${title}</h3>
  </div>
  `;
  
  return result;
};

export const renderToppingCard = (pizza, cost, type) => {
  const toppingName = Object.entries(enums.toppingsEnum).find(([_name, _type])=>_type === type)[0];
  const isToppingActive = pizza.toppings.find(({name})=>name === toppingName);

  let result = `
  <div class="topping-card ${toppingName} ${isToppingActive && 'active' || ''}">
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
export const renderPizzas = (pizzas, element, clickCardHandler) => {
  const pizzasNumbers = Object.keys(pizzas).filter(item=>Number.isInteger(Number(item)));

  element.innerHTML = pizzasNumbers.reduce((acc, number)=>{
    const {name, nameType} = pizzas[number].class;

    return acc+renderPizzaCard(name, nameType, pizzas.isActive);
  }, '');

  pizzasNumbers.forEach((type)=>{
    const elem = document.getElementsByClassName(`pizza-${type}`)[0];
    elem.addEventListener('click', ()=>clickCardHandler(type));
  })
};

/**
 * Render control panel into HTML Node
 * @param {import('../models/Pizza'.default)} pizza 
 * @param {HTMLElement} element 
 * @returns {void}
 */
export const renderControl = (pizzaObj, element, {changePizzaSize, rerenderAll}) => {
  if (pizzaObj === undefined) {
    element.innerHTML = '<h2>Выберите пиццу</h2';
    return;
  }

  const {class: pizza} = pizzaObj;

  const cost = pizza.calculatePrice();
  const energy = pizza.calculateCalories();

  element.innerHTML = `
    <h2>Выберите размер</h2>
    <select id="select-size">
      ${pizza.addingBySize[enums.sizeEnum.BIG] && `<option value='${enums.sizeEnum.BIG}' ${pizza.size === enums.sizeEnum.BIG && 'selected'}>Большая</option>`}
      ${pizza.addingBySize[enums.sizeEnum.MEDIUM] && `<option value='${enums.sizeEnum.MEDIUM}' ${pizza.size === enums.sizeEnum.MEDIUM && 'selected'}>Средняя</option>`}
      ${pizza.addingBySize[enums.sizeEnum.SMALL] && `<option value='${enums.sizeEnum.SMALL}' ${pizza.size === enums.sizeEnum.SMALL && 'selected'}>Маленькая</option>`}
    </select>
    <h2>Выберите топпинг</h2>
    <div class="flex-column">
      <div class="toppings-wrapper">
        ${renderToppingCard(pizza, data.toppings[enums.toppingsEnum.CREAMY_MOZZARELLA][pizza.size].cost, enums.toppingsEnum['CREAMY_MOZZARELLA'])}
        ${renderToppingCard(pizza, data.toppings[enums.toppingsEnum.CHEESE_BOARD][pizza.size].cost, enums.toppingsEnum['CHEESE_BOARD'])}
        ${renderToppingCard(pizza, data.toppings[enums.toppingsEnum.CHEDDAR_AND_PARMESAN][pizza.size].cost, enums.toppingsEnum['CHEDDAR_AND_PARMESAN'])}
      </div>
      <button>Добавить в корзину за ${cost}Р (${energy} кКалл) </button>
    </div>
  `;

  const toppingsElements = document.getElementsByClassName('topping-card');
  for (element of toppingsElements) {
    element.addEventListener('click', (function(event) {
      const classlist = this.classList.toString().split(' ');
      const topName = classlist?.[1];
      const isActive = classlist?.[2];

      if (isActive) {
        executeTopping('remove', pizza, topName);
      }
      else {
        executeTopping('add', pizza, topName);
      }
      rerenderAll();
    }).bind(element))
  }

  const selectSizeNode = document.getElementById('select-size');
  selectSizeNode.onchange = (ev) => changePizzaSize(ev.target.value);
};

/**
 * 
 * @param {'add' | 'remove'} op 
 * @param {import('../models/Pizza'.default)} pizza 
 * @param {1|2|3} toppingType enum
 */
const executeTopping = (op, pizza, toppingName) => {
  switch(op) {
    case 'add':
      pizza.addTopping(toppingName);
      break;
    case 'remove':
      pizza.removeTopping(toppingName);
      break;
  }
}