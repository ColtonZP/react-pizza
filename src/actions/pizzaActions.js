import pizzas from '../menu/pizzas';

export const addPizza = (item, quantity = 1) => dispatch => {
  dispatch({
    type: 'ADD_PIZZA',
    payload: { item, quantity }
  });
};

export const removePizza = item => dispatch => {
  dispatch({
    type: 'REMOVE_PIZZA',
    payload: item
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
