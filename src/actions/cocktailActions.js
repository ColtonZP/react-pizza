export const addCocktail = item => dispatch => {
  dispatch({
    type: 'ADD_COCKTAIL',
    payload: item
  });
};

export const removeCocktail = item => dispatch => {
  dispatch({
    type: 'REMOVE_COCKTAIL',
    payload: item
  });
};