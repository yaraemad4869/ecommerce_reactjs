import { useContext, useEffect, useState } from "react";
import Product from "../../components/Product/Product";
// import Error from "../../pages/Error/Error";
// import "./Products.css";
import DarkContext from "../../context/Dark/Dark";
import CartContext from "../../context/Cart/Cart";
import ProductsContext from "../../context/Products/Products"

const Search = () => {
    const isDark = useContext(DarkContext);
    const { products, setProducts } = useContext(ProductsContext)
    const [input, setInput] = useState("")
    try {
        if (products != null && products != [] && products != undefined) {
            return (
                <>
                    <div style={{ margin: "150px 0px 80px" }}>
                        <div className="container">
                            <input className="rounded-5 ps-3" type="text" onChange={(e) => {
                                setInput(e.target.value)
                            }} />
                            <div className={"d-flex row mt-4 "}>
                                {products.map((product) => {
                                    if (product.title.toLowerCase().includes(input.toLowerCase())) {
                                        return (
                                            <Product key={product.id} product={product} />
                                        )
                                    }
                                })}

                            </div>
                        </div>
                    </div>
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