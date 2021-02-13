import React, {useState} from "react";
import ReactDom from "react-dom";
import "./index.css"
import logo from "./logo.jpeg"
import { Facebook } from 'react-bootstrap-icons';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
    return (
        <div>
            <div className={"header"}>
                <img src={logo} alt="" className={"logo"}/>
                <div className={"center"}>
                    <div className={"horizontal"}>
                        <div style={{fontWeight: "bold"}}> Av. Siglo XXI #5123 Haciendas de Aguasclaientes</div>    
                    </div>
                    <div className={"horizontal"}>
                        <div style={{padding: "25px", fontWeight: "bold", color: "white", fontSize: "1.5em"}}> Alineacion y Blanceo</div>    
                    </div>
                    <div className={"horizontal"}>
                        <div style={{height: "100px", fontWeight: "bold", color: "white", fontSize: "3em"}}> JULIO REGALADO</div>    
                    </div>
                    <div className={"horizontal"}>
                        <div style={{display: "flex", justifyContent: "space-around", width: "50%"}}>
                            <div className={"topnav"}>SERVICIOS</div>  
                            <div className={"topnav"}>CONTACTO</div>  
                            <div><Facebook size={40} color={"blue"}/></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={"horizontal"}>
                <div style={{height: "640px", width: "50%"}}>
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

            <div className={"body"}>
                <div style={{position: "absolute", marginTop: "60px", marginLeft: "100px", height: "340px", width: "80%"}}>
                    <div style={{position: "absolute", height: "40px", width: "50%", fontWeight: "bold", fontSize: "2em"}}>
                        Alineacion y balanceo
                    </div>
                    <div style={{position: "absolute", marginTop: "60px", height: "280px", width: "50%"}}>
                        <div style={{fontWeight: "bold", fontSize: "1.5em"}}> La alineacio previene:</div><br/>
                        <div>El desagaste irregular de las llanatas aumentando su vida util</div>
                        <div>El aumento de la llanta en el suelo</div>
                        <div>El desplazamiento del vehiculo</div><br/>
                        <div style={{fontWeight: "bold", fontSize: "1.5em"}}>El balanceo permite</div><br/>
                        <div>El giro de las ruedas o llantas sin tener vibracions a determinadas velocidades</div>
                    </div>

                </div>
            </div>

            <div>
                <div>
                    <div>
                        
                    </div>
                </div>
                <div>

                </div>
            </div>
            
        </div>
    )
}

ReactDom.render(<App />, document.getElementById("root"));