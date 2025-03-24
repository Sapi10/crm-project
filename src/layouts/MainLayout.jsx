import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <main className='flex-grow p-4'>
                {/* Here Outlet Component is used instead of children props because in React Router 6 it hepls in rendering child routes.*/}
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default MainLayout