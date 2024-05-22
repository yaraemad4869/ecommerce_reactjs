import Products from "../../components/Products/Products"
import "./Home.css"
import Clothes from "../../assets/clothes.jpg"
import men from "../../assets/mens.webp"
import women from "../../assets/women.jpg"
import woman from "../../assets/woman.jpg"
import DarkContext from "../../context/Dark/Dark"
import { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import ProductsContext from "../../context/Products/Products"
import { useNavigate } from "react-router-dom"
const Home = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const { isDark } = useContext(DarkContext)
    const { products, loading } = useContext(ProductsContext)
    const [topRated, setTopRated] = useState([])
    const [popular, setPopular] = useState([])
    const [featured, setFeatured] = useState([])
    useEffect(() => {
        {
            products.map((product) => {
                if (Math.round(product.rating.rate) == 5 && product.rating.count >= 400) {
                    featured.push(product)
                }
                else if (Math.round(product.rating.rate) == 5) {
                    topRated.push(product)
                }
                else if (product.rating.count >= 400) {
                    popular.push(product)

                }
            })
            setTopRated(topRated.slice(0, 3))
            setPopular(popular.slice(0, 3))
            setFeatured(featured.slice(0, 3))
        }
    }, [])
    return (
        <>
            <Header />
            <br className="m-5" />
            <div className="container my-5">
                <div className="container-fluid">
                    <h1 className={"display-4 mb-5 text-capitalize fw-bold " + (isDark ? "text-white" : "text-black")}>{t("explore")}</h1>
                    <div id="carouselExampleInterval" className="carousel slide shadow-lg mb-5" data-bs-ride="carousel" style={{ height: "500px" }}>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <a href="#products"><img src={men} className="d-block w-100" alt="..." style={{ height: "500px" }} /></a>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <a href="#products"><img src={women} className="d-block w-100" alt="..." style={{ height: "500px" }} /></a>
                            </div>
                            <div className="carousel-item">
                                <a href="#products"><img src={woman} className="d-block w-100" alt="..." style={{ height: "500px" }} /></a>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <br className="m-5" />
                {!loading ?
                    <div className="row justify-content-between align-items-stretch my-5">
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className={"card mb-3 " + (isDark ? "bg-dark shadow-white" : "bg-white shadow")} style={{ maxWidth: "540px", height: "560px" }}>
                                <h4 className={"card-header text-capitalize py-3 " + (isDark ? "text-white border-light" : "text-black")}>top rated</h4>
                                <div className="card-body d-flex flex-column justify-content-around" style={{ height: "500px" }}>
                                    {topRated.map((product) => {
                                        return (
                                            <div key={product.id} className={"card shadow row g-0 " + (isDark ? "bg-black border-secondary shadow-white  " : "bg-white")} style={{ height: "30%" }} onClick={(() => {
                                                navigate("/products/" + product.id)
                                            })}>
                                                <img src={product.image} className="img-fluid rounded-start col-md-4 " alt="..." style={{ height: "100%" }} />
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h4 className={"card-title " + (isDark ? "text-white" : "text-black")}>{product.title.split(" ").slice(0, 3).join(" ")}</h4>
                                                        <h5 className={"card-text " + (isDark ? "text-warning" : "text-danger")}>{product.price}$</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-12">
                            <div className={"card mb-3 " + (isDark ? "bg-dark shadow-white" : "bg-white shadow")} style={{ maxWidth: "540px", height: "560px" }}>
                                <h4 className={"card-header text-capitalize py-3 " + (isDark ? "text-white border-light" : "text-black")}>popular</h4>
                                <div className="card-body d-flex flex-column justify-content-around" style={{ height: "500px" }}>
                                    {popular.map((product) => {
                                        return (
                                            <div key={product.id} className={"card shadow row g-0 " + (isDark ? "bg-black border-secondary shadow-white  " : "bg-white")} style={{ height: "30%" }} onClick={(() => {
                                                navigate("/products/" + product.id)
                                            })}>
                                                <img src={product.image} className="img-fluid rounded-start col-md-4 " alt="..." style={{ height: "100%" }} />
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h4 className={"card-title " + (isDark ? "text-white" : "text-black")}>{product.title.split(" ").slice(0, 3).join(" ")}</h4>
                                                        <h5 className={"card-text " + (isDark ? "text-warning" : "text-danger")}>{product.price}$</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-12">
                            <div className={"card mb-3 " + (isDark ? "bg-dark shadow-white" : "bg-white shadow")} style={{ maxWidth: "540px", height: "560px" }}>
                                <h4 className={"card-header text-capitalize py-3 " + (isDark ? "text-white border-light" : "text-black")}>featured</h4>
                                <div className="card-body d-flex flex-column justify-content-around" style={{ height: "500px" }}>
                                    {featured.map((product) => {
                                        return (
                                            <div key={product.id} className={"card shadow row g-0 " + (isDark ? "bg-black border-secondary shadow-white  " : "bg-white")} style={{ height: "30%" }} onClick={(() => {
                                                navigate("/products/" + product.id)
                                            })}>
                                                <img src={product.image} className="img-fluid rounded-start col-md-4 " alt="..." style={{ height: "100%" }} />
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h4 className={"card-title " + (isDark ? "text-white" : "text-black")}>{product.title.split(" ").slice(0, 3).join(" ")}</h4>
                                                        <h5 className={"card-text " + (isDark ? "text-warning" : "text-danger")}>{product.price}$</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div> : null}
                <br className="m-5" />
                <Products />
            </div >
            <Footer />
        </>
    )
}
export default Home