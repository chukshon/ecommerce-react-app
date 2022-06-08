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

import { filterInitialStateType } from '../../types/filter'
import { ProductsType, SingleProductType } from '../../types/products'

type ACTIONTYPE =
  | { type: typeof LOAD_PRODUCTS; payload: ProductsType[] }
  | { type: typeof SET_GRIDVIEW }
  | { type: typeof SET_LISTVIEW }
  | { type: typeof UPDATE_SORT; payload: string }
  | { type: typeof SORT_PRODUCTS }
  | {type: typeof FILTER_PRODUCTS}
  | {type: typeof CLEAR_FILTERS}
  | {type: typeof UPDATE_FILTERS; payload: {name: string, value: string}}

const filter_reducer = (state: filterInitialStateType, action: ACTIONTYPE) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice: number[] | number = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)
    return {
      ...state,
      filteredProducts: action.payload,
      allProducts: action.payload,
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    }
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    }
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    }
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state
    let tempProducts = filteredProducts
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.price - b.price
      })
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price)
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return {
      ...state,
      filteredProducts: tempProducts,
    }
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: {...state.filters, [name]: value } }
  }

  if(action.type === FILTER_PRODUCTS){
    const { allProducts } = state
    const { text, category, company, color, price, shipping } = state.filters
    let tempProducts = [...allProducts];

    if(text){
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text)
      })
    }
    // Category
    if(category !== "all"){
       tempProducts = tempProducts.filter(
        (product: ProductsType) => product.category === category
      )
    }
    // company
     if(company !== "all"){
       tempProducts = tempProducts.filter(
        (product: ProductsType) => product.company === company
      )
    }
    // color
      if (color !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color)
      })
    }
    // price
    tempProducts = tempProducts.filter((product) => product.price <= price)
    // shipping
    if (shipping) {
      tempProducts = tempProducts.filter((product) => product.shipping === true)
    }
    return { ...state, filteredProducts: tempProducts }
  }
    if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    }
  }

  throw new Error(`No Matching "" - action type`)
}

export default filter_reducer
