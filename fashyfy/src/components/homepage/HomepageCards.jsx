import { border } from "@chakra-ui/react"
import { HomeCards1 } from "./homecards"
import { HomeCarousel1 } from "./homecards/homecarousel1"
import { HomeCards2 } from "./homecards2"
import { Navbar } from "./Navbar"
//carouselimages

const OfferImages=[
    "https://assets.ajio.com/cms/AJIO/WEB/1440x128-mobikwiknew.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1440x128-Paytm-ggg.jpg"
]
export const HomePage=()=>{
    return(
        <div>
            <Navbar/>
            <div>
                <img style={{width:"100%"}} src="https://assets.ajio.com/cms/AJIO/WEB/UHP-encrustd-banner-1440x470-revised.gif" alt="" />
                <img style={{width:"100%"}}  src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-mobikwiknew.jpg" alt="" />
            </div>
            <div>
              <img style={{width:"100%"}} src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trends-Azorte-Flat50%20(1).jpg" alt="" />
            </div>
<div>
    <img style={{width:"100%"}}  src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-For%20Lil%20Show%20Stealers%20-Section%20Header.jpg" alt="" />
</div>
            <div style={{width:"100%",display:"flex",justifyContent:"space-between"}} >
                <HomeCards1 />
            </div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Hidden%20Gems%20-Section%20Header.jpg" alt="" />
            </div>
            <div>
                <HomeCards2/>
            </div>
            <div>
                <img style={{width:"100%"}}  src="https://assets.ajio.com/cms/AJIO/WEB/29032023-UHP-D-JIT%20-P6-Brands-Starting299+Extraupto35.jpg" alt="" />
            </div>
         <img style={{width:"100%"}}   src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HotTrending-Sectionheader.jpg" alt="" />
            <div>
                <HomeCarousel1/>
            </div>
            <div>
                <img style={{width:"100%"}}  src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-Section%20Header.jpg" alt="" />
            </div>


        </div>
    )
}