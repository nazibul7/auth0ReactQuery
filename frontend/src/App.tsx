import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import { AuthCallback } from './components/AuthCallback'

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/auth-callback' element={<AuthCallback />} />
      <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
    </Routes>
  )
}

export default App