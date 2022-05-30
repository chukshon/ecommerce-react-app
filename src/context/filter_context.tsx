import React, { useEffect, useContext, useReducer } from 'react'
import reducer from './reducers/filter_reducer';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from './actions'

import { useProductsContext } from './products_context'

type CartProviderProps = {
    children: React.ReactNode
}
const initialState = {}

const FilterContext = React.createContext("Default");

export const FilterProvider = ({children}: CartProviderProps) => {
    return (
        <FilterContext.Provider value="cart_context">{children}</FilterContext.Provider>
    )
}   
export const useFilterContext = () => {
  return useContext(FilterContext)
}
