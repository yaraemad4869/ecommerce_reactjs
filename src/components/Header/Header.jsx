import CategoryContext from "../../context/Category/Category"
import DarkContext from "../../context/Dark/Dark"
import Nav from "../Nav/Nav"
import { useContext } from "react"
import "./Header.css"
import store from "../../assets/clothes.jpg"
import { useTranslation } from "react-i18next"
const Header = () => {
    const { t } = useTranslation()
    const { isDark, setIsDark } = useContext(DarkContext)
    const { category, setCategory } = useContext(CategoryContext)
    return (
        <>
            <div className={"container-fluid mb-5 d-flex justify-content-around header rounded " + (isDark ? "bg-warning text-black" : "bg-danger text-white")}>
                <div className="col-lg-4 col-md-6">
                    <h1 className="text-capitalize display-1 fw-bold">{t("welcome to yara brand")}</h1>
                    <p className="h4">{t("This website for Yara Brand store which is helping you to find what you are searching for")}</p>
                </div>
                <div className="col-lg-4 col-md-3 header-bg ">
                </div>
            </div>
        </>
    )
}
export default Header