import { useState } from 'react';
import initialState from '../initialState.js';

const useInitialState = () => {
  // 1
  const [state, setState] = useState(initialState);
  // 2
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  // 3
  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (_item, indexCurrent) => indexCurrent !== indexToRemove
      ),
    });
  };
  // 5
  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  // 5
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
      cart: [],
    });
  };
  // 4 (return)
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
