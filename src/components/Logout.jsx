import React from 'react'
import { useDispatch } from 'react-redux'
import { replace, useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/userAction'

function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () =>{
        localStorage.removeItem('authToken')
        dispatch(logout())
        navigate('/', {replace : true})
    }
  
    return (
        <button className='flex text-white hover:text-red-600 group'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            className="w-10 h-7 "
            >
            <path d="M366.473,172.549c-8.552-9.598-23.262-10.44-32.858-1.888c-9.595,8.552-10.44,23.263-1.887,32.858 c16.556,18.576,25.676,42.527,25.676,67.443c-0.002,55.913-45.49,101.402-101.404,101.402s-101.402-45.489-101.402-101.402 c0-24.913,9.118-48.863,25.678-67.443c8.552-9.595,7.705-24.308-1.89-32.86c-9.596-8.552-24.306-7.705-32.858,1.89 c-24.166,27.116-37.474,62.065-37.474,98.413C108.052,352.54,174.421,418.909,256,418.909s147.948-66.369,147.948-147.948 C403.948,234.611,390.639,199.661,366.473,172.549z"></path>

            <path d="M256,93.091c-12.853,0-23.273,10.42-23.273,23.273v99.739c0,12.853,10.42,23.273,23.273,23.273 c12.853,0,23.273-10.42,23.273-23.273v-99.739C279.273,103.511,268.853,93.091,256,93.091z"></path>

            <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256c141.16,0,256-114.842,256-256S397.16,0,256,0z M256,465.455 c-115.493,0-209.455-93.961-209.455-209.455S140.507,46.545,256,46.545S465.455,140.507,465.455,256S371.493,465.455,256,465.455z "></path>
        </svg>
    <span onClick={handleLogout}> Logout </span>     
    </button>
  )
}

export default Logout