import React from "react";
import { Card } from "react-bootstrap";
import './ChefBanner.css'

const ChefBanner = ({ chef }) => {
  const { chef_image, chef_name ,rating} = chef;
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Text>  <h3>{chef_name}</h3>
          
          </Card.Text>
          <Card.Text>
            {" "}
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p>Rating  : {rating}</p>
        </Card.Body>
        <Card.Img variant="bottom" className="img-fluid bg-opacity-25 img-height  " src={chef_image} />
      </Card>
    </div>
  );
};

export default ChefBanner;
