import pizzas from '../menu/pizzas';

export const addToOrder = (item, type) => dispatch => {
  dispatch({
    type: 'ADD_ITEM',
    payload: (item, type)
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
