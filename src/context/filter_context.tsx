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
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false
  }
}

const FilterContext = React.createContext<any>({});

export const FilterProvider = ({children}: CartProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const {products} = useProductsContext();

    useEffect(() => {
      dispatch({type: LOAD_PRODUCTS, payload: products})
    }, [products])
   
    useEffect(() => {
       dispatch({type: FILTER_PRODUCTS})
       dispatch({type: SORT_PRODUCTS})
     
    },[products, state.sort, state.filters])

    const setGridView = () => {
      dispatch({type: SET_GRIDVIEW})
    }

    const setListView = () => {
      dispatch({type: SET_LISTVIEW})
    }

    const updateSort = (e: React.FormEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement
      dispatch({type: UPDATE_SORT, payload: target.value})
    }

    const updateFilter = (e: React.FormEvent<HTMLInputElement>) => {
      let target = e.target as HTMLInputElement
      const name = target.name;
      let value: any = target.value;
      if(name === 'category'){
        value = target.textContent
      }
      if(name === "color"){
         value = target.dataset.color
      }
      if (name === 'price') {
       value = Number(value)
      }
      if (name === 'shipping') {
      value = target.checked
      }
      dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
    }
    const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }
    return (
        <FilterContext.Provider value={{...state, setGridView, setListView, updateSort, updateFilter, clearFilters}}>{children}</FilterContext.Provider>
    )
}   
export const useFilterContext = () => {
  return useContext(FilterContext)
}
