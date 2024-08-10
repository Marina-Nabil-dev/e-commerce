import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Navbar from './Navbar'
export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
