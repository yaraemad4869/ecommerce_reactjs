import { createContext } from "react";
const ProductsContext = createContext({ products: [], setProducts: () => { }, loading: true })
export default ProductsContext;