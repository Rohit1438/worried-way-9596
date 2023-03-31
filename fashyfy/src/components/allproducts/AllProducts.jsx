import React, { useEffect, useState } from 'react'
import { Button, Spacer } from '@chakra-ui/react'
const api=`http://localhost:8000/product`
const getData=async ()=>{
try{
  let res=await fetch(api)
  let jsondata=await res.json()
  return jsondata


}catch(err){
  console.log(err)
}
}

export const AllProducts = () => {

const [data,setData]=useState([])
const FetchAndREnder=()=>{
  getData()
  .then((res)=>{
    setData(res)
  }).catch((err)=>{
    console.log(err)
  })
}
console.log(data)

useEffect(()=>{
  FetchAndREnder()

},[])
  return (
    
    data.map((card)=>(
      <div key={card.id} style={{
        
        
        
        borderBottom:"3px solid #FFD7B5",borderRight:"3.5px solid #FFD7B5"}}>
<img width="100%" src={card.image} alt="" />

        <div className='cardtexts' style={{padding:"10px"}}>
<p>{card.title.substring(0,10)}</p>
<h2 style={{fontweight:"800"}}>{card.offer}</h2>
<h2 style={{fontWeight:"700",fontSize:"18px"}}>Price:<s>{card.price}</s></h2>
<img width="50px" src="https://www.nicepng.com/png/detail/238-2387054_free-icons-png-special-offer-icon-png.png" alt="" />
<h1 style={{color:"red",fontWeight:"700",fontSize:"22px"}}>{card.discount}/-</h1>
<div style={{padding:"20px 20px 0px"}}>




        </div>
<div className='btndiv' style={{display:"flex",justifyContent:"space-around"}} >

<Button style={{color:"#F91D79",fontSize:"15px"}} colorScheme='pink' variant='outline'>Buy Now!</Button>

<Button style={{color:"green",fontSize:"15px"}} colorScheme='whatsapp' variant='outline'>add to cart</Button>

</div>
</div>

      </div>
    ))
  )
}

