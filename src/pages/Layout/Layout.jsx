// import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { useEffect, useState } from "react"
import UrlContext from "../../context/Url/Url"
import DarkContext from "../../context/Dark/Dark"
import { Outlet } from "react-router-dom"
import CartContext from "../../context/Cart/Cart"
import ProductsContext from "../../context/Products/Products"
import CategoryContext from "../../context/Category/Category"
import React from 'react';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from "../../components/Translations/en.json";
import arTranslation from '../../components/Translations/ar.json';
import { I18nextProvider } from 'react-i18next';
import Nav from "../../components/Nav/Nav"
import { useTranslation } from "react-i18next"
const Layout = () => {
    i18n.use(initReactI18next).init({
        lng: 'en', // Set the default language
        fallbackLng: 'en', // Fallback language if a translation is missing
        resources: {
            en: { translation: enTranslation }, // English translations
            ar: { translation: arTranslation }, // French translations
        },
    });

    const [url, setUrl] = useState("https://fakestoreapi.com/products")
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState({})
    const [quantity, setQuantity] = useState({})
    // const [quantity, setQuantity] = useState({})
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("All")
    const [isDark, setIsDark] = useState(false)
    const [total, setTotal] = useState(0)
    const handleIsDark = () => {
        localStorage.setItem("Mode", !isDark)
        setIsDark(!isDark)
    }


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((products) => {
                setProducts(products)

                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })
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
    document.getElementsByTagName("html")[0].style.backgroundColor = (isDark ? "black" : "white");
    document.body.style.backgroundColor = (isDark ? "black" : "white");
    document.getElementsByTagName("html")[0].style.position = "relative"
    return (
        <>
            <I18nextProvider i18n={i18n}>
                {/* <LanguageContext.Provider value={{ t: useTranslation().t() }}> */}
                <CategoryContext.Provider value={{ category: category, setCategory: setCategory }}>
                    <ProductsContext.Provider value={{ products: products, setProducts: setProducts, loading: loading }}>
                        <CartContext.Provider value={{ cart: cart, setCart: setCart, quantity: quantity, setQuantity: setQuantity, total: total, setTotal: setTotal }}>
                            <DarkContext.Provider value={{ isDark: isDark, setIsDark: handleIsDark }}>
                                <UrlContext.Provider value={url}>
                                    {!loading ?
                                        <>
                                            <Nav />
                                            <Outlet />
                                            {/* <div className="space"> */}
                                            {/* <div style={{ paddingTop: "260px" }}>
                                                <Footer />
                                            </div> */}
                                            {/* </div> */}

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
                {/* </LanguageContext.Provider> */}
            </I18nextProvider >
        </>
    )
}
export default Layout