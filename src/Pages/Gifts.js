import React from "react";
import './Gifts.css'
import Navbar from "../Components/NavBar";
import MinhaCard from "../Components/MinhaCard.js";

class Gifts extends React.Component {
    render() {
        return(
            <div >
                <Navbar />
                <h2 id="title" >Presentes</h2>
                <div id="container">
                <MinhaCard />
                <MinhaCard />
                <MinhaCard />
                <MinhaCard />
                <MinhaCard />
                <MinhaCard />
                <MinhaCard />
                <MinhaCard />
                <MinhaCard />
                <MinhaCard />
                </div>
            </div>
        )
    }
}

export default Gifts;