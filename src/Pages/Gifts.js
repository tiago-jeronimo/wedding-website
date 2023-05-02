import React from "react";
import './Gifts.css'
import Image from "../Components/Image";
import "../Components/Image.css"
// import Navbar from "../Components/NavBar";
import Cards from "../Components/Cards.js";
import presentes from "../data/listPresentes";


class Gifts extends React.Component {
    render() {
        return(
            <div >
                {/* <Navbar /> */}
                <h1 id="title" >👰 Débora &  Tiago 🤵</h1>
            
                <Image />

                <div id="container">
                {presentes.map((e) => ( 
                <Cards 
                key={e.id}
                image={e.image}
                product={e.product}
                price={e.price}
                pix={e.pix}
                UrlPix={e.UrlPix}
                /> ))}
                </div>
            </div>
        )
    }
}

export default Gifts;
