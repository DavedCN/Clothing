export const addItem = (cartsItems, cartItemToAdd) => {
  const existingCartItem = cartsItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartsItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartsItems, { ...cartItemToAdd, quantity: 1 }];
};
