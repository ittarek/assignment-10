import React from "react";
import { Container } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import Header from "../../ShardComponet/Header/Header";
import Footer from "../../ShardComponet/Footer/Footer";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <Container className=" ">
          <Header></Header>
      <div className="d-flex justify-content-center align-items-center flex-column">
      
          
          <img className="w-25" src="https://atomiks.github.io/tippyjs/static/logo-ebc385458e03fdb24af078536af88065.svg" alt="" />
   
        <div className="w-25 text-center">
          <h2 className="mb-8  ">
            <span className="">Error</span> {status || 404}
          </h2>
          <p className=" mb-8">{error?.message}</p>
          <Link to="/" className="px-8 py-3 ">
            Back to homepage
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </Container>
  );
};

export default ErrorPage;
