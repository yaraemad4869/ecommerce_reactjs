import "./Error.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import DarkContext from "../../context/Dark/Dark";
const Error = ({ h1, p }) => {
    const { isDark } = useContext(DarkContext)
    return (
        <>
            <div className="d-flex justify-content-center 
                    align-items-center flex-column 
                    text-center w-100 container  mt-5">

                <div className="bg_img">
                </div>
                <div>
                    <h1 className={(isDark ? "text-warning" : "text-danger") + " err-message"}>{h1}</h1>
                    <div className="text-secondary">
                        <p>{p} <Link to={"/"} className={"text-capitalize text-decoration-underline " + (isDark ? "text-warning" : "text-danger")}>go to home</Link></p>
                    </div>
                </div>
            </div >

        </>
    )
}
export default Error