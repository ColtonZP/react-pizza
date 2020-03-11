export const addBeer = item => dispatch => {
  dispatch({
    type: 'ADD_BEER',
    payload: item
  });
};

export const removeBeer = item => dispatch => {
  dispatch({
    type: 'REMOVE_BEER',
    payload: item
  });
};