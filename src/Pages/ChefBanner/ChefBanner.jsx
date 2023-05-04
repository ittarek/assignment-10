import React from "react";
import { Card } from "react-bootstrap";
import "./ChefBanner.css";

const ChefBanner = ({ chef }) => {
  const { chef_image, chef_name, bio, rating } = chef;
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Text>
            {" "}
            <h3>{chef_name}</h3>
          </Card.Text>
          <Card.Text> <span className="text-success fs-3">Bio :</span> {bio}</Card.Text>
          <p>Rating : {rating}</p>
        </Card.Body>
        <Card.Img
      
          className=" img-thumbnail bg-opacity-25 img-height  "
          src={chef_image}
        />
      </Card>
    </div>
  );
};

export default ChefBanner;
