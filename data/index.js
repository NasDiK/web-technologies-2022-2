import {size, toppings as toppingsEnum} from '../enums/index.js';
import Pizza from '../models/Pizza.js'

export const toppings = {
    [toppingsEnum.CREAMY_MOZZARELLA]: {
      [size.SMALL]: {
        cost: 50,
        energy: 0
      },
      [size.BIG]: {
        cost: 100,
        energy: 0
      }
    },
    [toppingsEnum.CHEESE_BOARD]: {
      [size.SMALL]: {
        cost: 150,
        energy: 50
      },
      [size.BIG]: {
        cost: 300,
        energy: 50
      }
    },
    [toppingsEnum.CHEDDAR_AND_PARMESAN]: {
      [size.SMALL]: {
        cost: 150,
        energy: 50
      },
      [size.BIG]: {
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

export const baseAssortiment = {
    margarita: new Pizza('Маргарита', 500, 300, {
      [size.SMALL]: {
        energy: 100,
        cost: 100
      },
      [size.BIG]: {
        energy: 200,
        cost: 200
      }
    }),
    pepperoni: new Pizza('Пепперони', 800, 400, {
      [size.SMALL]: {
        energy: 100,
        cost: 100
      },
      [size.BIG]: {
        energy: 200,
        cost: 200
      }
    }),
    bavarian: new Pizza('Баварская', 700, 450, {
      [size.SMALL]: {
        energy: 100,
        cost: 100
      },
      [size.BIG]: {
        energy: 200,
        cost: 200
      }
    })
  };