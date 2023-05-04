import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import './Home.css'
import Chef from "../ChefPage/Chef";
import Branch from "../OureBrangPage/Branch";
import TodayMenu from "../TodayMenuePage/TodayMenu";

const Home = () => {
const [chefData, setChefData] = useState([]);
const [showAll, setShowAll] = useState(false);

// console.log(chefData);

useEffect(()=>{
  fetch('https://b7-a10-chef-recipe-hunter-server-side-ittarek.vercel.app/chefData')
  .then(res => res.json())
  .then(data => setChefData(data))
},[])

  return (<div className=" ">
    <Container fluid className="image">
         
      {/*banner text  */}
      <div className=" margin text-white d-flex justify-content-center align-items-center flex-column ">
        <h1 className="fw-bold title mx-auto fs-sm-5">Welcome to  Recipe Cooker </h1>
        <p className="fst-italic text-info ">I am in the pressure cooker of life <br />
Can you please turn the flame down <br />
I am cooking <br />
Ready to blow up <br />
Assignments, conflicts <br />
Work, family, friends; do this, do that <br />
I simply want to escape this stew <br />
Turn it off! <br />
Lift up the lid <br />
Let me breathe <br />
Please! <br /></p> 
        <Button>Cooke Now</Button>
      </div>

      

    
    </Container>  <Container  className=" ">
    <h1 className="text-canter  shadow-lg rounded-2  mt-5 chef-color">Welcome To Chef</h1>
       
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
