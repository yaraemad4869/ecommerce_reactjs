import { useContext, useState } from "react";
import "./Cart.css";
import DarkContext from "../../context/Dark/Dark";
import CartContext from "../../context/Cart/Cart";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import I8nextContext from "../../context/Il8next/I8next"
import IsLoginContext from "../../context/IsLogin/IsLogin";
const Cart = () => {
    const { t } = useContext(I8nextContext)
    const navigate = useNavigate()
    const { isDark } = useContext(DarkContext)
    const { cart, setCart, quantity, setQuantity } = useContext(CartContext)
    let { total, setTotal } = useContext(CartContext)
    const { isLogin, setIsLogin } = useContext(IsLoginContext)

    function Looper({ times, element, isFill }) {
        const keys = [...Array(times).keys()];
        return (
            keys.map((item) => (
                <span key={item} className={"material-symbols-outlined " + (isDark ? "text-warning" : "text-danger")} style={{ fontVariationSettings: `'FILL' ${isFill}` }}>
                    {element}
                </span>
            ))
        );
    }

    try {
        if (isLogin) {
            if (Object.keys(cart).length != 0) {

                return (
                    <>
                        <div style={{ marginTop: "150px" }}>
                            <div className="container">

                                <div className={"rounded d-flex justify-content-between align-items-baseline checkout mt-2 " + (isDark ? "bg-warning text-black border-black" : "bg-danger text-white border-white")}>
                                    <h2 className=" fw-bold">{t("Checkout")} : {(total).toFixed(2)}$</h2>
                                    <button className={"btn p-3 text-capitalize fw-bold w-25 " + (isDark ? "btn-dark" : "btn-light")}>{t("buy")}</button>
                                </div>
                                <div className="row total my-5">
                                    {Object.keys(cart).map((product) => {
                                        if (quantity[product] == null || quantity[product] == undefined || quantity[product] == 0) {
                                            setQuantity(() => {
                                                quantity[product] = 1
                                                return { ...quantity }
                                            })
                                        }
                                        return (
                                            <div key={product} className={"mb-3 col-lg-3 p-1 col-md-4 col-sm-6 col-xs-12 d-inline-flex flex-column " + (isDark ? "bg-black" : "bg-white")}>
                                                <div className={"card shadow justify-content-between h-100 d-inline-flex flex-column " + (isDark ? "bg-black" : "bg-white")}>

                                                    <div onClick={() => navigate(`/products/${cart[product].id}`)}>
                                                        <img src={cart[product].image} className="card-img img-fluid" alt={t(cart[product].title) + " " + t("Image")} />
                                                        <div className={"p-3 " + (isDark ? "text-white" : "text-dark")}>
                                                            <h3 className={"card-title " + (isDark ? "text-white" : "text-black")}>{t(cart[product].title).split(" ").slice(0, 3).join(" ")}</h3>
                                                            <p className="card-text">{t(cart[product].description).split("").slice(0, 82).join("")}</p>
                                                            <p className="card-text text-capitalize">{t("category")}: {t(cart[product].category)}</p>
                                                        </div>
                                                    </div>
                                                    <div className="ps-3" >
                                                        <div className="text-center d-flex align-items-baseline">
                                                            <button className={"text-center d-inline-flex justify-content-center btn col-1 " + (isDark ? "btn-warning" : "btn-danger")} onClick={() => {
                                                                if (quantity[product] > 1) {
                                                                    quantity[product]--
                                                                    setTotal(total - cart[product].price)
                                                                }
                                                            }}>-</button>
                                                            <p className={"text-center col-2 " + (isDark ? "text-white" : "text-black")}>{quantity[product]}</p>
                                                            <button className={"text-center d-inline-flex justify-content-center btn col-1 " + (isDark ? "btn-warning" : "btn-danger")} onClick={() => {
                                                                if (quantity[product] < cart[product].count) {
                                                                    quantity[product]++
                                                                    setTotal(total + cart[product].price)
                                                                }
                                                            }}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className={(isDark ? "text-white" : "text-dark")} onClick={() => navigate(`/products/${cart[product].id}`)}>
                                                        <div className={"ps-3 " + (isDark ? "text-white" : "text-dark")}>
                                                            <h4 className={"card-text " + (isDark ? "text-warning" : "text-danger")}>{cart[product].price}$</h4>
                                                            <p className="card-text d-flex align-items-bottom">{cart[product].rating.rate}
                                                                <Looper times={Math.floor(cart[product].rating.rate)} element="star" isFill={1}></Looper>
                                                                {Math.round(cart[product].rating.rate) - Math.floor(cart[product].rating.rate) == 1 ? <span className={"material-symbols-outlined " + (isDark ? "text-warning" : "text-danger")}>
                                                                    star_half
                                                                </span> : null}<Looper times={5 - Math.round(cart[product].rating.rate)} element="star" isFill={0}></Looper>({cart[product].rating.count})

                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="p-3 text-center">
                                                        <button className={"text-capitalize btn btn-success"} onClick={(e) => {
                                                            if (e.target.innerText.toLowerCase() == t("added to cart")) {
                                                                e.target.classList.remove("btn-success")
                                                                e.target.classList.add((isDark ? "btn-warning" : "btn-danger"))
                                                                e.target.innerText = t("add to cart")
                                                                setTotal(total - (cart[product].price * quantity[product]))
                                                                quantity[product] = 0

                                                                setCart(() => {
                                                                    delete cart[product]
                                                                    return { ...cart }
                                                                })
                                                            }
                                                        }}>{t("added to cart")}</button>
                                                    </div>
                                                </div>
                                            </div >
                                        )

                                    })
                                    }

                                </div>
                            </div>
                        </div >
                    </>
                )

            }
            else {
                throw "cart is empty"
            }
        }
        else {
            throw "Login to Show The Cart"
        }

    }
    catch (error) {
        return (<>
            {setTotal(0)}
            <div style={{ marginTop: "150px" }}>
                <div className={"container text-center mt-5 " + (isDark ? "text-white" : "text-black")}>
                    <h1 className="text-capitalize">{t(error)}</h1>
                    <p className={"text-capitalize " + (isDark ? "text-white" : "text-dark")}>{t("add products to") + " " + t("cart")} <Link to={"/"} className={"text-capitalize text-decoration-underline " + (isDark ? "text-warning" : "text-danger")}>{t("go to")} {t("home")}</Link></p>
                </div>
            </div>
        </>)
    }
}
export default Cart