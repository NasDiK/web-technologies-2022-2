import {sizeEnum, toppingsEnum} from '../enums/index.js';

export const toppings = {
    [toppingsEnum.CREAMY_MOZZARELLA]: {
      [sizeEnum.SMALL]: {
        name: 'CREAMY_MOZZARELLA',
        cost: 50,
        energy: 0
      },
      [sizeEnum.BIG]: {
        name: 'CREAMY_MOZZARELLA',
        cost: 100,
        energy: 0
      }
    },
    [toppingsEnum.CHEESE_BOARD]: {
      [sizeEnum.SMALL]: {
        name: 'CHEESE_BOARD',
        cost: 150,
        energy: 50
      },
      [sizeEnum.BIG]: {
        name: 'CHEESE_BOARD',
        cost: 300,
        energy: 50
      }
    },
    [toppingsEnum.CHEDDAR_AND_PARMESAN]: {
      [sizeEnum.SMALL]: {
        name: 'CHEDDAR_AND_PARMESAN',
        cost: 150,
        energy: 50
      },
      [sizeEnum.BIG]: {
        name: 'CHEDDAR_AND_PARMESAN',
        cost: 300,
        energy: 50
      }
    }
};

export const getToppingInfo = (name, size = null) => {
  if(size) {
    return toppings[name][size];
  }
  
  return toppings[name];
};