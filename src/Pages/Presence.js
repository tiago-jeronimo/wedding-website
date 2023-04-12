import React from "react";
import Navbar from "../Components/NavBar";

class Presence extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <h2 id="title">Confirme sua presença</h2>
            </div>
        )
    }
}

export default Presence;