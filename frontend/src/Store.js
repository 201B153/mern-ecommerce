import { createContext, useReducer } from 'react';

export const Store = createContext();

export function StoreProvider(props) {
  const initialState = {
    cart: {
      cartItems: [],
    },
  };
  function reducer(state, action) {
    switch (action.type) {
      case 'CART_ADD_ITEM':
        //add to cart
        const newItem = action.payload;
        const existItem = state.cart.cartItems.find((item) =>
          item._id === newItem._id ? newItem : item
        );
        const cartItems = existItem
          ? state.cart.cartItems.map((item) =>
              item._id === existItem._id ? newItem : item
            )
          : [...state.cart.cartItems, newItem];
        return { ...state, cart: { ...state.cart, cartItems } };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}> {props.children} </Store.Provider>;
}
