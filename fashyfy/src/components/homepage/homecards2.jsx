import React, { useState } from "react";

const carouselImages=[
    "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Hidden%20Gems%20-P2-Brands-40-70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Hidden%20Gems%20-P1-Brands-30-60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Hidden%20Gems%20-P3-Brands-40-70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Hidden%20Gems%20-P4-Brands-30-50.jpg"
];

export const HomeCards2 = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleImageHover = (index) => {
        setHoveredIndex(index);
    };

    const handleImageLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div style={{ border: "5px solid violet", display: "flex", width: "100%", justifyContent: "space-around" }}>
            {carouselImages.map((card, index) => (
                <img
                    style={{
                        height: "100%",
                        transition: "transform 0.3s ease-in-out",
                        transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)"
                    }}
                    key={card}
                    src={card}
                    alt="card-image"
                    onMouseEnter={() => handleImageHover(index)}
                    onMouseLeave={handleImageLeave}
                    onClick={() => console.log(`Clicked image ${index}`)}
                />
            ))}
        </div>
    );
};


