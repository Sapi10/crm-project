import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function MainLayout({children}) {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <main className='flex-grow p-4'>
                {children}
            </main>
        </div>
    </div>
  )
}

export default MainLayout