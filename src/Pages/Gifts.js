import React from "react";
import './Gifts.css'
import Navbar from "../Components/NavBar";
import Cards from "../Components/Cards.js";

class Gifts extends React.Component {
    render() {
        return(
            <div >
                <Navbar />
                <h1 id="title" >Presentes</h1>
                <div id="container">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                </div>
            </div>
        )
    }
}

export default Gifts;