import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className=" mt-5 bg-secondary px-5">
      <div className="margin d-lg-flex justify-content-between my-auto align-items-center">
        {/* contact information */}
        <div>
          <h2>Contact Us</h2>
          <ul>
            <li className="text-white">
              Email <p>Ittarek551@gmail.com</p>{" "}
            </li>
            <li className="text-white">
              Phone <p>0185600015</p>
            </li>
          </ul>
        </div>

        {/* social information */}
        <div>
          <h2>Our Social Activity</h2>
          <ul className="list-style-none">
            <li className="text-white ">Facebook <FaFacebook className="text-success"></FaFacebook> </li>
            <li className="text-white">Instagram <FaInstagram></FaInstagram></li>
            <li className="text-white">Tweeter <FaTwitter></FaTwitter></li>
          </ul>
        </div>
      </div>


<div className="text-center mb-1">
 © 2023 Cooker Inc. All rights reserved.
</div>
 
    </footer>
  );
};

export default Footer;
