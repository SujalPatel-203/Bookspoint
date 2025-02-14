import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Slide, ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <ToastContainer transition={Slide} />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App