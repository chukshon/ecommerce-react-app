import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

import { Action } from '../../utils/types'
import { ProductsType } from '../../types/products'

import { InitialStateType } from '../../types/products'
const products_reducer = (state: InitialStateType, action: any) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featuredProducts = action.payload.filter(
      (product: ProductsType) => product.featured === true
    )
    return {
      ...state,
      products_loading: false,
      featured_products: featuredProducts,
      products: action.payload,
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: false
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
