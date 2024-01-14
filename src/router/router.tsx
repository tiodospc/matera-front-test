import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './privateRoutes'

const Home = lazy(() => import('../pages/Home/Home'))
const Login = lazy(() => import('../pages/Login/Login'))
const Register = lazy(() => import('../pages/Register/Register'))
const ProductList = lazy(() => import('../pages/Products/Produts'))

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/home" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/home/product/:id" element={<ProductList />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRouter
