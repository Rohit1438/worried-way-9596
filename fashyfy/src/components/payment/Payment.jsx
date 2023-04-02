import React from 'react'
import { HomeCarousel1 } from '../homepage/homecards/homecarousel1'
import {Input,Link, Button,PinInputField } from '@chakra-ui/react'
const loginstyle={
colro:"#B5D5C5",
    padding:"0px 20px 0px",
    borderRadius:"5px",
    border:"2px solid #FFFF",
    outline:"none", 
    width:"90%",
    margin:"10px 20px"
}
export const PaymentPage = () => {
  return (

    <div style={{display:"flex",text:"center",height:"700px",background:"trasnparent",
    justifyContent:"center"}}>

      

   
 <div style={{
  width:"400px",
  border:"0px solid red",
  color:"white",
  margin:"auto",
  height:"650px",
   background:"#3E6D9C"
   }} className='mainLogincontainer'>
    {/* <HomeCarousel1/> */}

<div style={{border:"0px solid black"}} className='headinglogin'>  <span style={{fontSize:"50px",color:"#B5D5C5",display:"flex",justifyContent:"center"}}>FashyFy</span>

<h1 style={{fontSize:"20px",  color:"white",padding:"20px 20px 0px",display:"flex",justifyContent:"center"}}>you are just one step ahead of placing order
  
  
  </h1>
</div>


<div style={{border:"0px solid white",border:"2px solid white",
margin:"20px",padding:"20px",borderRadius:"10px"}}>
  <Input style={loginstyle}placeholder="Mobile No"/>
    <br />
    <p style={{padding:"0px 20px 0px",}}>Enter 12 digit card number</p>
    <Input style={loginstyle}placeholder="Mobile No"/>
    <br />
    <p style={{padding:"0px 20px 0px",}}>Enter Cvv ( check backside of your card)</p>
    <Input style={loginstyle}placeholder="Mobile No"/>
    <br />
    <p style={{padding:"0px 20px 0px",}}>fill the OTP</p>
    <div style={{padding:"20px 20px 0px"}}>

       <Button style={{color:"#F91D79",width:"100px",fontSize:"20px"}} colorScheme='pink' variant='outline' >Pay Now</Button>
    </div>
    {/* <div style={
    {padding:"20px 20px 0px"}
    }>
      <p>
        <input style={{color:"green"}} type="checkbox" />by clicking here you are signing in our terms & conditions.
        <br />
        you may read all the details of terms & conditions below in this  
    <Link to="/terms" >Terms & Conditions</Link>
      </p>
    </div> */}
   
</div>
    
    </div> 
    </div>
  )
}


