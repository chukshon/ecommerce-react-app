
import { ProductsType, SingleProductType } from '../types/products'
export const formatPrice = (number:number) => {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}

type Type =
  | "category"
  | "colors"
  | "company"

export const getUniqueValues = (data:ProductsType[], type: Type) => {
  let unique = data.map((item: ProductsType) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...Array.from(new Set(unique))]
}
