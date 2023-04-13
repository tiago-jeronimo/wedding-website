import React from "react";
import qr_code from "./qr_code.png";
import "./Card.css";

class Cards extends React.Component {
  render() {
    return (
      <div id="card">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                id="imagem-card"
                src="https://a-static.mlcdn.com.br/150x150/ferro-de-passar-roupa-a-vapor-e-a-seco-arno-steamgliss-verde/magazineluiza/021958200/fc091e5cbbb557059c89cf18e9f6bb7a.jpg"
                alt="Avatar"
              />
              <div className="texto__front card01" >
                <p className="texto__front card02" >QUERO PRESENTEAR COM </p>
                <div className="div__product" >
                    <h2 className="texto__front" >Ferro de Passar</h2>
                    <p className="texto__front" >R$100</p>
                </div>
                <div className="div__click" >
                  <p className="texto__front texto__click" >Click no card para acesso ao QRcode</p>
                </div>
              </div>
            </div>
            <div class="flip-card-back">
              <img id="imagem__back" alt="imagem de um produto" src={qr_code} />
              <h1> Ferro de Passar</h1>
              <p>R$100,00</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
