export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PIZZA':
      if (state.includes(action.payload.item)) {
        return state.map(item => {
          if (item === action.payload.item) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
      }
      action.payload.item.quantity = action.payload.quantity;
      return [...state, action.payload.item];
    case 'CLEAR_PIZZA':
      return action.payload;
    case 'REMOVE_PIZZA':
      return state.filter(pizza => pizza !== action.payload);
    default:
      return state;
  }
};
