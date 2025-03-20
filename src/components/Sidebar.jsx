import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className='bg-gray-700 text-white p-4 w-64 h-screen hidden md:block'>
        <nav className='flex flex-col space-y-4'>
            <Link className='hover:text-gray-300' to='/dashboard'>
                Dashboard
            </Link>
            <Link className='hover:text-gray-300' to='/customers'>
                Customers
            </Link>
            <Link className='hover:text-gray-300' to='/dealers'>
                Dealers
            </Link>
            <Link className='hover:text-gray-300' to='/quotations'>
                Quotations
            </Link>
            <Link className='hover:text-gray-300' to='/reports'>
                Reports
            </Link>
            <Link className='hover:text-gray-300' to='/settings'>
                Settings
            </Link>
        </nav>
    </aside>
  )
}

export default Sidebar