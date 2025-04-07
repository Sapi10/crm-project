import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Dealers from './pages/Dealers'
import Quotations from './pages/Quotations'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import MainLayout from './layouts/MainLayout'
import ProtectedLayout from './components/ProtectedLayout'
import LandingPage from './pages/LandingPage'


function App() {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            
              <Route element={<ProtectedLayout />}>
              {/* 
                Created ProtectedLayout component for :
                1. Authentication Check - Uses Redux to check if the user is logged in. (isAuthenticated flag is true)
                2. Route Protection - If the user is not authenticated, it redirects to the login page.
                3. Nested Routing - It uses the Outlet component to render the child routes.
              */}
                
                <Route element={<MainLayout />}>
                
                {/* 
                  Created MainLayout so that sidebar and navbar can only be rendered in the following components completely avoiding Login page. 
                */}

                  <Route path='/dashboard' element={<Dashboard />} />
                  
                  <Route path='/customers' element={<Customers />} />
                  
                  <Route path='/dealers' element={<Dealers />} /> 
                  
                  <Route path='/quotations' element={<Quotations/>}/>
                  
                  <Route path='/reports' element={<Reports />} />
                  
                  <Route path='/settings' element={<Settings />} />
                
                </Route>
              </Route>
          </Routes>
    </Router>
  )
}

export default App