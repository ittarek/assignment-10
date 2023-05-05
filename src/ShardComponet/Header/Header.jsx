import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-bootstrap";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
// import Destination from './../../Pages/Destination/Destination';

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
  const handleToltip = () => {
    tippy("#myButton", {
      content: user?.displayName || "hello",
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
      className=" bg-transparent shadow-lg   position-relative"
    >
      <Container className="d-flex position-sticky-top ">
        <div className="rounded-lg ">
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
            className="navbar-nav d-flex align-items-center justify-content-between "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="nav-link text-decoration-none"
              style={navLinkStyle}
              to="/"
            >
              {" "}
              Home
            </NavLink>

            <NavLink
              to="/destination"
              style={navLinkStyle}
              className="mx-2    nav-link text-decoration-none"
            >
              {" "}
              Destination
            </NavLink>

            <NavLink
              className="text-decoration-none nav-link"
              style={navLinkStyle}
              to="/blog"
            >
              {" "}
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              style={navLinkStyle}
              className="mx-2 nav-link text-decoration-none"
            >
              {" "}
              Contact
            </NavLink>

            {user?.email ? (
              <NavLink
                onClick={handleLogOut}
                style={navLinkStyle}
                className="btn btn-outline-info  btn-success  nav-link"
              >
                LogOut
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                style={navLinkStyle}
                className="btn btn-outline-info btn-success nav-link "
              >
                {" "}
                Login
              </NavLink>
            )}

            {user?.email && (
              <span className="text-secondary ms-3 border-danger border-4 rounded-2">
                {user.displayName}{" "}
              </span>
            )}

            {user?.email && (
              <li onMouseOver={handleToltip} className=" ms-3  ">
                {" "}
                {
                  <img
                    id="myButton"
                    className="round"
                    src={user.photoURL}
                    alt=""
                  />
                }{" "}
              </li>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
