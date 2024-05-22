import { useContext } from "react"
import "./Product.css"
import { useNavigate } from "react-router-dom"
import DarkContext from "../../context/Dark/Dark"
import CartContext from "../../context/Cart/Cart"
const Product = ({ product }) => {
    const navigate = useNavigate()
    const { isDark, setIsDark } = useContext(DarkContext)
    const { cart, setCart, quantity, setQuantity } = useContext(CartContext)
    let { total, setTotal } = useContext(CartContext)
    function Looper({ children, times, element, isFill }) {
        const keys = [...Array(times).keys()];
        return (
            keys.map((item) => (
                <span key={item} className={"material-symbols-outlined " + (isDark ? "text-warning" : "text-danger")} style={{ fontVariationSettings: `'FILL' ${isFill}` }}>
                    {element}
                </span>
            ))
        );
    }
    if (Object.keys(cart).length != 0) {
        for (const value in cart) {
            if (cart[value].id == product.id) {
                return (
                    <>
                        <div className={"mb-3 p-1 col-lg-3 col-md-4 col-sm-6 col-xs-12 d-inline-flex flex-column " + (isDark ? "bg-black" : "bg-white")}>
                            <div className={"card shadow justify-content-between h-100 d-inline-flex flex-column " + (isDark ? "bg-black" : "bg-white")}>
                                <div onClick={() => navigate(`/products/${product.id}`)}>
                                    <img src={product.image} className="card-img img-fluid" alt={product.title + " Image"} />
                                    <div className={"p-3 " + (isDark ? "text-white" : "text-dark")}>
                                        <h3 className={"card-title " + (isDark ? "text-white" : "text-black")}>{product.title.split(" ").slice(0, 3).join(" ")}</h3>
                                        <p className="card-text">{product.description.split("").slice(0, 82).join("")}</p>
                                        <p className="card-text text-capitalize">category: {product.category}</p>
                                        <h4 className={"card-text " + (isDark ? "text-warning" : "text-danger")}>{product.price}$</h4>
                                        <p className="card-text d-flex align-items-bottom">{product.rating.rate}
                                            <Looper times={Math.floor(product.rating.rate)} element="star" isFill={1}></Looper>
                                            {Math.round(product.rating.rate) - Math.floor(product.rating.rate) == 1 ? <span className={"material-symbols-outlined " + (isDark ? "text-warning" : "text-danger")}>
                                                star_half
                                            </span> : null}<Looper times={5 - Math.round(product.rating.rate)} element="star" isFill={0}></Looper>({product.rating.count})
                                        </p>
                                    </div>

                                </div>
                                <div className="container-fluid w-100 mb-3 text-center">
                                    <button className={"text-capitalize fw-bold btn btn-success"} onClick={(e) => {
                                        if (e.target.innerText == "Add To Cart") {
                                            e.target.classList.add("btn-success")
                                            e.target.classList.remove((isDark ? "btn-warning" : "btn-danger"))
                                            e.target.innerText = "added to cart"
                                            cart[product.id] = product
                                            setTotal(total + product.price)
                                            setCart(cart)
                                        } else {
                                            e.target.classList.remove("btn-success")
                                            e.target.classList.add((isDark ? "btn-warning" : "btn-danger"))
                                            e.target.innerText = "add to cart"
                                            setTotal(total - product.price * quantity[product.id])
                                            delete cart[product.id]
                                            setCart(cart)
                                        }
                                        setQuantity(() => {
                                            quantity[product.id] = 0
                                            return { ...quantity }
                                        })
                                    }}>added to cart</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        }
    }



    return (
        <>
            <div className={"mb-3 col-lg-3 p-1 col-md-4 col-sm-6 col-xs-12 d-inline-flex flex-column " + (isDark ? "bg-black" : "bg-white")}>
                <div className={"card shadow justify-content-between h-100 d-inline-flex flex-column " + (isDark ? "bg-black" : "bg-white")}>
                    <div onClick={() => navigate(`/products/${product.id}`)}>
                        <img src={product.image} className="card-img img-fluid" alt={product.title + " Image"} />
                        <div className={"p-3 " + (isDark ? "text-white" : "text-dark")}>
                            <h3 className={"card-title " + (isDark ? "text-white" : "text-black")}>{product.title.split(" ").slice(0, 3).join(" ")}</h3>
                            <p className="card-text">{product.description.split("").slice(0, 82).join("")}</p>
                            <p className="card-text text-capitalize">category: {product.category}</p>
                            <h4 className={"card-text " + (isDark ? "text-warning" : "text-danger")}>{product.price}$</h4>
                            <p className="card-text d-flex align-items-bottom">{product.rating.rate}
                                <Looper times={Math.floor(product.rating.rate)} element="star" isFill={1}></Looper>
                                {Math.round(product.rating.rate) - Math.floor(product.rating.rate) == 1 ? <span className={"material-symbols-outlined " + (isDark ? "text-warning" : "text-danger")}>
                                    star_half
                                </span> : null}<Looper times={5 - Math.round(product.rating.rate)} element="star" isFill={0}></Looper>({product.rating.count})
                            </p>
                        </div>

                    </div>
                    <div className="container-fluid w-100 mb-3 text-center">
                        <button className={"text-capitalize fw-bold btn " + (isDark ? "btn-warning" : "btn-danger")} onClick={(e) => {
                            if (e.target.innerText == "Add To Cart") {
                                e.target.classList.add("btn-success")
                                e.target.classList.remove((isDark ? "btn-warning" : "btn-danger"))
                                e.target.innerText = "added to cart"
                                cart[product.id] = product
                                setCart(cart)
                                setTotal(total + product.price)
                            } else {
                                e.target.classList.remove("btn-success")
                                e.target.classList.add((isDark ? "btn-warning" : "btn-danger"))
                                e.target.innerText = "add to cart"
                                setTotal(total - product.price * quantity[product.id])
                                setQuantity(() => {
                                    quantity[product.id] = 0
                                    return { ...quantity }
                                })
                                delete cart[product.id]
                                setCart(cart)
                            }
                        }}>add to cart</button>
                    </div>
                </div>
            </div >
        </>)
}
export default Product