import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
const ProductList = () => {
  const {filteredProducts} = useFilterContext()
   if (filteredProducts.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search...
      </h5>
    )
  }
  return <GridView filteredProducts={filteredProducts} />

}
  export default ProductList
