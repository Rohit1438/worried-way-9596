import React from 'react'
import {Stack,Checkbox} from "@chakra-ui/react"
const Filters = () => {
  return (
    <div
    
    // style={{ position: 'fixed' }}
    
    >
   <div className='categoryfilter'style={{marginBottom:"30px"}}>

<div style={{margin:"0px 15px 0px",padding:"10px" }}>
  <h1 style={{fontWeight:"600",fontSize:"18px"}}>Filter By Category</h1>
</div>
<div style={{border:" 6px solid #FFD7B5",margin:"0px 15px 0px",padding:"20px" }} >
<Stack spacing={1} direction='column'>
<Checkbox colorScheme='red' >
T-shirt
</Checkbox>
<Checkbox colorScheme='red' >
Inner Wear
</Checkbox>
<Checkbox colorScheme='red' >
Shape wears
</Checkbox>
<Checkbox colorScheme='red' >
Shoes
</Checkbox>
</Stack>
</div>
</div>


<div className='categoryfilter'style={{marginBottom:"30px"}}>

<div style={{margin:"0px 15px 0px",padding:"10px" }}>
  <h1 style={{fontWeight:"600",fontSize:"18px"}}>Filter By Price</h1>
</div>
<div style={{border:" 6px solid #FFD7B5",margin:"0px 15px 0px",padding:"20px" }} >
<Stack spacing={1} direction='column'>
<Checkbox colorScheme='red' >
Above Rs.5000
</Checkbox>
<Checkbox colorScheme='red' >
Rs.1000-2000
</Checkbox>
<Checkbox colorScheme='red' >
Below Rs.1000
</Checkbox>
<Checkbox colorScheme='red' >
Below Rs.500
</Checkbox>
</Stack>
</div>
</div>






 </div>
  )
}

export default Filters
