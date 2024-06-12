import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './components/Pages/CartContext.jsx'

const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/* Adicionar o cart provider aqui */}
    <CartProvider>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <App />
    </CartProvider>
  </React.StrictMode>
)
