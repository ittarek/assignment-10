import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './SingleChefDetails.css'

const SingleChefDetails = ({ data }) => {
  const [show, setShow] = useState(true);
  const {
    _id,
    recipe_name,
    image_url,
    recipe_image,
    steps,
    ingredients,
    rating,
  } = data;
  console.log("data", data);

  //   handle fabourite button
  const notify = () =>
    toast("Add This recipe is Favourite !!!", {
      icon: "👏",
    });
  const handlebtn = () => {
    notify();
    setShow(false);
  };
  return (
    <div className="col-lg-6 position-relative">
      {/* <h1>this is SingleChefDetails page :{data.length}</h1> */}

      <Card className="mb-3 col-lg height  ">
        <card-title>{recipe_name}</card-title>
        <img src={recipe_image} className="card-img-top img-fluid details-image" alt="..." />
        <div className="card-body">
          <h5 className="card-title fa-xl fw-bold mb-2">{recipe_name}</h5>
          <h6 className="">
            {" "}
            <span className="mb-2 fw-bold text-info">Ingredients </span>:{" "}
            {ingredients}
          </h6>
              <p className="card-text text-secondary  fst-italic">
            <span className="fw-bold text-info"> Method Of Recipe</span> :
             { steps}
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              {" "}
              <span className="fw-bold text-info">ratings:</span> {rating}
            </small>
          </p>

         <Card.Body> {show && (
            <button className="btn btn-outline-info favouriteBtn" onClick={handlebtn}>
              Favourite <ToastContainer position="top-center"></ToastContainer>
            </button>
          )}</Card.Body>
          {/* <Button variant="light" className="btn-bg-success"
            //   onClick={() => notify}
            onClick={() => setShow(!show)}
           
          >
            {show ? "Favourite" :""}
          </Button> */}
          {/* <Button onClick={handlebtn}>notify! </Button> */}
        </div>
      </Card>
    </div>
  );
};

export default SingleChefDetails;
