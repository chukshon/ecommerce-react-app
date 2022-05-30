import React, {useEffect, useContext, useReducer} from 'react';
import reducer from './reducers/cart_reducer';
import { InitialState, Action } from '../utils/types'
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

const initialState: InitialState = {
  user: ""
}

const CartContext = React.createContext("Default")

const CartProvider = ({children}: CartProviderProps) => {

  const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartContext.Provider value="cart_context">{children}</CartContext.Provider>
    )
}   

// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
