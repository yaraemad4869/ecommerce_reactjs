import { createContext } from "react";
const CartContext = createContext({ cart: {}, setCart: () => { }, quantity: {}, setQuantity: () => { }, total: 0, setTotal: () => { } })
export default CartContext;