import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Fotos() {
    return (
        <div>
            <div style={{height: "640px", width: "640px"}}>
                <AliceCarousel autoPlay autoPlayInterval="3000" infinite="true" disableButtonsControls="true" disableDotsControls="true">
                    <div className="taller1"></div>
                    <div className="taller2"></div>
                    <div className="taller3"></div>
                    <div className="taller4"></div>
                    <div className="taller5"></div>
                    <div className="taller6"></div>
                    <div className="taller7"></div>
                    <div className="taller8"></div>                    
                </AliceCarousel>
                
            </div>
            
        </div>
    )
}

export default Fotos;