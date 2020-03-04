import { combineReducers } from 'redux';
import menu from '../menu/index';

const initState = () => {
  return {
    pizza: [],
    beer: [],
    cocktails: []
  };
};

const toggleNav = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return !state;
    default:
      return state;
  }
};

const pizzaOrder = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PIZZA':
      return [...state, action.payload];
    default:
      return state;
  }
};

const pizzaInfo = (state = {}, action) => {
  switch (action.type) {
    case 'GET_INFO':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  nav: toggleNav,
  menu,
  pizzaOrder,
  pizzaInfo
});
