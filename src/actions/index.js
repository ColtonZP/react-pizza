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

export const addBeer = item => dispatch => {
  dispatch({
    type: 'ADD_BEER',
    payload: item
  });
};

export const addCocktail = item => dispatch => {
  dispatch({
    type: 'ADD_COCKTAIL',
    payload: item
  });
};

export const getTotal = (pizzas, beers, cocktails) => dispatch => {
  let total = 0;
  pizzas.forEach(pizza => {
    total += pizza.price * pizza.quantity;
  });
  beers.forEach(beer => {
    total += beer.price * beer.quantity;
  });
  cocktails.forEach(cocktail => {
    total += cocktail.price * cocktail.quantity;
  });
  dispatch({
    type: 'GET_TOTAL',
    payload: total
  });
};

export const clearOrder = () => dispatch => {
  dispatch({
    type: 'CLEAR_PIZZA',
    payload: []
  });
  dispatch({
    type: 'CLEAR_BEER',
    payload: []
  });
  dispatch({
    type: 'CLEAR_COCKTAIL',
    payload: []
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
