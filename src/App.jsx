import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/shared/Header'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import RegisterPage from './pages/RegisterPage'
import { getCartThunk } from './store/slices/cart.slice'
import { getAllProductsThunk } from './store/slices/products.Slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/user'>
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
