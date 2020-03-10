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
