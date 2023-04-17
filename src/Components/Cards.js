import React from "react";
import presentes from "../data/listPresentes";
import "./Card.css";

class Cards extends React.Component {
  render() {
    return (
      <div id="card">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img id="imagem-card" src={presentes[0].image} alt="Avatar" />
              <div className="texto__front card01">
                <p className="texto__front card02">QUERO PRESENTEAR COM </p>
                <div className="div__product">
                  <h2 className="texto__front">{presentes[0].product}</h2>
                  <p className="texto__front">R${presentes[0].price}</p>
                </div>
                <div className="div__click">
                  <p className="texto__front texto__click">
                    Click no card para acesso ao QRcode
                  </p>
                </div>
              </div>
            </div>
            <div class="flip-card-back">
              <img
                id="imagem__back"
                alt="imagem de um produto"
                src={presentes[0].pix}
              />
              <h1> {presentes[0].product}</h1>
              <p>R${presentes[0].price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
