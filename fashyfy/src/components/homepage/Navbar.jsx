import React from "react";
import {NavLink} from "react-router-dom"
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Stack,background, ButtonGroup,Input,Button } from '@chakra-ui/react'
import { EmailIcon,ArrowForwardIcon,PhoneIcon, AddIcon, WarningIcon,ArrowDownIcon} from '@chakra-ui/icons'
//navabr styles
const activetStyle = {
    bakground: "white",
    color: "#F94D1F",
    textDecoration:"underline",
    margin:"auto",padding:"10px"
  };

  const defaultStyle = {
    bakground: "white",
    color: "black",
    textDecoration: "none",
    margin:"auto",padding:"10px"
  };
  
const AllLinks=[
   { path: "/allproducts", text: "All" } ,
    { path: "/mens", text: "Mens'" },
    { path: "/womens", text: "Womens'" },
    { path: "/kids", text: "Kids'" } ,
    { path: "/ethnic", text: "Ethnic" } ,
    { path: "/trendy", text: "Trendy" } 
   
    
]


export const Navbar=()=>{
    const btnRef = React.useRef()
return (
<div>
<div className="mainContainer" style={{display:"flex", justifyContent:"space-between"}}>

<div className="logo" style={{width:"150px"}}><img style={{height:"100%",padding:"0px 20px 0px"}} src="https://i.postimg.cc/RFRcv7p4/sslogo.png" alt="ad" />
</div>

<div className="pageLinks" style={{width:"20%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<NavLink to="/">Home</NavLink>
<NavLink to="/wishlist">Wishlist</NavLink>
<NavLink to="/cart">cart</NavLink>



</div>

<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"45%"}} className="SearchBar">

<Input style={{padding:"10px 20px 10px",borderRadius:"5px",border:"2px solid #F94D1F",outline:"none", width:"100%",margin:"auto"}} placeholder="search here"/>

 
    <Button  variant='outline'  style={{height:"30px",border:"1px solid #F94D1F" ,borderRadius:"5px",color:"#F94D1F",display:"flex",padding:"0px 10px 0px",margin:"0px 15px 0px",justifyContent:"center"}}>Search</Button>
    <NavLink to="/login">Login</NavLink>

</div>

{/* <div>
<Stack direction='row' >
  <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
    Email
  </Button>
  <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
    Call us
  </Button>
</Stack>
</div>
*/}
<div style={{width:"50px"}}>



  <Button  variant='outline'  colorScheme='blue'>👤</Button>


</div>
</div>
<div style={{background:"#FFD7B5"}}>
<div className="Links"  style={{display:"flex",width:"70%",margin:"auto",fontSize:"17px",justifyContent:"space-between",flexDirection:"row",}}>

    
      {/* <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link> */}
      {/* //link basically just updates the value in the searchport bar  */}
      {AllLinks.map((link) => (
        <NavLink
        style={({isActive})=>{
            return isActive?activetStyle: defaultStyle
        }}
          key={link.text}
          to={link.path}
        >
          {link.text}
        </NavLink>
      ))}
  
    

</div>

</div>

</div>
)

}

// <Link to="/mens"></Link>
// <Link to="/womens">Womens'</Link>
// <Link to="/ethnic">Ethnic</Link>
// <Link to="/kids">Kids</Link>
// <Link to="/allproducts">All</Link>