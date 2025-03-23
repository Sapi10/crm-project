import React from 'react'
import {useSelector} from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedLayout() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  
  // if the isAuthenticated is false, the user will be redirected to the login page
  // if the isAuthenticated is true, the Outlet will be rendered

  if(!isAuthenticated)
     return <Navigate to="/" replace = {true} />

  // Outlet is used to render the child routes
  return <Outlet/>
}

export default ProtectedLayout