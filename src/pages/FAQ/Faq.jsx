import "./Faq.css"
import DarkContext from "../../context/Dark/Dark";
import { useContext } from "react";
const Faq = () => {
    const { isDark } = useContext(DarkContext)
    return (
        <>
            <div style={{ marginTop: "150px" }}></div>
            <div className={"container mt-5 "}>
                <div className={"accordion accordion-flush "} id="accordionFlushExample">
                    <div className={"accordion-item " + (isDark ? "bg-black" : "bg-white")}>
                        <div className={" rounded-5 accordion-header text-capitalize accordion-button collapsed " + (isDark ? "bg-warning text-black " : "bg-danger text-white ")} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h2 className=" h2">what about us</h2>
                        </div>
                        <div id="flush-collapseOne" className={"accordion-collapse collapse " + (isDark ? "text-white" : "text-black")} data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body h4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptatum obcaecati. Ipsa consequuntur voluptates laborum ratione ducimus asperiores tempore sint facilis reiciendis. Ad eaque recusandae in quasi laboriosam dignissimos ratione?</div>
                        </div>
                    </div>
                    <div className={"accordion-item " + (isDark ? "bg-black" : "bg-white")}>
                        <div className={" rounded-5 accordion-header text-capitalize accordion-button collapsed " + (isDark ? "bg-warning text-black " : "bg-danger text-white ")} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 className=" h2">how to contact with us</h2>
                        </div>
                        <div id="flush-collapseTwo" className={"accordion-collapse collapse " + (isDark ? "text-white" : "text-black")} data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body h4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptatum obcaecati. Ipsa consequuntur voluptates laborum ratione ducimus asperiores tempore sint facilis reiciendis. Ad eaque recusandae in quasi laboriosam dignissimos ratione?</div>
                        </div>
                    </div>
                    <div className={"accordion-item " + (isDark ? "bg-black" : "bg-white")}>
                        <div className={" rounded-5 accordion-header text-capitalize accordion-button collapsed " + (isDark ? "bg-warning text-black " : "bg-danger text-white ")} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <h2 className=" h2">where are our branches</h2>
                        </div>
                        <div id="flush-collapseThree" className={"accordion-collapse collapse " + (isDark ? "text-white" : "text-black")} data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body h4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptatum obcaecati. Ipsa consequuntur voluptates laborum ratione ducimus asperiores tempore sint facilis reiciendis. Ad eaque recusandae in quasi laboriosam dignissimos ratione?</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Faq;