import React from 'react'

const Nav2 = () => {
  return (
    <div>
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

export default Nav2;
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