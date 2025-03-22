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
import MainLayout from './layouts/MainLayout'


function App() {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            
            <Route path='/dashboard' element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            } />
            <Route path='/customers' element={
              <MainLayout>
                <Customers />
              </MainLayout>
            } />
            <Route path='/dealers' element={
              <MainLayout>
                <Dealers /> 
              </MainLayout>} />
            <Route path='/quotations' element={
              <MainLayout>
                <Quotations />
              </MainLayout>} />
            <Route path='/reports' element={
              <MainLayout>
                <Reports /> 
              </MainLayout>} />
            <Route path='/settings' element={
              <MainLayout>
                <Settings />
              </MainLayout>
            } />
          </Routes>
    </Router>
  )
}

export default App