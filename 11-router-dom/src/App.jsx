import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog'
import FAQ from './components/FAQ/FAQ'
import Team from './components/Team/Team'
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App