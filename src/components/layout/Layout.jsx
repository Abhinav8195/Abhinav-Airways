import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Search from '../Search/Search'
import Support from '../Support/Support'
import Info from '../Info/Info'
import Lounge from '../Lounge/Lounge'
import Travelers from '../Travelers/Travelers'
import Subscribers from '../Subscribers/Subscribers'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscribers/>
      <Footer/> 
    </div>
  )
}

export default Layout