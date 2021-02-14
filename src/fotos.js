import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { useMediaQuery } from 'react-responsive';

function Fotos() {

    const matchesfotos = useMediaQuery({query: '(min-width:600px)'});

    return (
        <div>
            <div className={matchesfotos ? "boxpc" : "boxcell"}>
                <AliceCarousel autoPlay autoPlayInterval="3000" infinite="true" disableButtonsControls="true" disableDotsControls="true">
                    <div className={matchesfotos ? "tallerpc1" : "tallercell1"}></div>
                    <div className={matchesfotos ? "tallerpc2" : "tallercell2"}></div>
                    <div className={matchesfotos ? "tallerpc3" : "tallercell3"}></div>
                    <div className={matchesfotos ? "tallerpc4" : "tallercell4"}></div>
                    <div className={matchesfotos ? "tallerpc5" : "tallercell5"}></div>
                    <div className={matchesfotos ? "tallerpc6" : "tallercell6"}></div>
                    <div className={matchesfotos ? "tallerpc7" : "tallercell7"}></div>
                    <div className={matchesfotos ? "tallerpc8" : "tallercell8"}></div>                    
                </AliceCarousel>
                
            </div>
            
        </div>
    )
}

export default Fotos;