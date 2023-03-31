import { AllProducts } from "./AllProducts";

import React from 'react'
import { Navbar } from "../homepage/Navbar";
const cardStyle={
 
}
export const ProductContainer = () => {
  return (
    <div>
<Navbar/>
<div style={{display:"grid",marginTop:"20px",gridTemplateColumns:"20% 80%"}}>
<div className="filterPart">i am filters</div>

  <div style={{  width:"98%", display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",gap:"40px 10px"}}>
      <AllProducts/>
    </div>

</div>
</div>
  
  )
}
