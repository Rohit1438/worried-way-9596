import { Button } from '@chakra-ui/react'
import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Cartproducts = ({ arr }) => {
  const [cartData, setCartData] = useState(arr)

  useEffect(() => {
    setCartData(arr)
  }, [arr])

  const handleIncrement = (card) => {
    card.quant++
    localStorage.setItem("cartData", JSON.stringify(cartData))
    setCartData([...cartData])
  }

  const handleDecrement = (card) => {
    if (card.quant > 1) {
      card.quant--
      localStorage.setItem("cartData", JSON.stringify(cartData))
      setCartData([...cartData])
    }
  }

  const handleRemove = (card) => {
    const newCartData = cartData.filter((el) => {
      return el.id !== card.id
    })
    localStorage.setItem("cartData", JSON.stringify(newCartData))
    setCartData(newCartData)
  }
  return (
    cartData.map((card) => (
      <div key={card.id} style={{
        height: "130px",
        padding: "10px 10px 10px 0px",
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "5px solid #FFD7B5",
      }}>
        <div style={{ width: "100px", padding: "5px 5px 5px" }}>
          <img src={card.image} alt="" />
        </div>
        <div className='cardtexts' style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "20px",
          padding: "10px"
        }}>
          <p>{card.title.substring(0, 10)}</p>
          <h1 style={{
            color: "red", 
            fontWeight: "700",
            fontSize: "28px"
          }}>{card.discount}/-</h1>
          <div style={{ padding: "20px 20px 0px" }}></div>
        </div>
        <div className='quantbtn' style={{
          fontSize: "25px",
          alignItems: "center",
          display: "flex",
          gap: "10px",
          justifyContent: "space-between"
        }}>
          <Button style={{ color: "green", fontSize: "15px" }} colorScheme='green' size='xs' variant='outline'
            onClick={() => handleIncrement(card)}>➕</Button>
          <h1>{card.quant}</h1>
          <Button style={{ color: "green", fontSize: "15px" }} colorScheme='green' size='xs' variant='outline'
            onClick={() => handleDecrement(card)}>➖</Button>
        </div>
        <div style={{display:"flex"}}>
        <Button style={{ color: "#F91D79", margin: "10px", fontSize: "15px" }} colorScheme='pink' variant='outline'
        
        onClick={()=>{handleRemove (card)}}
        
        >Remove</Button>
          <Button style={{ color: "green", margin: "10px", fontSize: "15px" }} colorScheme='green' variant='outline' 
     
          
          > <Link to="/payment">Checkout</Link></Button>
        </div>
      </div>
    ))
  )
}

export default Cartproducts
