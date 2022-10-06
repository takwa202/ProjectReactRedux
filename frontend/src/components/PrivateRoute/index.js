import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children})=> {
    const curentuser = useSelector((state) => state.userReducer.currentuser);
const token = localStorage.getItem("token")
if (token && curentuser.role == 'admin') {
    return children
} else {
   return <Navigate to="/signein"/>
}
 
}

export default PrivateRoute