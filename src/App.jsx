import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import ProductCards from './components/ProductCards';

function App() {

  return (
    <>
    
    <Router>
      <Header />
      <ProductCards />
      <Footer />
    </Router>
    </>
  )
}

export default App
