import { useParams } from "react-router-dom"
import "./ProductDetails.css"
import UrlContext from "../../context/Url/Url"
import { useContext, useEffect, useState } from "react"
import DarkContext from "../../context/Dark/Dark";
import CartContext from "../../context/Cart/Cart";
import { useTranslation } from "react-i18next";
import ProductsContext from "../../context/Products/Products";
import I8nextContext from "../../context/Il8next/I8next";
import IsLoginContext from "../../context/IsLogin/IsLogin";

const ProductDetails = () => {
    // const { t } = useTranslation();
    const { t } = useContext(I8nextContext)
    const { products } = useContext(ProductsContext)
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const Url = useContext(UrlContext)
    const [product, setProduct] = useState({})
    const { isDark } = useContext(DarkContext);
    const { cart, setCart, quantity, setQuantity } = useContext(CartContext)
    let { total, setTotal } = useContext(CartContext)
    const { isLogin, setIsLogin } = useContext(IsLoginContext)
    // 

    useEffect(() => {
        let pro = products.filter(product => product.id == params.id)
        setProduct(pro[0])

        setLoading(false)
    }, [params.id])
    // function Looper({ times, element, isFill }) {
    //     const keys = [...Array(times).keys()];
    //     return (
    //         keys.map((item) => (
    //             <span key={item} className={"material-symbols-outlined " + (isDark ? "text-warning" : "text-danger")} style={{ fontVariationSettings: `'FILL' ${isFill}` }}>
    //                 {element}
    //             </span>
    //         ))
    //     );
    // }
    if (Object.keys(cart).length != 0) {
        for (const value in cart) {
            if (value == product.id) {
                return (
                    <>
                        {loading ?
                            <div className="container">
                                {(isDark ? (<div className="spinner-border text-warning position-absolute" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>) : (<div className="spinner-border text-danger position-absolute" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>)
                                )}
                            </div>
                            :
                            < div style={{ marginTop: "150px" }}>
                                < div className={"shadow p-3 d-sm-flex flex-row d-block container card " + (isDark ? "bg-black text-white border-white p-5" : "")} >
                                    <div className=" col-md-4 col-xl-3 col-lg-3 col-sm-5 col-12">
                                        <img src={product.image} className="card-img img-fluid" alt={t(product.title) + " " + t("Image")} />
                                    </div>
                                    <div className=" col-xl-9 col-lg-9 col-md-7 col-sm-7 col-12 p-3">
                                        <h3 className="card-title">{t(product.title)}</h3>
                                        <p className="card-text">{t(product.description)}</p>
                                        <p className="card-text text-capitalize">{t("category")}: {t(product.category)}</p>
                                        <h4 className={"card-text " + (isDark ? "text-warning" : "text-danger")}>{product.price}$</h4>
                                        {/* <p className="card-text d-flex align-items-bottom">{product.rating.rate}
                                        <Looper times={Math.floor(cart[product].rating.rate)} element="star" isFill={1}></Looper>
                                        {Math.round(cart[product].rating.rate) - Math.floor(cart[product].rating.rate) == 1 ? <span className={"material-symbols-outlined " + (isDark ? "text-warning" : "text-danger")}>
                                            star_half
                                        </span> : null}<Looper times={5 - Math.round(cart[product].rating.rate)} element="star" isFill={0}></Looper>({cart[product].rating.count})

                                    </p> */}
                                        <div onClick={() => {
                                            if (!isLogin) {
                                                alert("Please Login")
                                            }
                                        }}>
                                            <button disabled={!isLogin} className="text-capitalize fw-bold btn btn-success" onClick={(e) => {
                                                if (e.target.innerText.toLowerCase() == t("add to cart")) {
                                                    e.target.classList.add("btn-success")
                                                    e.target.classList.remove((isDark ? "btn-warning" : "btn-danger"))
                                                    e.target.innerText = t("added to cart")
                                                    cart[value] = product
                                                    setTotal(total + product.price)
                                                    setCart(cart)
                                                } else {
                                                    e.target.classList.remove("btn-success")
                                                    e.target.classList.add((isDark ? "btn-warning" : "btn-danger"))
                                                    e.target.innerText = t("add to cart")
                                                    setTotal(total - product.price * quantity[product.id])
                                                    delete cart[value]
                                                    setCart(cart)
                                                }
                                                setQuantity(() => {
                                                    quantity[product.id] = 0
                                                    return { ...quantity }
                                                })
                                            }}>{t("added to cart")}</button>
                                        </div>
                                    </div>
                                </div >
                            </div>
                        }
                    </>
                )
            }
        }
    }
    return (
        <>
            {loading ? <div className="container">(isDark ? <div className="spinner-border text-warning position-absolute" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> : < div className="spinner-border text-danger position-absolute" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>)</div> :
                <div style={{ marginTop: "150px" }}>
                    < div className={"shadow p-3 d-sm-flex flex-row d-block container card " + (isDark ? "bg-black text-white border-white p-5" : "")} >
                        <div className=" col-md-4 col-xl-3 col-lg-3 col-sm-5 col-12">
                            <img src={product.image} className="card-img img-fluid" alt={t(product.title) + " " + t("Image")} />
                        </div>
                        <div className=" col-xl-9 col-lg-9 col-md-7 col-sm-7 col-12 p-3">
                            <h3 className="card-title">{t(product.title)}</h3>
                            <p className="card-text">{t(product.description)}</p>
                            <p className="card-text text-capitalize">{t("category")}: {t(product.category)}</p>
                            <h4 className={"card-text " + (isDark ? "text-warning" : "text-danger")}>{product.price}$</h4>
                            {/* <p className="card-text d-flex align-items-bottom">{product.rating.rate}
                                <Looper times={Math.floor(cart[product].rating.rate)} element="star" isFill={1}></Looper>
                                {Math.round(cart[product].rating.rate) - Math.floor(cart[product].rating.rate) == 1 ? <span className={"material-symbols-outlined " + (isDark ? "text-warning" : "text-danger")}>
                                    star_half
                                </span> : null}<Looper times={5 - Math.round(cart[product].rating.rate)} element="star" isFill={0}></Looper>({cart[product].rating.count})

                            </p> */}
                            <div onClick={() => {
                                if (!isLogin) {
                                    alert("Please Login")
                                }
                            }}>
                                <button disabled={!isLogin} className={"text-capitalize fw-bold btn " + (isDark ? "btn-warning" : "btn-danger")} onClick={(e) => {
                                    if (e.target.innerText.toLowerCase() == t("add to cart")) {
                                        e.target.classList.add("btn-success")
                                        e.target.classList.remove((isDark ? "btn-warning" : "btn-danger"))
                                        e.target.innerText = t("added to cart")
                                        cart[product.id] = product
                                        setTotal(total + product.price)
                                        setCart(cart)
                                    } else {
                                        e.target.classList.remove("btn-success")
                                        e.target.classList.add((isDark ? "btn-warning" : "btn-danger"))
                                        e.target.innerText = t("add to cart")
                                        setTotal(total - product.price * quantity[product.id])
                                        delete cart[product.id]
                                        setCart(cart)
                                    }
                                    console.log(cart)
                                }}>{t("add to cart")}</button>
                            </div>
                        </div>
                    </div >
                </div>}
        </>
    )

}
export default ProductDetails