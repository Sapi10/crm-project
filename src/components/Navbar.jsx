import React from 'react'
import {Link} from 'react-router-dom'
import Logout from './Logout'

function Navbar() {
  return (
    <nav className='bg-gray-800 h-16 flex text-white px-4 py-3'>
        <div className='max-w-7xl flex justify-between items-center w-full'>
            {/* Logo Section */}
            <div className='flex items-center'>
                <span className='text-2xl font-bold'>CRM System</span>
            </div>
        </div>

        <div className='hidden md:flex my-auto space-x-10'>
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
            <Logout />
        </div>
    </nav>
  )
}

export default Navbar