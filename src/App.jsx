import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Dealers from './pages/Dealers'
import Quotations from './pages/Quotations'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Sidebar from './components/Sidebar'


function App() {
  return (
    <Router>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <main className='flex-grow p-4'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/dealers' element={<Dealers />} />
            <Route path='/quotations' element={<Quotations />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App