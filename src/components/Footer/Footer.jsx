import { useContext } from "react"
import DarkContext from "../../context/Dark/Dark"
import { Link } from "react-router-dom"
import "./Footer.css"
import I8nextContext from "../../context/Il8next/I8next"
const Footer = () => {
    const { isDark } = useContext(DarkContext)
    const { t } = useContext(I8nextContext)
    return (
        <>
            <footer className={"text-center bottom-0 w-100 text-lg-start " + (isDark ? "bg-warning text-black" : "bg-danger text-white")} style={{ marginTop: "100px" }}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">{t("yara brand")}</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                                voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">{t("yara brand")}</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                                voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>
                    </div>
                </div>


                <div className={"text-center p-3 " + (isDark ? "bg-warning text-black" : "bg-danger text-white")} style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2020 Copyright:
                    <Link to={"/"} className="text-body"> yarabrand.com</Link>
                </div>
            </footer>
        </>
    )
}
export default Footer