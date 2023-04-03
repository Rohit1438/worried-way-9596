import React, { useEffect } from 'react'
import { Navbar } from '../homepage/Navbar'
import Cartproducts from './cartproducts'
var cartArr=JSON.parse(localStorage.getItem("cartData"))||[] 
//console.log(cartArr)
export const CartPage = () => {

  useEffect(()=>{
<CartPage/>
  },[cartArr])
  return (
    <div>
     <Navbar/>
<div style={{margin
:"auto",textAlign:'center',fontSize:"35px",padding:"5px 10px 5px",fontWeight:"800",color:"white",backgroundColor:"#F0A04B"}}>
  <h1>Let's make this Cart Full Now!!</h1>
</div>

     <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr"}}>


<div>
  <img src="https://assets.website-files.com/6267f35934aa8b1795cf1a9f/62f189d3150fef7ce4f628ac_Wishlist-header.png" alt="" />
</div>
<div style={{}}>
<Cartproducts arr={cartArr}/>
</div>
     </div>
    </div>
  )
}

