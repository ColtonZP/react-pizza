export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_TOTAL':
      return action.payload;
    default:
      return state;
  }
};
