import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from './actions'

const initialState = {}

type CartProviderProps = {
    children: React.ReactNode
}

const ProductContext = React.createContext("Default");

export const ProductsProvider = ({ children }: CartProviderProps) => {
  return (
    <ProductContext.Provider value='products context'>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductContext)
}

