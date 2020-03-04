import pizzas from '../menu/pizzas';

export const addPizza = item => dispatch => {
  dispatch({
    type: 'ADD_PIZZA',
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
    total += pizza.price;
  });
  beers.forEach(beer => {
    total += beer.price;
  });
  cocktails.forEach(cocktail => {
    total += cocktail.price;
  });
  dispatch({
    type: 'GET_TOTAL',
    payload: total
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
