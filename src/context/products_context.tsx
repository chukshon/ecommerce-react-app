import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducers/products_reducer'
import { products_url as url } from '../utils/constants'

import { InitialStateType } from '../types/products'

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

const initialState: InitialStateType= {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {}
}

type CartProviderProps = {
  children: React.ReactNode
}

const ProductContext = React.createContext<any>(initialState)

export const ProductsProvider = ({ children }: CartProviderProps) => {

   const [state, dispatch] = useReducer(reducer, initialState);

   const fetchProducts = async(url: string) =>{
    dispatch({type: GET_PRODUCTS_BEGIN})
    try{
      const response = await axios.get(url)
      const products = response.data
      dispatch({type: GET_PRODUCTS_SUCCESS, payload: products})
    }
    catch(err){
      dispatch({type: GET_PRODUCTS_ERROR})
    }
   }    

   const openSideBar = () => {
     dispatch({type: SIDEBAR_OPEN})
   }

   const closeSideBar = () => {
     dispatch({type: SIDEBAR_CLOSE})
   }

   useEffect(() => {
     fetchProducts(url)
   }, [])
  return (
    <ProductContext.Provider value={{...state, openSideBar, closeSideBar} }>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductContext)
}
