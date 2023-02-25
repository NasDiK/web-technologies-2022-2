import {sizeEnum, nameTypeEnum} from '../enums/index.js';
import Pizza from '../models/Pizza.js'

export const baseAssortiment = {
    margarita: new Pizza(nameTypeEnum.MARGARITA, 500, 300, {
      [sizeEnum.SMALL]: {
        energy: 100,
        cost: 100
      },
      [sizeEnum.BIG]: {
        energy: 200,
        cost: 200
      }
    }),
    pepperoni: new Pizza(nameTypeEnum.PEPPERONI, 800, 400, {
      [sizeEnum.SMALL]: {
        energy: 100,
        cost: 100
      },
      [sizeEnum.BIG]: {
        energy: 200,
        cost: 200
      }
    }),
    bavarian: new Pizza(nameTypeEnum.BAVARIAN, 700, 450, {
      [sizeEnum.SMALL]: {
        energy: 100,
        cost: 100
      },
      [sizeEnum.BIG]: {
        energy: 200,
        cost: 200
      }
    })
  };