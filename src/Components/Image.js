import React from "react";
import "./Image.css";

export default class Image extends React.Component {
  render() {
    return (
      <div className="center">
        <div className="card">
          <div className="img-avatar">
            <svg viewBox="0 0 100 100"></svg>
          </div>
          <div className="card-text">
            <div className="portada"></div>
            <div className="title-total">
              <div className="title">03 | Jun | 2023</div>
              <h2>Débora & Tiago</h2>
              <div className="desc">
              🎁 Queridos amigos e familiares, estamos muito felizes em compartilhar com vocês a alegria do nosso casamento! Como uma forma de presente, gostaríamos de oferecer a opção de contribuição financeira para a nossa viagem de lua de mel. Sabemos que cada convidado possui uma realidade financeira diferente, por isso disponibilizamos diversas opções de valores para que vocês possam escolher a que melhor se adequa a vocês. Agradecemos antecipadamente e esperamos ansiosamente para compartilhar esse momento especial com cada um de vocês. Obrigado! 
              </div>
              <div className="actions"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
