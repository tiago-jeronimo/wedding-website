import React from "react";
import "./Home.css";

import Navbar from "../Components/NavBar";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2 id="title">Seja bem vindo ao nosso "felizes para sempre"!</h2>
        <div id="div__image">
          <img
          id="image__div"
            src="https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/tiago%26debora.jpeg?alt=media&token=8c8eb0f0-fa3f-486d-b865-d98a73ec311a"
            alt="Avatar"
          />
        </div>
      </div>
    );
  }
}

export default Home;
