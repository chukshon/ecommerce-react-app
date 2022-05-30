export type Products = {
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

export type SingleProductImage = {
  id: string
  width: number
  height: number
  url: string
  filename: string
  size: number
  type: string
  thumbnails: {}
}

export type SingleProduct = {
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
  images: SingleProductImage[]
}

export type InitialState = {
  isSidebarOpen: boolean
  products_loading: boolean
  products_error: boolean
  products: Products[] | []
  featured_products: Products[] | []
  single_product_loading: boolean
  single_product_error: boolean
  single_product: SingleProduct | {}
}