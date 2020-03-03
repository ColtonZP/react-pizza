import { combineReducers } from 'redux';
import menu from '../menu/index';

const initState = () => {
  return {
    pizzaOrder: [],
    beerOrder: [],
    cocktails: []
  };
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
  menu,
  order: initState,
  pizzaInfo
});
