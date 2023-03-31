import React from 'react'
import {Routes,Route} from "react-router-dom"
import { AllProducts } from '../allproducts/AllProducts'
import { ProductContainer } from '../allproducts/productContainer'
import { HomePage } from '../homepage/HomepageCards'
import { Navbar } from '../homepage/Navbar'
import { LoginPage } from '../LoginPage/Login'

export const Allroutes = () => {
  return (
   <Routes>
<Route path="/" element={<HomePage/>} />
<Route path="/login" element={<LoginPage/>} />
<Route path="/allproducts" element={<ProductContainer/>} />
   </Routes>
  )
}


