import "./Login.css"
import React, { useContext, useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import UrlContext from "../../context/Url/Url"
import { useNavigate } from "react-router-dom";
import DarkContext from "../../context/Dark/Dark";
const Login = () => {
    const LoginSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required').min(8).max(16).matches(/^[A-Za-z][0-9]*/, "password should start with letters and can contain number"),
    });
    const Url = useContext(UrlContext)
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState("")
    const navigate = useNavigate()
    async function apiLogin(values) {
        setLoading(true)
        let { data } = await axios.post((Url + "/signup"), values)
            .catch(err => {
                setApiError(err.response.data.errors.params + ":" + err.response.data.errors.msg)
                setLoading(false)
            })
        if (data.message === "success") {
            setLoading(false)
            navigate("/login")
        }
    }
    let formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            apiLogin(values)
            navigate("/")
        }
    })
    const [isVisiblePass, setIsVisiblePass] = useState(false)
    const { isDark } = useContext(DarkContext)
    return (
        <>
            <div className="space">
                <div className="container">
                    <div className={"text-" + (isDark ? "white" : "black")}>
                        <h2 className="mb-4">Login</h2>
                        <form onSubmit={formik.handleSubmit} className={(isDark ? "border-white" : "")}>
                            <label htmlFor="email"><h3>email</h3></label>
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
                            }} type="email" id="email" placeholder="Enter Email..." />
                            {formik.errors.email && formik.values.email != '' && formik.values.email != null ? <p className="text-danger">{formik.errors.email}</p> : null}
                            <div className="position-relative">
                                <label htmlFor="password"><h3>password</h3></label>
                                <input className="rounded-5"
                                    name="password"
                                    type={isVisiblePass ? "text" : "password"}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={(e) => {
                                        formik.handleBlur(e)
                                        if (formik.values.password && formik.values.password != '' && formik.values.password != null) {
                                            if (formik.errors.password != undefined) {
                                                e.target.style.border = "red 0.5px solid"
                                            }
                                            else {
                                                e.target.style.border = "#33e133 0.5px solid"
                                            }
                                        }
                                        else {
                                            e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                                        }
                                    }}
                                    id="password"
                                    placeholder="Enter Password..." />
                                {formik.values.password && formik.values.password != '' && formik.values.password != null
                                    && <div>{
                                        isVisiblePass ? <div className="material-symbols-outlined position-absolute" onClick={() => { setIsVisiblePass(!isVisiblePass) }}>
                                            visibility
                                        </div> :
                                            <div className="material-symbols-outlined position-absolute" onClick={() => { setIsVisiblePass(!isVisiblePass) }}>
                                                visibility_off
                                            </div>
                                    }</div>
                                }
                            </div>
                            {formik.errors.password && formik.values.password != '' && formik.values.password != null ? <p className="text-danger">{formik.errors.password}</p> : null}

                            <button type="submit" disabled={!(formik.isValid && formik.dirty)} className={"rounded-5 btn fw-bold w-100 btn-" + (isDark ? "warning" : "danger")}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login