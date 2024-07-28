import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import IsLogin from "../../context/IsLogin/IsLogin"
const RequireAuth = ({ children }) => {
    const { isLogin } = useContext(IsLogin)
    if (!isLogin) {
        return <Navigate to="/login" />
    }
    return children
}

export default RequireAuth
