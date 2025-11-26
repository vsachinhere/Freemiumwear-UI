import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AppRouter from './router/AppRouter.jsx'
import Home from './pages/Home/Home.jsx'
import NewArrivals from './pages/NewArrivals.jsx'
import Collections from './pages/Collections.jsx'
import Sale from './pages/Sale.jsx'
import Cart from './pages/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppRouter />}>
      <Route path='' element={<Home />} />
      <Route path='newarrival' element={<NewArrivals/>}/>
      <Route path='collections' element={<Collections />} />
      <Route path='sale' element={<Sale />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
