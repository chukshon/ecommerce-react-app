import React, {useEffect, useContext, useReducer} from 'react';
import reducer from './reducers/cart_reducer';

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from './actions'

type CartProviderProps = {
    children: React.ReactNode
}

const initialState = {}

const CartContext = React.createContext("Default")

const CartProvider = ({children}: CartProviderProps) => {
    return (
        <CartContext.Provider value="cart_context">{children}</CartContext.Provider>
    )
}   

// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
