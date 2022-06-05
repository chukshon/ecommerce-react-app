import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { Action } from '../../utils/types'

import {filterInitialStateType} from '../../types/filter'
import { ProductsType } from '../../types/products'

type ACTIONTYPE =
  | { type: typeof LOAD_PRODUCTS; payload:ProductsType[]}
  | { type: typeof SET_GRIDVIEW; }
  | { type: typeof SET_LISTVIEW; }
  | { type: typeof UPDATE_SORT; payload: string};


  
const filter_reducer = (state: filterInitialStateType, action: ACTIONTYPE) => {

  if(action.type === LOAD_PRODUCTS){
    return(
      {...state, filteredProducts: action.payload, allProducts: action.payload}
    )
  }
  if(action.type === SET_LISTVIEW){
    return({
      ...state, grid_view: false
    })
  }
  if(action.type === SET_GRIDVIEW){
    return({
      ...state, grid_view: true
    })
  }

 if(action.type === UPDATE_SORT){
    return({
      ...state, sort: action.payload
    })
  }

  throw new Error(`No Matching "" - action type`)
}

export default filter_reducer
