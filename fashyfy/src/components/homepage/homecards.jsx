const carouselImages=[
    "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Premiumpicks-P1-Min60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-PremiumPicks-Superdry-BHPC-3050-Revised%20.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-PremiumPicks-AldoSteveMadden-3050.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-PremiumPicks-AldoSteveMadden-3050.jpg"
    // ,
    // "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-PremiumPicks-DieselGstarraw-Upto40.jpg"
    
    ]

    export const HomeCards1=()=>{
return (
<div style={{border:"25px solid #FFCC3B",display:"flex",width:"100%",justifyContent:"space-around"}} >{
    carouselImages.map((card,i)=>
     <img style={{height:"100%"}} key={card+i} src={card} alt="card-image" />
    )
    }
</div>


)
    }