import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import icon from "./asicon.jpeg";
import ok from "../../images/4.jpeg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink } from "react-router-dom";
export default function Navbars() {
  return (
    <div>
      <Navbar className="bfbf" bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto hyy">
            <img className="imagofnav" src={icon} alt="" />
            <div className="paddingleft mb-5"></div>
            <div className="naiinsid">
            <NavLink className="td-none" to="/">
              <a className="ffff td-none">Listing</a>
            </NavLink>
            <NavLink className="td-none" to="/ListProperty">
              <a className="ffff td-none">List Properties</a>
            </NavLink>
            <NavLink className="td-none" to="/Finaldeals">
              <a className="ffff td-none">Final Deals</a>
            </NavLink>
            <NavLink className="td-none" to="/Works">
              <a className="ffff td-none">How it Works</a>
            </NavLink>
            <NavLink className="td-none" to="/Agent">
              <a className="ffff td-none">Find an agent</a>
            </NavLink>
            <NavLink  className="td-none" to="/Priceing">
              <a className="ffff td-none">Pricing</a>
            </NavLink>
            <NavLink className="td-none" to="/Contact">
              <a className="ffff td-none">Contact Us</a>
            </NavLink>
            </div>
          </Nav>
          <div className="p-1 ">
            <button type="button" className="btn3">
              <FavoriteBorderIcon />
            </button>
          </div>
          <button className="select  p-2 btn2 " type="button ">
            {" "}
            <PersonIcon /> Login
          </button>
        </Container>
      </Navbar>

      <br />
    </div>
  );
}
