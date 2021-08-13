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
  // 4 (return)
  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;
