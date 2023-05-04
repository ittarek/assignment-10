import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleChefDetails from "../SingleChefDetails/SingleChefDetails";
import { Container } from "react-bootstrap";
import ChefBanner from "../ChefBanner/ChefBanner";

const ChefDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const {_id}= useParams()

  return (
  <>
      <Container  className="d-flex mx-auto w-75 flex-column-reverse  mb-5 mt-5">
        {details.slice(0, 1).map((chef) => (
          <ChefBanner key={chef.id} chef={chef}></ChefBanner>
        ))}
      </Container>
  <Container>
      <div className="row">
        {details.map((data) => (
          <SingleChefDetails key={_id} data={data}></SingleChefDetails>
        ))}
      </div>
    </Container></>
  );
};

export default ChefDetails;
