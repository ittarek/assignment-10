import React from "react";
import { FaFacebook, FaInstagram, FaShoePrints, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer dark">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-30">
            <div className="item abot">
              <div className="logo mb-20">
                <h2>
                  <Link to="index.html">Cooker</Link>
                  <span>Cooker</span>
                </h2>
              </div>
              <p>
                Steakhouse the nunc bibe endum in finibus elit the solli citudin
                elit.
              </p>
              <div className="social-icon">
                <Link className=" " to="#">
                  <span className=""><FaFacebook className="link"></FaFacebook></span>
                </Link>
                <Link to="#">
                  <span className=""><FaTwitter className="link"></FaTwitter></span> </Link>
             
                <Link to="#">
              <span> <FaInstagram className="link"></FaInstagram> </span>   </Link>
              
                <Link to="#">
            <span className="">     <FaShoePrints className="link"></FaShoePrints></span> </Link>
             
              </div>
            </div>
          </div>
          <div className="col-md-2 offset-md-1 mb-30">
            <div className="item fotcont">
              <div className="fothead">
                <h6>Phone &amp; Email</h6>
              </div>
              <p>+01245760</p>
              <p>ittarek551@gmail.com</p>
            </div>
          </div>
          <div className="col-md-2 offset-md-1 mb-30">
            <div className="item fotcont">
              <div className="fothead">
                <h6>Our Address</h6>
              </div>
              <p>24 road D block, Chottogram, Bangladesh</p>
            </div>
          </div>
          <div className="col-md-2 offset-md-1 mb-30">
            <div className="item fotcont">
              <div className="fothead">
                <h6>Opening Hours</h6>
              </div>
              <p>Mon-Fri: 5 PM - 10:30 PM Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="text-left">
                <p>© 2023, Cooker . All right reserved.</p>
              </div>
            </div>
            <div className="col-md-4">
              <p className="right">
                <Link to="#">Terms &amp; Conditions</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
