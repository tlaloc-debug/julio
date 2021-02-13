import React, {useState} from "react";
import ReactDom from "react-dom";
import "./index.css"
import logo from "./logo.jpeg"
import { Facebook } from 'react-bootstrap-icons';
import { TelephoneFill } from 'react-bootstrap-icons';
import { GeoAltFill } from 'react-bootstrap-icons';
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
                            <div><a href="https://www.facebook.com/Alineaci%C3%B3n-y-balanceo-Julio-Regalado-1107993399379429"><Facebook size={40} color={"blue"}/></a> </div> 
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

            <div style={{display: "flex", justifyContent: "space-around", marginTop: "20px"}}>
                <div style={{width: "30%"}}> 
                    <div className={"horizontal"}>
                        <div style={{height: "40px", color: "#fb7d0c", fontSize: "2em"}}>Contacto</div> 
                    </div>
                    <div style={{marginTop: "30px", marginLeft: "10%", height: "50px"}}>
                        <div style={{display: "inline-block"}}><TelephoneFill size={30} color={"red"}/></div>
                        
                        <div style={{fontSize: "1.5em", display: "inline-block", paddingLeft: "10%", fontStyle: "italic"}}>514 717 6664</div>
                    </div>
                    <div style={{marginTop: "30px", marginLeft: "10%"}}>
                        <div style={{position: "absolute"}}><GeoAltFill size={30} color={"red"}/></div>
                        
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.173573041671!2d-102.25458698489214!3d21.88939088553848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429f1e24ea2e8d7%3A0x217657bd36c1fbb4!2sAv.%20Siglo%20XXI%205123%2C%20Haciendas%20de%20Aguascalientes%2C%2020190%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sca!4v1613241976522!5m2!1ses!2sca" width="600" height="450" frameborder="0" style={{border:0, height: "300px", width: "80%", marginLeft: "15%"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
                <div style={{width: "30%"}}>
                <div className={"horizontal"}>
                        <div style={{height: "40px", color: "#fb7d0c", fontSize: "2em"}}>Correo Electronico</div> 
                    </div>
                    <div style={{marginTop: "30px"}}>
                        <label htmlFor="">Correo</label><br/>
                        <input type="text"/><br/><br/>
                        <label htmlFor="">Nombre</label><br/>
                        <input type="text"/><br/><br/>
                        <label htmlFor="">Mensaje</label><br/>
                        <textarea name="" id="" cols="30" rows="10"></textarea><br/><br/>
                        <div style={{display: "flex", justifyContent: "center"}}><button >ENVIAR</button></div>
                        
                    </div>
                </div>
            </div>

            <div className={"footer"}>
                <div style={{fontWeight: "bold"}}>© 2021 tlaloc-debug</div>
            </div>
            
        </div>
    )
}

ReactDom.render(<App />, document.getElementById("root"));