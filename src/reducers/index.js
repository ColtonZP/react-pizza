import { combineReducers } from 'redux';
import menu from '../menu/index';
import pizzaOrder from './pizzaOrder';
import beerOrder from './beerOrder';
import cocktailOrder from './cocktailOrder';
import pizzaInfo from './pizzaInfo';
import total from './total';

export default combineReducers({
  menu,
  pizzaOrder,
  beerOrder,
  cocktailOrder,
  pizzaInfo,
  total
});
