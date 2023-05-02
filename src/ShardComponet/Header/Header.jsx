import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

import "./Header.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, loggedOut } = useContext(AuthContext);
  // console.log("user header",user);

  // LogOut function
  const handleLogOut = () => {
    loggedOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Active link function
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeigth: isActive ? "bold" : "none",

      textDecoration: isActive ? "none" : "uderline",
      color: isActive ? "red" : "none",
    };
  };
  return (
    <Navbar
      bg=""
      expand="lg"
      className=" bg-transparent shadow-lg mb-5 position-relative"
    >
      <Container className="d-flex  bg-transparent">
        <div className="rounded-lg">
          <img
            className="logo  m-auto   "
            src="https://img.freepik.com/premium-vector/cooking-logo-design_636083-140.jpg?w=740"
            alt=""
          />
        </div>

        <Form className="d-flex search-box">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          {/* <Button variant="outline-warning"  >Search</Button> */}
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" className=" bg-info  " />
        <Navbar.Collapse>
          <Nav
            className="d-flex align-items-center justify-content-between"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink style={navLinkStyle} to="/">
              {" "}
              Home
            </NavLink>

            <NavLink to="/destination" style={navLinkStyle} className="mx-2">
              {" "}
              Destination
            </NavLink>

            <NavLink style={navLinkStyle} to="/blog">
              {" "}
              Blog
            </NavLink>

            <NavLink to="/contact" style={navLinkStyle} className="mx-2">
              {" "}
              Contact
            </NavLink>

            {user ? (
              <NavLink
                onClick={handleLogOut}
                style={navLinkStyle}
                className="btn btn-outline btn-success  "
              >
                LogOut
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                style={navLinkStyle}
                className="btn btn-outline btn-success  "
              >
                {" "}
                Login
              </NavLink>
            )}
         
            {
              user && <span className="text-secondary ms-3 border-danger border-4 rounded-2">{user.displayName}</span>
            }
            {/* {
              user && <span className=" ms-3 border-danger border-4 rounded-2">{user.photoUR}</span>
            } */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
