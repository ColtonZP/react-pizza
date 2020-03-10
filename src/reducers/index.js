import { combineReducers } from 'redux';
import menu from '../menu/index';

const pizzaOrder = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PIZZA':
      if (state.includes(action.payload.item)) {
        return state.map(item => {
          if (item === action.payload.item) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
      }
      action.payload.item.quantity = action.payload.quantity;
      return [...state, action.payload.item];
    case 'CLEAR_PIZZA':
      return action.payload;
    case 'REMOVE_PIZZA':
      return state.filter(pizza => pizza !== action.payload);
    default:
      return state;
  }
};

const beerOrder = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BEER':
      if (state.includes(action.payload)) {
        return state.map(item => {
          if (item === action.payload) {
            item.quantity += 1;
            return item;
          }
          return item;
        });
      }
      action.payload.quantity = 1;
      return [...state, action.payload];
    case 'CLEAR_BEER':
      return action.payload;
    default:
      return state;
  }
};

const cocktailOrder = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COCKTAIL':
      if (state.includes(action.payload)) {
        return state.map(item => {
          if (item === action.payload) {
            item.quantity += 1;
            return item;
          }
          return item;
        });
      }
      action.payload.quantity = 1;
      return [...state, action.payload];
    case 'CLEAR_COCKTAIL':
      return action.payload;
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

const total = (state = {}, action) => {
  switch (action.type) {
    case 'GET_TOTAL':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  menu,
  pizzaOrder,
  beerOrder,
  cocktailOrder,
  pizzaInfo,
  total
});
