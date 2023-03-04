import * as enums from '../enums/index.js';

/**
 * Возвращает путь к картинке пицце
 * @param {import('../enums/index.js').nameTypeEnum} type 
 */
const getLogoUrl = (type) => {
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
 * Возвращает HTML
 * @param {string} title Заголовок пиццы
 * @param {import('../enums/index.js').nameTypeEnum} type nameTypeEnum
 * @returns {HTMLElement}  
 */
export const renderPizzaCard = (title, type) => {
  console.log(getLogoUrl(type));
  let result = `
  <div class="pizza-card-wrapper">
    <img src="${getLogoUrl(type)}" alt="пицца" />
    <h3>${title}</h3.
  </div>
  `;

  return result;
};