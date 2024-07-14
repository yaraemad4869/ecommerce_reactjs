import "./ContactUs.css"
import React, { useContext, useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import UrlContext from "../../context/Url/Url"
import { useNavigate } from "react-router-dom";
import DarkContext from "../../context/Dark/Dark";
import I8nextContext from "../../context/Il8next/I8next";

const ContactUs = () => {
    const ContactSchema = Yup.object({
        name: Yup.string().min(2),
        email: Yup.string().email('Invalid email').required('Required'),
        complaint: Yup.string().required("Required")
    });
    const { t } = useContext(I8nextContext)
    const Url = useContext(UrlContext)
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState("")
    const navigate = useNavigate()
    // async function apiSignup(values) {
    //     setLoading(true)
    //     let { data } = await axios.post((Url + "/signup"), values)
    //         .catch(err => {
    //             setApiError(err.response.data.errors.params + ":" + err.response.data.errors.msg)
    //             setLoading(false)
    //         })
    //     if (data.message === "success") {
    //         setLoading(false)
    //         navigate("/login")
    //     }
    // }

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            complaint: ''
        },
        validationSchema: ContactSchema,
        onSubmit: values => {
            console.log(values);
            // apiSignup(values)
        }
    })

    const { isDark } = useContext(DarkContext)
    return (
        <div style={{ margin: "150px 0px 80px" }}>
            <div className={"container text-" + (isDark ? "white" : "black")}>
                <h1 className="text-uppercase mb-5">{t("contact us")}</h1>
                <form onSubmit={formik.handleSubmit} className={(isDark ? "border-white" : "")}>

                    <label htmlFor="name"><h3>{t("Name")}</h3></label>
                    <input className="rounded-5" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={(e) => {
                        formik.handleBlur(e)
                        if (formik.values.name && formik.values.name != '' && formik.values.name != null) {
                            if (formik.errors.name != undefined) {
                                e.target.style.border = "red 0.5px solid"
                            }
                            else {
                                e.target.style.border = "#33e133 0.5px solid"
                            }
                        }
                        else {
                            e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                        }
                    }} id="name" placeholder={t("Enter") + " " + t("Name") + "..."} />
                    {formik.errors.name && formik.values.name != '' && formik.values.name != null ? <p className="text-danger">{formik.errors.name}</p> : null}


                    <label htmlFor="email"><h3>{t("Email")}</h3></label>
                    <input className="rounded-5" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={(e) => {
                        formik.handleBlur(e)
                        if (formik.values.email && formik.values.email != '' && formik.values.email != null) {
                            if (formik.errors.email != undefined) {
                                e.target.style.border = "red 0.5px solid"
                            }
                            else {
                                e.target.style.border = "#33e133 0.5px solid"
                            }
                        }
                        else {
                            e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                        }
                    }} type="email" id="email" placeholder={t("Enter") + " " + t("Email") + "..."} />
                    {formik.errors.email && formik.values.email != '' && formik.values.email != null ? <p className="text-danger">{formik.errors.email}</p> : null}


                    <label style={{ display: "block !important" }} htmlFor="complaint"><h3>{t("Review")}</h3></label>
                    <textarea rows={10} className="rounded-5 p-3 w-100" name="complaint" value={formik.values.complaint} onChange={formik.handleChange} onBlur={(e) => {
                        formik.handleBlur(e)
                        if (formik.values.complaint && formik.values.complaint != '' && formik.values.complaint != null) {
                            if (formik.errors.complaint != undefined) {
                                e.target.style.border = "red 0.5px solid"
                            }
                            else {
                                e.target.style.border = "#33e133 0.5px solid"
                            }
                        }
                        else {
                            e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                        }
                    }} id="complaint" placeholder={t("Do You Have Any Complaint") + "?..."} ></textarea>
                    {formik.errors.complaint && formik.values.complaint != '' && formik.values.complaint != null ? <p className="text-danger">{formik.errors.complaint}</p> : null}


                    <button type="submit" disabled={!(formik.isValid && formik.dirty)} className={"rounded-5 w-100 fw-bold text-capitalize btn btn-" + (isDark ? "warning" : "danger")}>{t("send")}</button>
                </form>
            </div>
        </div >
    )
}

export default ContactUs
