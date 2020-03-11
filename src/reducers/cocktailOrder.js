export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_COCKTAIL':
      if (state.includes(action.payload)) {
        return state.map(item => {
          if (item === action.payload) {
            item.quantity += 1;
            return item;
          }
          return item;
        });
      }
      action.payload.quantity = 1;
      return [...state, action.payload];
    case 'CLEAR_COCKTAIL':
      return action.payload;
    case 'REMOVE_COCKTAIL':
      return state.filter(cocktail => cocktail !== action.payload);
    default:
      return state;
  }
};
