import { useContext } from "react";
import Product from "../Product/Product";
import "./Products.css";
import DarkContext from "../../context/Dark/Dark";
import ProductsContext from "../../context/Products/Products"
import CategoryContext from "../../context/Category/Category"
import I8nextContext from "../../context/Il8next/I8next";
import { Link } from "react-router-dom";
const Products = () => {

    // const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
    // const productss = stripe.products.list({
    //     limit: 20,
    // });
    // console.log(productss);
    const { t } = useContext(I8nextContext)
    const { category } = useContext(CategoryContext)
    const { isDark } = useContext(DarkContext);
    const { products, loading } = useContext(ProductsContext)
    // try {
    // if (!(products == null || products.length == 0 || products == undefined)) {
    return (
        <>
            <div className="container">
                <div className={"d-flex justify-content-between align-items-baseline "}>
                    <h1 id="products" className={"display-4 mb-5 text-capitalize fw-bold " + (isDark ? "text-white" : "text-black")}>{t("products")}</h1>
                    <Link className={"h1 text-decoration-underline " + (isDark ? "text-warning" : "text-danger")} to="/products">{t("More")}</Link>
                </div>
                <div className={"d-flex row align-items-stretch my-5"}>
                    {!loading && (
                        products.slice(0, 8).map((product) => {
                            product.count = 10

                            if (t(category.toLowerCase()) == t("all") || t(category.toLowerCase()) == t(product.category.toLowerCase())) {

                                return (
                                    <Product key={product.id} product={product} />
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
        </>
    )
}
export default Products