import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { AuthContext } from "../../Provider/AuthProvider";

const PrivetRout = ({ children }) => {
  const { user,loader } = useContext(AuthContext);


  const location = useLocation();

  if(loader){
        return <Spinner animation="border" variant="primary" className="w-25 m-auto  d-flex justify-content-center align-items-center "></Spinner>
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default PrivetRout;
