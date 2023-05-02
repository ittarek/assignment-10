import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import './Home.css'
import Chef from "../ChefPage/Chef";
import Branch from "../OureBrangPage/Branch";
import TodayMenu from "../TodayMenuePage/TodayMenu";

const Home = () => {
const [chefData, setChefData] = useState([]);
const [showAll, setShowAll] = useState(false);

console.log(chefData);
useEffect(()=>{
  fetch('http://localhost:5000/chefData')
  .then(res => res.json())
  .then(data => setChefData(data))
},[])

  return (<div>
    <Container fluid className="image bg-opacity-25">
         
      {/*banner text  */}
      <div className="w-50 position-absolute margin text-white d-flex justify-content-center align-items-center flex-column ">
        <h1>Welcome to  Recipe Cooker </h1>
        <p className="fst-italic ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam at quod assumenda! Architecto repellendus eius, similique facere molestiae iure incidunt illo, molestias repudiandae, atque obcaecati voluptatum corrupti eveniet temporibus.</p>
        <Button>Cooke Now</Button>
      </div>

      {/* Banner image */}
      <div>
      <img className=" position-relative "
          src=""
          alt=""
        />
      </div>

    
    </Container>  <Container fluid className=" ps-5 ">
    <h1 className="text-canter p-2 shadow-lg rounded-2  mt-5 chef-color">Welcome To Chef</h1>
       
     <div className="row">
     {
 chefData.slice(0, showAll ? 6 : 3).map(data=> <Chef key={data.id} data={data}></Chef>)
       }
     </div>
     <Button 
          onClick={() => setShowAll(true)}
          className="see-all-button  text-white mt-5 mb-5"
        >
          See All Chef

        </Button>
      </Container>
      
      
      <Container fluid className="branch-image">
        <Branch></Branch>
      </Container>

      <Container fluid className="mt-5 mb-5">
        <TodayMenu></TodayMenu>
      </Container>
      
      
      
      
      </div>
  );
};

export default Home;
