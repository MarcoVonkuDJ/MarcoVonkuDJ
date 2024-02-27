import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BackGround from "./Components/Bg.jsx";
// import NavBasic from "./Components/NavBasic.jsx"
import Separador from "./Components/Separador.jsx";
import MuroUno from './img-fondo/MuroUno.jpg';
import marco_outfitUno from './img-fondo/marco_outfitUno.jpg';
import imgfiesta2 from './img-fondo/imgfiesta2.jpg';
import marco_parqueUno from './img-fondo/marco_parqueUno.jpg';
import Footer from "./Components/Footer.jsx";
import Carrusel from "./Components/Carrusel";
import NavBasic1 from "./Components/NavCasic1.jsx";

function App() {

  return (
    <>
      <NavBasic1 />
      <div className="clearfix" id="inicio"></div>
      <BackGround 
        fondo={MuroUno}//Aqui indico que imagen cargar en el background
        logoIn={true}// aqui indico que esta sección llevará componente logo girando
        logoType={1}// indico que diseño de logo incluir
        buttonIn={true} // incluya un componente button
        title={1} // indica número de canción al dar play
        val={1} // indica que se debe incluir un componente texto
        
      />
      <div className="clearfix"></div>
      <Separador title="Servicio: BAR && MUSIC HOUSE" id="resto/3.1"/>
      <div className="clearfix"></div>
      <BackGround
        fondo={imgfiesta2}
        logoIn={true}
        logoType={2}
        buttonIn={true}
        title={2}
        val={2}
      />
      <div className="clearfix"></div>
      <Separador title="Servicio: DISCO && DRINKS" id="bares/3.2"/>
      <div className="clearfix"></div>
      <BackGround 
        fondo={marco_outfitUno}
        val={3} />
      <div className="clearfix"></div>
      <Separador title="Servicio: DISC ALL NIGHT" id="boliches/3.3" />
      <div className="clearfix"></div>
      <BackGround 
        fondo={marco_parqueUno}
        val={4} />
      <Separador title="GALERIA DE FOTOS" id="galeria/3.4" />
      <div className="clearfix"></div>
      <Carrusel />
      <Separador title="EMPRESAS QUE ENTIENDEN" id="empresas/3.5" />
      <div className="clearfix"></div>
      <BackGround fondo={"empresas"} />
      <div className="clearfix"></div>
      <Separador title="  Quieres llevar tu fiesta al próximo nivel...!!!  ***  Envíame un mensaje" id="contacto/3.6"/>
      <div className="clearfix"></div>
      <BackGround fondo={"color"} />
      <Footer />
    </>
  );
}

export default App;
