import React, { useState } from 'react'
import {Button,Spacer} from '@chakra-ui/react'

const data=[1,2,3,4,5,6,7,8]

const Pagination = ({page,setPage}) => {
  // return (
  //   <div style={{width:"40%",display:"flex",justifyContent:'space-around'}}>
      
  //       <Button style={{color:"#FF388C",fontSize:"15px"}} colorScheme='pink' variant='outline' value="1" onClick={(e)=>{console.log(e.target.value)}} >
  //       1
  //     </Button>
  
  //     <Button style={{color:"#FF388C",fontSize:"15px"}} colorScheme='pink' variant='outline' value="2" onClick={(e)=>{console.log(e.target.value)}} >
  //     2
  //   </Button> 
  //   <Button style={{color:"#FF388C",fontSize:"15px"}} colorScheme='pink' variant='outline' value="3" onClick={(e)=>{console.log(e.target.value)}} >
  //   3
  // </Button>
  // <Button style={{color:"#FF388C",fontSize:"15px"}} colorScheme='pink' variant='outline' value="4" onClick={(e)=>{console.log(e.target.value)}} >
  //       4
  //     </Button>
  //     <Button style={{color:"#FF388C",fontSize:"15px"}} colorScheme='pink' variant='outline' value="5" onClick={(e)=>{console.log(e.target.value)}} >
  //       5
  //     </Button>
  //     <Button style={{color:"#FF388C",fontSize:"15px"}} colorScheme='pink' variant='outline' value="6" onClick={(e)=>{console.log(e.target.value)}} >
  //       6
  //     </Button>
  //     <Button style={{color:"#FF388C",fontSize:"15px"}} colorScheme='pink' variant='outline' value="7" onClick={(e)=>{console.log(e.target.value)}} >
  //       7
  //     </Button>
  //     <Button style={{color:"#FF388C",fontSize:"15px"}} colorScheme='pink' variant='outline' value="8" onClick={(e)=>{console.log(e.target.value)}} >
  //       8
  //     </Button>
  //     <Button style={{color:"#FF388C",fontSize:"15px"}} colorScheme='pink' variant='outline' value=">" onClick={(e)=>{console.log(e.target.value)}} >
  //     .....
  //     </Button>
  //   </div>
  // )


// console.log(page)
return(
data.map((el)=>(

  <Button key={el} style={{color:"#FF388C",fontSize:"15px"}} colorScheme='pink' variant='outline' value={el} onClick={
    (e)=>{
     setPage(e.target.value)
    }
    
    } >
      {el}</Button>
))
)

}
export default Pagination
