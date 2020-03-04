import pizzas from '../menu/pizzas';

export const toggleNav = () => dispatch => {
  dispatch({
    type: 'TOGGLE_N'
  });
};

export const addPizza = item => dispatch => {
  dispatch({
    type: 'ADD_PIZZA',
    payload: item
  });
};

export const removeFromOrder = (item, type) => dispatch => {
  dispatch({
    type: 'REMOVE_ITEM',
    payload: (item, type)
  });
};

export const getPizzaInfo = pizza => async dispatch => {
  const find = await pizzas.find(index => {
    return index.name === pizza;
  });
  dispatch({
    type: 'GET_INFO',
    payload: find
  });
};
