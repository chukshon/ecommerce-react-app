import { ProductsType, SingleProductType } from './products'


export type filterContextType = {

}
export type filterInitialStateType = {
    filteredProducts: ProductsType[]
    allProducts: ProductsType[];
    grid_view: boolean;
    sort: string;
    filters: {
        text: string,
        company: string,
        category: string,
        color: string,
        min_price: number,
        max_price: number,
        price: number,
        shipping: boolean
    }
}