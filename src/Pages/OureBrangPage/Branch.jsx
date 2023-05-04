import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./Branch.css";

const Branch = () => {

  // useEffect(()=>{
  //   fetch('../../../public/data/data.json')
  // },[])
  return (
    <div>
      <h1 className="text-center text-info fw-bold fst-italic">Our Branch</h1>
      <div>
        {" "}
        <Carousel>
          <Carousel.Item interval={1000}>
            {/* mumbai */}
            <img
              className="d-block w-100 img-fluid mx-auto slide-image"
              src="https://images.unsplash.com/photo-1559910369-3924e235c1cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h4 className="text-success  text-center  fs-1">Mumbai , Indea</h4>
              <p className="text-info fs-3  text-center  fst-italic">
                The name Winta, in principle, quite fully describes the
                restaurant's concept: red meat and red wine - what else is
                needed for a steakhouse!
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* California */}
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 mx-auto img-fluid slide-image"
              src="https://images.unsplash.com/photo-1671645364013-a9f399c4a2c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h4 className="text-success  text-center  fs-1">California, USA</h4>
              <p className="text-info fs-3  text-center  fst-italic">
                The name Winta, in principle, quite fully describes the
                restaurant's concept: red meat and red wine - what else is
                needed for a steakhouse!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* Italy */}
            <img
              className="d-block w-100 img-fluid  mx-auto slide-image"
              src="https://images.unsplash.com/photo-1681155855842-88f6d08ae4fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h4 className="text-success text-center fs-1">Roma, Italy</h4>
              <p className="text-info fs-3  text-center  fst-italic ">
                The name Winta, in principle, quite fully describes the
                restaurant's concept: red meat and red wine - what else is
                needed for a steakhouse!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Branch;
