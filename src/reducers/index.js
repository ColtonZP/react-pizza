import { combineReducers } from 'redux';
import menu from '../menu/index';

const initState = () => {
  return {
    pizzaOrder: [],
    beerOrder: [],
    cocktails: []
  };
};

export default combineReducers({
  menu,
  order: initState
});
