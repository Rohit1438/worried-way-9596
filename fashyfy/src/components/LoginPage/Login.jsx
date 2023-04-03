import React from 'react'
import { HomeCarousel1 } from '../homepage/homecards/homecarousel1'
import {Link} from "react-router-dom"
import {Input, Button,PinInputField } from '@chakra-ui/react'
const loginstyle={

    padding:"0px 20px 0px",
    borderRadius:"5px",
    border:"2px solid #FFFF",
    outline:"none", 
    width:"90%",
    margin:"10px 20px"
}
export const LoginPage = () => {
  return (

    <div style={{display:"flex",text:"center",height:"700px",background:"trasnparent",
    justifyContent:"center"}}>

      

   
 <div style={{
  width:"400px",
  border:"0px solid red",
  margin:"auto",
  height:"550px",
   background:"#FFD7B5"
   }} className='mainLogincontainer'>
    {/* <HomeCarousel1/> */}

<div style={{border:"0px solid black"}} className='headinglogin'>
<h1 style={{color:"Black",fontSize:"20px",padding:"20px 20px 0px"}}>Welcome to, 
  <br />
  <span style={{fontSize:"50px",color:"#F91D79"}}>FashyFy</span></h1>
</div>


<div style={{border:"0px solid white"}}>
  <Input style={loginstyle}placeholder="Mobile No"/>
    <br />
    <p style={{padding:"0px 20px 0px",}}>what's your mobile?</p>
    <Input style={loginstyle}placeholder="Mobile No"/>
    <br />
    <p style={{padding:"0px 20px 0px",}}>fill the OTP</p>
    <div style={{padding:"20px 20px 0px"}}>

       <Button style={{color:"#F91D79",width:"100px",fontSize:"20px"}} colorScheme='pink' variant='outline'><Link to="/">Login</Link></Button>
    </div>
    <div style={
    {padding:"20px 20px 0px"}
    }>
      <p>
        <input style={{color:"green"}} type="checkbox" />by clicking here you are signing in our terms & conditions.
        <br />
        you may read all the details of terms & conditions below in this  
    <Link to="/terms" >Terms & Conditions</Link>
      </p>
    </div>
   
</div>
    
    </div> 
    </div>
  )
}


