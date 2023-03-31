import { useState, useEffect } from 'react';

const images = [
  'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HotTrending-AvaasaSiyaahi-Min60.jpg',
  'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trends-Menswear-NetplayPerformax-Starting2993wd.jpg',
  'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HotTrending-Footprints-Upto70.jpg',
  'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HotTrending-AvaasaSiyaahi-Min60.jpg',
  'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HotTrending-KGFrendzRio-Under499.jpg'
];
export const HomeCarousel1=()=> {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => (prevCount + 1) % images.length);
      }, 2000); // 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    console.log(count);
  
    return (
      <div className="carousel">
        <img style={{ width: "100%" }} src={images[count]} alt="" />
      </div>
    );
  }