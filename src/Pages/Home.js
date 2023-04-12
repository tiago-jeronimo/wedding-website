import React from "react";
import Navbar from '../Components/NavBar'

class Home extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <h2 id="text_one">Seja bem vindo ao nosso "felizes para sempre"!</h2>
            </div>
        )
    }
}

export default Home;