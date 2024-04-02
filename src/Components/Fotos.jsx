import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DomingoGuti from "../img-fondo/DomingoGuti.jpeg"
import guti1 from "../img-fondo/guti1.jpeg"
import guti2 from "../img-fondo/guti2.jpeg"
import guti3 from "../img-fondo/guti3.jpeg"
import img4 from '../img-fondo/img4.jpeg'
import img5 from '../img-fondo/img5.jpeg'
import img6 from '../img-fondo/img6.jpeg'
import img7 from '../img-fondo/img7.jpeg'
import img8 from '../img-fondo/img8.jpeg'
import img9 from '../img-fondo/img9.jpeg'
import img10 from '../img-fondo/img10.jpeg'
import img11 from '../img-fondo/img11.jpeg'
import img12 from '../img-fondo/img12.jpeg'
import img13 from '../img-fondo/img13.jpeg'
import mmm from "../img-fondo/mmm.jpg";


const Fotos = ()=>{

    return(
        <div className="bgUno">

            <div className="contentCorpDos">
                <img src={DomingoGuti} alt="" />
            </div>

            <div className="contentCorpDos">
                <img src={guti3} alt="" />
            </div>

            <div className="contentCorpDos">
                <img src={img6} alt="" />
            </div>

            <div className="contentCorpDos">
                <img src={img7} alt="img1" />
            </div>

            <div className="contentCorpCuatro">
                <img src={mmm} alt="" />
            </div>

            <div className="contentCorpTres">
                <img src={guti1} alt="" />
            </div>

            <div className="contentCorpTres">
                <img src={guti2} alt="" />
            </div>

            <div className="contentCorpTres">
                <img src={img4} alt="" />
            </div>

            <div className="contentCorpTres">
                <img src={img5} alt="" />
            </div>

            <div className="contentCorpTres">
                <img src={img5} alt="" />
            </div>



            <div className="contentCorpTres">
                <img src={img8} alt="" />
            </div>

            <div className="contentCorpTres">
                <img src={img9} alt="" />
            </div>



            <div className="contentCorpTres">
                <img src={img11} alt="" />
            </div>

            <div className="contentCorpTres">
                <img src={img12} alt="" />
            </div>

            <div className="contentCorpTres">
                <img src={img13} alt="" />
            </div>


            <div className="contentCorpTres">
                <img src={img10} alt="" />
            </div>

      </div>
    )
}

export default Fotos;