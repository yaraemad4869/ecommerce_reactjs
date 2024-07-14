
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

import UrlContext from "../../context/Url/Url"
import DarkContext from "../../context/Dark/Dark"
import CartContext from "../../context/Cart/Cart"
import ProductsContext from "../../context/Products/Products"
import CategoryContext from "../../context/Category/Category"
import IsLogin from "../../context/IsLogin/IsLogin"

import Nav from "../../components/Nav/Nav"
import { useTranslation } from "react-i18next"
// import { I18nextProvider } from 'react-i18next';
import I8nextContext from "../../context/Il8next/I8next"
import axios from 'axios';
import Error from "../Error/Error"

const Layout = () => {

    const [url, setUrl] = useState("https://fakestoreapi.com/products")
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState({})
    const [quantity, setQuantity] = useState({})
    const [isLogin, setIsLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [topRated, setTopRated] = useState({})
    const [popular, setPopular] = useState({})
    const [featured, setFeatured] = useState({})
    const [category, setCategory] = useState("All")
    const [isDark, setIsDark] = useState(false)
    const [total, setTotal] = useState(0)
    const handleIsDark = () => {
        localStorage.setItem("Mode", !isDark)
        setIsDark(!isDark)
    }
    const [t, i18n] = useTranslation()
    const AxiosFetch = async () => {
        const products = await axios.get(url)
        setProducts(products.data)
        setLoading(false)

    }
    useEffect(() => {
        AxiosFetch()
        // fetch(url)
        //     .then(res => res.json())
        //     .then((products) => {
        //         setProducts(products)
        //         setLoading(false)
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }, [url])

    useEffect(() => {
        if (localStorage.getItem("Mode") == 'true') {
            setIsDark(true)
        }
        else if (localStorage.getItem("Mode") == 'false') {
            setIsDark(false)
        }
        else {
            localStorage.setItem("Mode", false)
        }
    }, [isDark])
    useEffect(() => {
        try {
            products.map((product) => {

                if (product.rating.rate > 4 && product.rating.count >= 400) {
                    setFeatured(() => {
                        featured[product.id] = product
                        return featured
                    })
                }
                else if (product.rating.rate > 4) {
                    setTopRated(() => {
                        topRated[product.id] = product
                        return topRated
                    })
                }
                else if (product.rating.count >= 400) {

                    setPopular(() => {
                        popular[product.id] = product
                        return popular
                    })
                }
            })
        }
        catch {
            <Error h1={"Proplem With Data"} p={"Sorry, Our team are working on this problem , please try soon..."} />
        }
    }, [products])
    document.getElementsByTagName("html")[0].style.backgroundColor = (isDark ? "black" : "white");
    document.body.style.backgroundColor = (isDark ? "black" : "white");
    try {
        return (
            <>
                {/* <I18nextProvider i18n={I8next}> */}
                <IsLogin.Provider value={{ isLogin: isLogin, setIsLogin: setIsLogin }}>
                    <I8nextContext.Provider value={{ t: useTranslation().t, il8next: i18n }}>
                        <CategoryContext.Provider value={{ category: category, setCategory: setCategory }}>
                            <ProductsContext.Provider value={{ products: products, setProducts: setProducts, topRated: topRated, setTopRated: setTopRated, popular: popular, setPopular: setPopular, featured: featured, setFeatured: setFeatured, loading: loading, setLoading: setLoading }}>
                                <CartContext.Provider value={{ cart: cart, setCart: setCart, quantity: quantity, setQuantity: setQuantity, total: total, setTotal: setTotal }}>
                                    <DarkContext.Provider value={{ isDark: isDark, setIsDark: handleIsDark }}>
                                        <UrlContext.Provider value={url}>
                                            {!loading ?
                                                <>
                                                    <Nav />
                                                    <Outlet />

                                                </>
                                                : (isDark ? <div className="spinner-border text-warning position-absolute" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div> : < div className="spinner-border text-danger position-absolute" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>)
                                            }
                                        </UrlContext.Provider >
                                    </DarkContext.Provider >
                                </CartContext.Provider>
                            </ProductsContext.Provider>
                        </CategoryContext.Provider>
                    </I8nextContext.Provider>
                </IsLogin.Provider>
                {/* </I18nextProvider> */}
            </>
        )
    }
    catch {
        return (<><Error h1={"Proplem With Data"} p={"Sorry, Our team are working on this problem , please try soon..."} /></>)
    }
}
export default Layout