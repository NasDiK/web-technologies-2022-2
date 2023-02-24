import {sizeEnum, toppingsEnum} from '../enums/index.js';

export const toppings = {
    [toppingsEnum.CREAMY_MOZZARELLA]: {
      [sizeEnum.SMALL]: {
        cost: 50,
        energy: 0
      },
      [sizeEnum.BIG]: {
        cost: 100,
        energy: 0
      }
    },
    [toppingsEnum.CHEESE_BOARD]: {
      [sizeEnum.SMALL]: {
        cost: 150,
        energy: 50
      },
      [sizeEnum.BIG]: {
        cost: 300,
        energy: 50
      }
    },
    [toppingsEnum.CHEDDAR_AND_PARMESAN]: {
      [sizeEnum.SMALL]: {
        cost: 150,
        energy: 50
      },
      [sizeEnum.BIG]: {
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