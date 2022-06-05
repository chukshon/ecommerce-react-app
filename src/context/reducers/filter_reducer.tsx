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

const filter_reducer = (state: filterInitialStateType, action: Action) => {

  if(action.type === LOAD_PRODUCTS){
    return(
      {...state, filteredProducts: action.payload, allProducts: action.payload}
    )
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
