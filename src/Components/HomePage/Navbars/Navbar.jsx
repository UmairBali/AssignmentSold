import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import icon from "./asicon.jpeg"
import ok from "../../images/4.jpeg"
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Navbars() {
  return (
    <div>
      <Navbar className='bfbf' bg="primary" data-bs-theme="dark">

        <Container>
          <Nav className="me-auto hyy">
            <img className='imagofnav' src={icon} alt="" />
            <div className="paddingleft"></div>
            <Nav.Link className='ffff ' href="#home">Listing</Nav.Link>
            <Nav.Link className='ffff' href="#features">List Properties</Nav.Link>
            <Nav.Link className='ffff'href="#pricing">Final Deals</Nav.Link>
            <Nav.Link className='ffff' href="#home">How it Works</Nav.Link>
            <Nav.Link className='ffff' href="#home">Find an agent</Nav.Link>
            <Nav.Link className='ffff' href="#home">Priceing</Nav.Link>
            <Nav.Link className='ffff pb-4' href="#home">Contact Us</Nav.Link>
          </Nav>
       <div className='p-1 '>
<button type="button" className='btn3'><FavoriteBorderIcon/></button>
       </div>
          <button className='select  p-2 btn2 ' type="button "> <PersonIcon/>  Login</button >
     
       
          

        </Container>
 
      </Navbar>

      <br />
    </div>
  )
}
