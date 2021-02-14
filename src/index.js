import React, {useState} from "react";
import ReactDom from "react-dom";
import "./index.css"
import logo from "./logo.jpeg"
import { Facebook } from 'react-bootstrap-icons';
import { TelephoneFill } from 'react-bootstrap-icons';
import { GeoAltFill } from 'react-bootstrap-icons';
import Fotos from "./fotos.js";



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
                    
                </div>

                <div className={"precios"}>
                    <div className={"horizontal"}>
                        <div style={{padding: "40px 0px"}}>
                            <div className={"lista"}>
                                <div className={"marca"}>Diagnostico Gratis</div>
                            </div>
                            <div className={"lista"}>
                                <div>Alineación y Balanceo </div> 
                                <div>(rines estándar) </div>  
                                <div className={"marca"}> $200 </div> 
                            </div>
                            <div className={"lista"}>
                                <div>Alineación y Balanceo</div>  
                                <div>(rines deportivos... 17 hasta 22 </div>
                                <div>incluyendo plomo de contacto)</div>  
                                <div className={"marca"}> $350</div>
                            </div>
                            <div className={"lista"}>
                                <div>Cambio de Refacciones</div>  
                                <div className={"marca"}> 10% de Descuento </div> 
                            </div>
                            <div className={"lista"}>
                                <div>Cambio de Frenos Delantero y traseros</div> 
                                <div className={"marca"}> 10% de Descuento </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Fotos />
            
            <div className={"body"}>
                <div style={{width: "70%", display: "flex", justifyContent: "center"}}>
                    <h2>Alineacion y Balanceo</h2>
                </div>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div style={{width: "70%", marginBottom: "20px"}}>
                        <div>Sabemos lo importante que es para ti tener tu auto en perfectas condiciones. Por eso es que la alineación y el balanceo juegan un papel esencial en el funcionamiento de un vehículo y es de suma importancia para el desempeño correcto de cualquier automóvil.</div> <br/>
                        <div style={{fontWeight: "bold"}}>¿CUÁNDO? </div> <br/>
                        <div>Se recomienda hacerlo cada 6, o bien, si sientes cualquier vibración al momento de viajar a alta velocidad, desgastes inadecuados en tus llantas o siente que la dirección se va hacia un lado, es hora de llevar el vehículo al taller y pasarlo por alineación y balanceo.</div><br/>
                        <div style={{fontWeight: "bold"}}>¿POR QUÉ?</div><br/>
                        <div>Por seguridad o durabilidad de las llantas es importante hacer la alineación en los cuatro neumáticos. ¡No se te olvide! De esta manera tu vehículo será más seguro y el desgaste más parejo en tus llantas.</div>
                        <div>En cuanto al balanceo, sirve para que las llantas giren sin tener algún tipo de vibración a determinadas velocidades.</div>
                    </div>
                
                    <div className={"balanceo"}></div>
                        
                </div>
            </div>
            <br/>
            <div className={"body"}>
                <div style={{display: "flex", justifyContent: "right"}}> 
                    <div style={{width: "70%", display: "flex", justifyContent: "center"}}>
                        <h2>Cambio de pastillas de freno</h2>
                    </div>
                </div>
                    
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    
                    <div className={"pastillas"}></div>

                    <div style={{width: "70%", display: "flex", justifyContent: "center", marginBottom: "20px"}}>
                        <div>
                            <div style={{fontWeight: "bold"}}>¿QUE SON?</div><br/>
                            <div>Las pastillas de freno son uno de los materiales que más desgaste sufren del coche con el paso del tiempo y es necesario cambiarlas, ya que son de suma importancia para tu seguridad y los de alrededor.</div><br/>
                            <div style={{fontWeight: "bold"}}>¿CUANDO HAY QUE CAMBIARLAS?</div><br/>
                            <div>Con base en nuestra experiencia nosotros recomendamos cambiarlas mínimo dos veces al año. Dependiendo del uso que le des a tu automóvil (agresividad al volante).Si se escucha un ruido (agudo) al momento de frenar. O bien, si en tu coche se enciende el testigo de desgaste de pastillas.</div><br/>
                            <div style={{fontWeight: "bold"}}>¿POR QUE HAY QUE CAMBIARLAS?</div><br/>
                            <div>Si las pastillas se llegaran a gastar en su totalidad, se podría dañar superficie de los discos y ocasionar un accidente.</div> 
                        </div>
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