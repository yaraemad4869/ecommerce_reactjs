import { useContext } from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import DarkContext from "../../context/Dark/Dark"
import I8nextContext from "../../context/Il8next/I8next"
import IsLoginContext from "../../context/IsLogin/IsLogin"
const Nav = () => {
    const { t, il8next } = useContext(I8nextContext)
    const { isDark, setIsDark } = useContext(DarkContext)
    const { isLogin, setIsLogin } = useContext(IsLoginContext)
    return (
        <>
            <nav className={"w-100 navbar fixed-top top-0 " + (isDark ? "navbar-warning bg-warning" : "navbar-danger bg-danger")}>
                <div className="container-fluid text-center">
                    <Link to={"/"} className=" navbar-brand "><h2 className={" col-4 Logo-Text fw-bold text-uppercase " + (isDark ? "text-black" : "text-white")}><i>{t("yaraful")}</i></h2></Link>
                    <button className={"navbar-toggler col-sm-1 col-2 " + (isDark ? "btn-black text-black" : "btn-white text-white")} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className={"navbar-toggler-icon " + (isDark ? "text-black" : "text-white")}></span>
                    </button>
                    <div className={"offcanvas offcanvas-end " + (isDark ? "bg-dark" : "bg-light")} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h3 className={"offcanvas-title text-capitalize fw-bold " + (isDark ? "text-white" : "text-black")} id="offcanvasDarkNavbarLabel">{t("yara brand")}</h3>
                            <button type="button" className={"btn-close " + (isDark ? "btn-close-white" : "btn-close-black")} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">

                            <ul className={"navbar-nav text-capitalize fw-bold justify-content-end gap-2 flex-grow-1 pe-3 "}>
                                <select className="rounded p-2" onChange={(e) => {
                                    il8next.changeLanguage(e.target.value)
                                }}>
                                    <option value="en">English</option>
                                    <option value="ar">العربية</option>
                                </select>
                                <Link to={"/"} className={"nav-item d-flex justify-content-center align-items-stretch " + (isDark ? "text-white" : "text-black")}><span className="material-symbols-outlined me-1">
                                    home
                                </span>{t("home")}</Link>

                                <div className={"dropdown"}>
                                    <button className={"text-capitalize focus-ring mb-2 ps-1 fw-bold btn dropdown-toggle " + (isDark ? "btn-warning" : "btn-danger")} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {t("category")}
                                    </button>
                                    <ul className={"dropdown-menu " + (isDark ? "dropdown-menu-dark text-white" : "dropdown-menu-white text-black")}>

                                        <Link to="top_rated">
                                            <li data-bs-dismiss="offcanvas" className="text-capitalize dropdown-item" aria-label="Close" onClick={(e) => {
                                            }}>{t("top rated")}</li>
                                        </Link>
                                        <Link to="popular">
                                            <li data-bs-dismiss="offcanvas" className="text-capitalize dropdown-item" aria-label="Close" onClick={(e) => {
                                            }}>{t("popular")}</li>
                                        </Link>
                                        <Link to="featured">
                                            <li data-bs-dismiss="offcanvas" className="text-capitalize dropdown-item" aria-label="Close" onClick={(e) => {
                                            }}>{t("featured")}</li>
                                        </Link>
                                    </ul>
                                </div>
                                {!isLogin ? <Link to={"/login"} aria-label="Close" className={"nav-item text-decoration-none " + (isDark ? "text-white" : "text-black")}>{t("login")}</Link> : <Link to="/" onClick={() => { setIsLogin(!isLogin) }} aria-label="Close" className={"nav-item text-decoration-none " + (isDark ? "text-white" : "text-black")}>{t("logout")}</Link>}
                                {!isLogin ? <Link to={"/signup"} aria-label="Close" className={"nav-item " + (isDark ? "text-white" : "text-black")}>{t("sign up")}</Link> : null}
                                <Link to={"/search"} aria-label="Close" className={"m-1 nav-item d-flex justify-content-center align-items-stretch " + (isDark ? "text-white" : "text-black")}>
                                    <span className={"material-symbols-outlined me-1 " + (isDark ? "text-white" : "text-black")}>
                                        search
                                    </span>{t("Search")}
                                </Link>
                                <Link to={"/cart"} className={"m-1 nav-item d-flex justify-content-center align-items-stretch " + (isDark ? "text-white" : "text-black")}>
                                    <span className="material-symbols-outlined me-1">
                                        shopping_cart
                                    </span><span className="text-capitalize">{t("cart")}</span>
                                </Link>
                                <div className="d-flex justify-content-center align-items-stretch">
                                    <span data-bs-dismiss="offcanvas" aria-label="Close" className={"material-symbols-outlined nav-item me-1 " + (isDark ? "text-white" : "text-black")} onClick={() => {
                                        setIsDark(!isDark)
                                    }}>
                                        dark_mode
                                    </span>
                                </div>
                                <Link to={"/faq"} aria-label="Close" className={"nav-item text-uppercase text-decoration-none " + (isDark ? "text-white" : "text-black")}>{t("faq")}</Link>
                                <Link to={"/contactus"} aria-label="Close" className={"nav-item text-capitalize text-decoration-none " + (isDark ? "text-white" : "text-black")}>{t("contact us")}</Link>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}
export default Nav