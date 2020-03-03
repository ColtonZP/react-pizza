export const addToOrder = (item, type) => {
  dispatchEvent({
    type: 'ADD_ITEM',
    payload: item
  });
};

export const removeFromOrder = (item, type) => {
  dispatchEvent({
    type: 'REMOVE_ITEM',
    payload: item
  });
};
