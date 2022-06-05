import React, { useEffect, useContext, useReducer } from 'react'
import reducer from './reducers/filter_reducer';
import {useProductsContext} from './products_context'
import {filterContextType} from '../types/filter'
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

import {filterInitialStateType} from '../types/filter'

type CartProviderProps = {
    children: React.ReactNode
}
const initialState: filterInitialStateType = {
  filteredProducts: [],
  allProducts: [],
  grid_view: true,
  sort: 'price-lowest'
}

const FilterContext = React.createContext<any>({});

export const FilterProvider = ({children}: CartProviderProps) => {

    const {products} = useProductsContext()
    useEffect(() => {
      dispatch({type: LOAD_PRODUCTS, payload: products})
    }, [products])
    
    const getProducts = () => {

    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <FilterContext.Provider value={{...state}}>{children}</FilterContext.Provider>
    )
}   
export const useFilterContext = () => {
  return useContext(FilterContext)
}
