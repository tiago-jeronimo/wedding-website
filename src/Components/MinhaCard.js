import React from "react";
import "./Card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class MinhaCard extends React.Component {
  render() {
    return (
      <div id="card" >
      <Card style={{ width: "18rem" }}>
        <Card.Img id="imagem-card" variant="top" style={{ width: "18rem" }} src='https://imgs.casasbahia.com.br/55043353/9g.jpg?imwidth=500' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default MinhaCard;
