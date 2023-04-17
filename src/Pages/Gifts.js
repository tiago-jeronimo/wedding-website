import React from "react";
import './Gifts.css'
import Navbar from "../Components/NavBar";
import Cards from "../Components/Cards.js";

class Gifts extends React.Component {
    render() {
        const meuArray = [1,2,3,4,5,6,7,9,10,11]
        return(
            <div >
                <Navbar />
                <h1 id="title" >Presentes</h1>
                <div id="container">
                {meuArray.map((e) => ( <Cards key={e} /> ))}
                </div>
            </div>
        )
    }
}

export default Gifts;