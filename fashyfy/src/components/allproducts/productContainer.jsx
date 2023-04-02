import { AllProducts } from "./AllProducts";

import React, { useEffect, useState } from 'react'
import { Navbar } from "../homepage/Navbar";
import Pagination from "./Pagination";
import Filters from "../AllRoutes/productpage_sidebar/filters";
const cardStyle={
 
}

const getData = async (page) => {
  try {
    let res = await fetch( `http://localhost:8000/product?_limit=16&_page=${page}`)
    let jsondata = await res.json()
    console.log(jsondata)
    return jsondata


  } catch (err) {
    console.log(err)
  }
}


export const ProductContainer = () => {


  const [page,setPage]=useState(1)
    const [data, setData] = useState([])

    const FetchAndREnder = () => {
      getData(page)
        .then((res) => {
          setData(res)
        }).catch((err) => {
          console.log(err)
        })
    }
//console.log(data)
  
    useEffect(() => {
      FetchAndREnder()
  
    }, [page])
  
  // console.log(cartdata,"it is")
  

  console.log(page)
  return (
    <div>
<Navbar/>
<div style={{display:"grid",marginTop:"20px",gridTemplateColumns:"15% 85%"}}>
  
<div className="filterPart">

<Filters/>


</div>

  <div style={{  width:"98%", display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",gap:"40px 10px"}}>
     
      <AllProducts data={data}/>










    </div>
  
</div>  

<div style={{display:"flex",
justifyContent:"center",
width:"100%",

padding:"30px"}} className="paginationcontainer">
  
  <Pagination page={page} setPage={setPage}/>
   
    </div>
    
</div>
  
  )
}
