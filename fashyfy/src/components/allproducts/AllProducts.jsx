import React, { useEffect, useState } from 'react'
import { Button} from '@chakra-ui/react'
import { json } from 'react-router-dom'




export const AllProducts = ({data}) => {   
  var cartArr=JSON.parse(localStorage.getItem("cartData"))||[] 
//  const cartArr=JSON.parse(localStorage.getItem('cartdata'))||[]
  // useEffect(()=>{


  // },[cart])
    
console.log(cartArr)


  return (

    data.map((card) => (
      <div key={card.id} style={{



        borderBottom: "3px solid #FFD7B5", borderRight: "3.5px solid #FFD7B5"
      }}>
        <img width="100%" src={card.image} alt="" />

        <div className='cardtexts' style={{ padding: "10px" }}>
          <p>{card.title.substring(0, 10)}</p>
          
          <h2 style={{ fontweight: "800" }}>{card.offer}</h2>
       
          <h2 style={{ fontWeight: "700", fontSize: "18px" }}>Price:<s>{card.price}</s></h2>
          <img width="50px" src="https://www.nicepng.com/png/detail/238-2387054_free-icons-png-special-offer-icon-png.png" alt="" />
          <h1 style={{ color: "red", fontWeight: "700", fontSize: "22px" }}>{card.discount}/-</h1>
          <h2 
          style={{width:
          "100%",fontWeight: "600", fontSize: "18px" ,
          color:"#7149C6",
          fontSize:"20px"
          }}> 
            
            { ` ${card.rating}`}⭐</h2>
          <div style={{ padding: "20px 20px 0px" }}>




          </div>
          <div className='btndiv' style={{ display: "flex", justifyContent: "space-around" }} >

            <Button style={{ color: "#F91D79", fontSize: "15px" }} colorScheme='pink' variant='outline'
       
            >Buy Now!</Button>



            <Button style={{ color: "green",  fontSize: "15px" }} colorScheme='whatsapp' variant='outline' 
         value={card}
onClick={(e)=>{
  // setCart([...cart,card])
  alert("product added")
  cartArr.push({...card,quant:1})
  localStorage.setItem("cartData",JSON.stringify(cartArr))
console.log(cartArr)
}}
             
            >add to cart</Button>

          </div>
        </div>

      </div>
    ))
  )
}

