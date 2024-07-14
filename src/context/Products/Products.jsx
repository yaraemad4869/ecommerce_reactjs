import { createContext } from "react";
const ProductsContext = createContext({
    products: [], setProducts: () => { }, loading: true, setLoading: () => { }, topRated: {}, setTopRated: () => { }, popular: {}, setPopular: () => { }, featured: {}, setFeatured: () => { }
})
export default ProductsContext;