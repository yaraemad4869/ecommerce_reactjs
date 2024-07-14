import { useContext, useEffect, useState } from "react";
import Product from "../../components/Product/Product";
// import Error from "../../pages/Error/Error";
// import "./Products.css";
import DarkContext from "../../context/Dark/Dark";
import CartContext from "../../context/Cart/Cart";
import ProductsContext from "../../context/Products/Products"
import I8nextContext from "../../context/Il8next/I8next";
import CategoryContext from "../../context/Category/Category";

const Search = () => {
    const { t } = useContext(I8nextContext)
    const { isDark } = useContext(DarkContext);
    const { products, loading, setLoading } = useContext(ProductsContext)
    const [input, setInput] = useState("")
    const { category, setCategory } = useContext(CategoryContext)
    setLoading(true)
    try {
        if (products != null && products != [] && products != undefined) {
            return (
                <>
                    {(!loading) ? <div style={{ margin: "150px 0px 80px" }}>
                        <div className="container">
                            <div className={"d-flex justify-content-between align-items-start "}>
                                <h1 className={"display-4 mb-5 text-capitalize fw-bold " + (isDark ? "text-white" : "text-black")}>{t("Search")}</h1>
                                <div className={"dropdown"}>
                                    <button className={"text-capitalize focus-ring px-4 py-3 pe-5 fw-bold btn dropdown-toggle " + (isDark ? "btn-warning" : "btn-danger")} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {t("category")}
                                    </button>
                                    <ul className={"dropdown-menu " + (isDark ? "dropdown-menu-dark text-white" : "dropdown-menu-white text-black")}>

                                        <li data-bs-dismiss="offcanvas" className="text-capitalize dropdown-item" aria-label="Close" onClick={(e) => {
                                            setCategory(e.target.innerText.toLowerCase())
                                        }}>{t("all")}</li>
                                        <li data-bs-dismiss="offcanvas" className="text-capitalize dropdown-item" aria-label="Close" onClick={(e) => {
                                            setCategory(e.target.innerText.toLowerCase())
                                        }}>{t("men's clothing")}</li>
                                        <li data-bs-dismiss="offcanvas" className="text-capitalize dropdown-item" aria-label="Close" onClick={(e) => {
                                            setCategory(e.target.innerText.toLowerCase())
                                        }}>{t("jewelery")}</li>
                                        <li data-bs-dismiss="offcanvas" className="text-capitalize dropdown-item" aria-label="Close" onClick={(e) => {
                                            setCategory(e.target.innerText.toLowerCase())
                                        }}>{t("electronics")}</li>
                                        <li data-bs-dismiss="offcanvas" className="text-capitalize dropdown-item" aria-label="Close" onClick={(e) => {
                                            setCategory(e.target.innerText.toLowerCase())
                                        }}>{t("women's clothing")}</li>
                                    </ul>
                                </div>
                            </div>
                            <input className="rounded-5 ps-3" style={{ borderColor: 'rgba(0,0,0, 0.3)' }} type="text" onFocus={(e) => {
                                e.target.classList.add("shadow")
                            }} onBlur={(e) => { e.target.classList.remove("shadow") }} onChange={(e) => {
                                setInput(e.target.value)
                                e.target.style.border = "rgba(0,0,0, 0.3)"
                            }} />
                            <div className={"d-flex row mt-4 "}>
                                {products.map((product) => {
                                    if (t(category.toLowerCase()) == t("all") || t(category.toLowerCase()) == t(product.category.toLowerCase())) {
                                        if (t(product.title.toLowerCase()).includes(input.toLowerCase())) {
                                            return (
                                                <Product key={product.id} product={product} />
                                            )
                                        }
                                    }
                                })}
                                {setLoading(false)}

                            </div>
                        </div>
                    </div> : (isDark ? <div className="spinner-border text-warning position-absolute" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : < div className="spinner-border text-danger position-absolute" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>)}
                </>
            )
        }
        else {
            throw "Products Are Invalid"
        }
    } catch (error) {
        // return (<><h1>{err}</h1></>)
        return (
            <>
                {console.log(error)}
                <div className={"container text-center mt-5 " + (isDark ? "text-white" : "text-black")}>
                    <h1>{error}</h1>
                    <p className={(isDark ? "text-white" : "text-dark")}>Please try another time</p>
                </div>
            </>
        )
    }
}
export default Search