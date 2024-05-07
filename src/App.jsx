import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';

function App() {

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <Router>
      <Header />

      <Footer />
    </Router>
    </>
  )
}

export default App
