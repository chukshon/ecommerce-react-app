export type ProductContextType = {
  state: InitialStateType
}

export type ProductsType = {
  name: string
  price: number
  description: string
  stock: string
  stars: string
  reviews: string
  id: string
  company: string
  images: string
  featured: boolean
}

export type SingleProductImageType = {
  id: string
  width: number
  height: number
  url: string
  filename: string
  size: number
  type: string
  thumbnails: {}
}

export type SingleProductType = {
  name: string
  price: number
  description: string
  stock: string
  stars: string
  reviews: string
  id: string
  company: string
  shipping: boolean
  colors: string[]
  category: string
  images: SingleProductImageType[]
}

export type InitialStateType = {
  isSidebarOpen: boolean
  products_loading: boolean
  products_error: boolean
  products: ProductsType[] | []
  featured_products: ProductsType[] | []
  single_product_loading: boolean
  single_product_error: boolean
  single_product: SingleProductType | {}
}