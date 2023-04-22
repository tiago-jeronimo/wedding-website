import React from "react";
import "./Home.css";
import Image from "../Components/Image";

import Navbar from "../Components/NavBar";

class Home extends React.Component {
  render() {
    return (
      <div >
        <Navbar />
        <div className="primeiro" >
          <Image />
        </div>
      </div>
    );
  }
}

export default Home;
