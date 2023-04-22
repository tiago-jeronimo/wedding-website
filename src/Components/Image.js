import React from "react";
import "./Image.css";

export default class Image extends React.Component {
  render() {
    return (
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
              É com muita felicidade que convidamos você para participar conosco desse momento tão especial para a nossas vida. 
            </div>
            <div className="actions"></div>
          </div>
        </div>
      </div>
    );
  }
}
