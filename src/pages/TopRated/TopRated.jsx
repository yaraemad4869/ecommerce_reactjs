import React from 'react'
import { useContext } from 'react'
import ProductsContext from '../../context/Products/Products'
import Product from "../../components/Product/Product";
import DarkContext from "../../context/Dark/Dark";
import CategoryContext from "../../context/Category/Category"
import I8nextContext from "../../context/Il8next/I8next";
const TopRated = () => {
    const { t } = useContext(I8nextContext)
    const { topRated } = useContext(ProductsContext)
    const { category, setCategory } = useContext(CategoryContext)
    const { isDark } = useContext(DarkContext);
    const { loading } = useContext(ProductsContext)
    return (
        <div>
            <div style={{ marginTop: "150px" }}>
                <div className="container">
                    <div className={"d-flex justify-content-between align-items-start "}>
                        <h1 className={"display-4 mb-5 text-capitalize fw-bold " + (isDark ? "text-white" : "text-black")}>{t("top rated")}</h1>
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
                    <div className={"d-flex row align-items-stretch my-5"}>
                        {!loading && (
                            Object.keys(topRated).map((product) => {

                                if (t(category.toLowerCase()) == t("all") || t(category.toLowerCase()) == t(topRated[product].category.toLowerCase())) {
                                    return (
                                        <Product key={product} product={topRated[product]} />
                                    )
                                }
                            })
                        )}
                        <div className="container  ">
                            {loading && (isDark ? <div className="spinner-border text-warning position-absolute" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> : < div className="spinner-border text-danger position-absolute" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopRated