import "./Signup.css"
import React, { useContext, useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import UrlContext from "../../context/Url/Url"
import { useNavigate } from "react-router-dom";
import DarkContext from "../../context/Dark/Dark";

const Signup = () => {
    const SignupSchema = Yup.object({
        firstName: Yup.string()
            .min(2, 'First name is less than 2')
            .max(16, 'First name is more that 16')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Last name is less than 2')
            .max(16, 'Last name is more that 16')
            .required('Required'),
        age: Yup.number().min(10).max(90).required('Required'),
        phoneNumber: Yup.string().required('Required').matches(/^01[0125][0-9]{8}$/),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required').min(8).max(16).matches(/^[A-Za-z][0-9]*/, "password should start with letters and can contain number"),
        confirmPassword: Yup.string().required('Required').oneOf([Yup.ref("password")], "The two passwords are different")
    });
    const Url = useContext(UrlContext)
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState("")
    const navigate = useNavigate()
    async function apiSignup(values) {
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
            firstName: '',
            lastName: '',
            age: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            apiSignup(values)
            navigate("/login")
        }
    })
    const [isVisiblePass, setIsVisiblePass] = useState(false)
    const [isVisibleConfirm, setIsVisibleConfirm] = useState(false)
    const { isDark } = useContext(DarkContext)

    return (
        <>
            <div style={{ margin: "150px 0px 80px" }}>
                <div className="container">
                    <div className={"text-" + (isDark ? "white" : "black")}>
                        <h2 className="mb-4">Sign Up</h2>
                        <form onSubmit={formik.handleSubmit} className={(isDark ? "border-white" : "")}>
                            <label htmlFor="firstName"><h3>first name</h3></label>
                            <input className="rounded-5" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={(e) => {
                                formik.handleBlur(e)
                                if (formik.values.firstName && formik.values.firstName != '' && formik.values.firstName != null) {
                                    if (formik.errors.firstName != undefined) {
                                        e.target.style.border = "red 0.5px solid"
                                    }
                                    else {
                                        e.target.style.border = "#33e133 0.5px solid"
                                    }
                                }
                                else {
                                    e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                                }
                            }} id="firstName" placeholder="Enter First Name..." />
                            {formik.errors.firstName && formik.values.firstName != '' && formik.values.firstName != null ? <p className="text-danger">{formik.errors.firstName}</p> : null}

                            <label htmlFor="lastName"><h3>last name</h3></label>
                            <input className="rounded-5" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={(e) => {
                                formik.handleBlur(e)
                                if (formik.values.lastName && formik.values.lastName != '' && formik.values.lastName != null) {
                                    if (formik.errors.lastName != undefined) {
                                        e.target.style.border = "red 0.5px solid"
                                    }
                                    else {
                                        e.target.style.border = "#33e133 0.5px solid"
                                    }
                                }
                                else {
                                    e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                                }
                            }} id="lastName" placeholder="Enter Last Name..." />
                            {formik.errors.lastName && formik.values.lastName != '' && formik.values.lastName != null ? <p className="text-danger">{formik.errors.lastName}</p> : null}


                            <label htmlFor="age"><h3>age</h3></label>
                            <input className="rounded-5" name="age" value={formik.values.age} onChange={formik.handleChange} onBlur={(e) => {
                                formik.handleBlur(e)
                                if (formik.values.age && formik.values.age != '' && formik.values.age != null) {
                                    if (formik.errors.age != undefined) {
                                        e.target.style.border = "red 0.5px solid"
                                    }
                                    else {
                                        e.target.style.border = "#33e133 0.5px solid"
                                    }
                                }
                                else {
                                    e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                                }
                            }} id="age" placeholder="Enter Age..." />
                            {formik.errors.age && formik.values.age != '' && formik.values.age != null ? <p className="text-danger">{formik.errors.age}</p> : null}

                            <label htmlFor="phoneNumber"><h3>Phone Number</h3></label>
                            <input className="rounded-5" name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={(e) => {
                                formik.handleBlur(e)
                                if (formik.values.phoneNumber && formik.values.phoneNumber != '' && formik.values.phoneNumber != null) {
                                    if (formik.errors.phoneNumber != undefined) {
                                        e.target.style.border = "red 0.5px solid"
                                    }
                                    else {
                                        e.target.style.border = "#33e133 0.5px solid"
                                    }
                                }
                                else {
                                    e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                                }
                            }} id="phoneNumber" placeholder="Enter Phone Number..." />
                            {formik.errors.phoneNumber && formik.values.phoneNumber != '' && formik.values.phoneNumber != null ? <p className="text-danger">{formik.errors.phoneNumber}</p> : null}

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



                            <div className="position-relative">
                                <label htmlFor="confirmPassword"><h3>confirm password</h3></label>
                                <input className="rounded-5" name="confirmPassword" type={isVisibleConfirm ? "text" : "password"}
                                    value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={(e) => {
                                        formik.handleBlur(e)
                                        if (formik.values.confirmPassword && formik.values.confirmPassword != '' && formik.values.confirmPassword != null) {
                                            if (formik.errors.confirmPassword != undefined) {
                                                e.target.style.border = "red 0.5px solid"
                                            }
                                            else {
                                                e.target.style.border = "#33e133 0.5px solid"
                                            }
                                        }
                                        else {
                                            e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                                        }
                                    }} id="confirmPassword" placeholder="Confirm Password..." />

                                {formik.values.confirmPassword && formik.values.confirmPassword != '' && formik.values.confirmPassword != null
                                    && <div>{
                                        isVisibleConfirm ? <div className="material-symbols-outlined position-absolute" onClick={() => { setIsVisibleConfirm(!isVisibleConfirm) }}>
                                            visibility
                                        </div> :
                                            <div className="material-symbols-outlined position-absolute" onClick={() => { setIsVisibleConfirm(!isVisibleConfirm) }}>
                                                visibility_off
                                            </div>
                                    }</div>
                                }
                            </div>
                            {formik.errors.confirmPassword && formik.values.confirmPassword != '' && formik.values.confirmPassword != null ? <p className="text-danger">{formik.errors.confirmPassword}</p> : null}


                            <button type="submit" disabled={!(formik.isValid && formik.dirty)} className={"rounded-5 w-100 fw-bold text-capitalize btn btn-" + (isDark ? "warning" : "danger")}>sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Signup