import React from "react";
import presentes from "../data/listPresentes";
import "./Card.css";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionality: "okay",
    };
  }
  render() {
    return (
      <div id="card">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img id="imagem-card" src={presentes[9].image} alt="Avatar" />
              <div className="texto__front card01">
                <p className="texto__front card02">QUERO PRESENTEAR COM </p>
                <div className="div__product">
                  <h2 className="texto__front">{presentes[9].product}</h2>
                  <p className="texto__front">R${this.props.price}</p>
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
                src={this.props.pix}
              /> <p className="texto__front card02" >
                Clique em "VIAGEM" para prosseguir com o pagamento.
              </p>
              <h1>
                <a href={this.props.UrlPix} style={{textDecoration: 'none', color: 'inherit'}} >{presentes[9].product}</a>
              </h1>
              <p>R${this.props.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
