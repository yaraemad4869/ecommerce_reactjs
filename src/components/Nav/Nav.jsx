import { useContext } from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import DarkContext from "../../context/Dark/Dark"
import CategoryContext from "../../context/Category/Category"
import { useTranslation } from "react-i18next"
// import i18n from 'i18next';
const Nav = () => {
    const { t } = useTranslation()
    const { isDark, setIsDark } = useContext(DarkContext)
    const { category, setCategory } = useContext(CategoryContext)
    // function changeLanguage(lang) {
    //     i18n.changeLanguage(lang);
    // }
    return (
        <>
            <nav className={"w-100 navbar fixed-top top-0 " + (isDark ? "navbar-warning bg-warning" : "navbar-danger bg-danger")}>
                <div className="container-fluid text-center">
                    <Link to={"/"} className=" navbar-brand "><h2 className={" col-4 Logo-Text fw-bold text-uppercase " + (isDark ? "text-black" : "text-white")}><i>yaraful</i></h2></Link>
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
                                {/* <select onChange={(e) => { changeLanguage(e.target.value) }}>
                                    <option value="en">English</option>
                                    <option value="ar">العربية</option>
                                </select> */}
                                <Link to={"/"} className={"nav-item d-flex justify-content-center align-items-stretch " + (isDark ? "text-white" : "text-black")}><span className="material-symbols-outlined me-1">
                                    home
                                </span>{t("home")}</Link>

                                <div className={"dropdown"}>
                                    <button className={"text-capitalize focus-ring mb-2 ps-1 fw-bold btn dropdown-toggle " + (isDark ? "btn-warning" : "btn-danger")} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {t("category")}
                                    </button>
                                    <ul className={"dropdown-menu " + (isDark ? "dropdown-menu-dark text-white" : "dropdown-menu-white text-black")}>

                                        <li data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {
                                            setCategory(e.target.innerText.toLowerCase())
                                        }}><Link to="/#products" className="text-capitalize dropdown-item">all</Link></li>
                                        <li data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {
                                            setCategory(e.target.innerText.toLowerCase())
                                        }}><Link to="../#products" className="text-capitalize dropdown-item">men's clothing</Link></li>
                                        <li data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {
                                            setCategory(e.target.innerText.toLowerCase())
                                        }}><Link to="../#products" className="text-capitalize dropdown-item">jewelery</Link></li>
                                        <li data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {
                                            setCategory(e.target.innerText.toLowerCase())
                                        }}><Link to="../#products" className="text-capitalize dropdown-item">electronics</Link></li>
                                        <li data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {
                                            setCategory(e.target.innerText.toLowerCase())
                                        }}><Link to="../#products" className="text-capitalize dropdown-item">women's clothing</Link></li>
                                    </ul>
                                </div>
                                <Link to={"/login"} aria-label="Close" className={"nav-item text-decoration-none " + (isDark ? "text-white" : "text-black")}>{t("login")}</Link>
                                <Link to={"/signup"} aria-label="Close" className={"nav-item " + (isDark ? "text-white" : "text-black")}>{t("sign up")}</Link>
                                <Link to={"/search"} aria-label="Close" className={"m-1 nav-item d-flex justify-content-center align-items-stretch " + (isDark ? "text-white" : "text-black")}>
                                    <span className={"material-symbols-outlined me-1 " + (isDark ? "text-white" : "text-black")}>
                                        search
                                    </span>Search
                                </Link>
                                <Link to={"/cart"} className={"m-1 nav-item d-flex justify-content-center align-items-stretch " + (isDark ? "text-white" : "text-black")}>
                                    <span className="material-symbols-outlined me-1">
                                        shopping_cart
                                    </span>Cart
                                </Link>
                                <div className="d-flex justify-content-center align-items-stretch">
                                    <span data-bs-dismiss="offcanvas" aria-label="Close" className={"material-symbols-outlined nav-item me-1 " + (isDark ? "text-white" : "text-black")} onClick={() => {
                                        setIsDark(!isDark)
                                    }}>
                                        dark_mode
                                    </span>
                                </div>
                                {/* <select onChange={(e) => changeLanguage(e.target.value)}>
                                    <option value="en">English</option>
                                    <option value="ar">العربية</option>
                                </select> */}
                                <Link to={"/faq"} aria-label="Close" className={"nav-item text-uppercase text-decoration-none " + (isDark ? "text-white" : "text-black")}>{t("faq")}</Link>
                                <Link to={"/contactus"} aria-label="Close" className={"nav-item text-capitalize text-decoration-none " + (isDark ? "text-white" : "text-black")}>{t("contact us")}</Link>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
            {/*  */}
            {/* <nav className={"rounded navbar shadow position-fixed " + (isDark ? "navbar-warning bg-warning text-black" : "navbar-danger bg-danger text-white")}>
                <div className="container-fluid text-capitalize fw-bold">
                    <div className="d-inline-flex justify-content-around align-items-center col-10">
                        <Link to={"/"}><h3 className={"d-inline-flex navbar-brand col-4 Logo-Text p-3 text-uppercase fw-bold " + (isDark ? "text-black" : "text-white")}>yara</h3></Link>
                        <div className="d-inline-flex justify-content-around align-items-center col-6">
                            <Link to={"/"} className={(isDark ? "text-black" : "text-white")}>home</Link>
                            <div className={"dropdown"}>
                                <button className={"mb-2 ps-1 fw-bold btn dropdown-toggle " + (isDark ? "btn-warning" : "btn-danger")} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </button>
                                <ul className="dropdown-menu">
                                    <li onClick={(e) => {
                                        setCategory(e.target.innerText.toLowerCase())
                                        console.log(e.target.innerText.toLowerCase(), category);
                                    }}><a className="dropdown-item">All</a></li>
                                    <li onClick={(e) => {
                                        setCategory(e.target.innerText.toLowerCase())
                                        console.log(e.target.innerText.toLowerCase(), category);
                                    }}><a className="dropdown-item">Men's Clothing</a></li>
                                    <li onClick={(e) => {
                                        setCategory(e.target.innerText.toLowerCase())
                                        console.log(e.target.innerText.toLowerCase(), category);
                                    }}><a className="dropdown-item">Jewelery</a></li>
                                    <li onClick={(e) => {
                                        setCategory(e.target.innerText.toLowerCase())
                                        console.log(e.target.innerText.toLowerCase(), category);
                                    }}><a className="dropdown-item">Electronics</a></li>
                                    <li onClick={(e) => {
                                        setCategory(e.target.innerText.toLowerCase())
                                        console.log(e.target.innerText.toLowerCase(), category);
                                    }}><a className="dropdown-item">Women's clothing</a></li>
                                </ul>
                            </div>
                            <Link to={"/login"} className={(isDark ? "text-black" : "text-white")}>login</Link>
                            <Link to={"/signup"} className={(isDark ? "text-black" : "text-white")}>sign Up</Link>
                        </div>
                    </div>
                    <span className="d-inline-flex justify-content-around col-2">
                        <Link to={"/search"} className={(isDark ? "text-black" : "text-white")}>
                            <span className={"material-symbols-outlined " + (isDark ? "text-black" : "text-white")}>
                                search
                            </span>
                        </Link>
                        <Link to={"/cart"} className={(isDark ? "text-black" : "text-white")}>
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </Link>
                        <span className={"material-symbols-outlined " + (isDark ? "text-black" : "text-white")} onClick={() => {
                            setIsDark(!isDark)
                        }}>
                            dark_mode
                        </span>
                    </span>
                </div>
            </nav> */}
        </>
    )
}
export default Nav