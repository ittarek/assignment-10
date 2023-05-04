import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Showmenu.css";

const ShowMenu = ({ data }) => {
  const { id, name, description, price, calories, ingredients, image } = data;
  return (
    <div className="col-lg-6 gap-2 mx-auto menu-img rounded-circle">
      <Card
        className="mb-4 shadow-lg mx-auto " 
        style={{ width: "18rem" }}
      >
    <div className=" item animate-box" fadeInUp animated="fadeInUp">    <Card.Img className="today-image "  src={image}  /></div>
    
      
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{ingredients[1]}</ListGroup.Item>
          <ListGroup.Item>{ingredients[2]}</ListGroup.Item>
          <ListGroup.Item>{ingredients[3]}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <p>Price : {price} $</p>
          <p>Calories : {calories}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShowMenu;
