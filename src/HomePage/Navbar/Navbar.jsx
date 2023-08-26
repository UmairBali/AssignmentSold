import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import Button from 'react-bootstrap/Button';
import icon from "./asicon.png"
import FlagIcon from '@mui/icons-material/Flag';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Navbars() {
  return (
    <div>
       <Navbar className='navfull' bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            {/* <img src = "./asicon.png"   alt="" /> */}
            <img className='imgicon' src={icon} alt="" />
            <div className='allnav'>
            <Nav.Link className='homess' href="#home">Listing</Nav.Link>
            <Nav.Link className='homess' href="#features">List Properties</Nav.Link>
            <Nav.Link className='homess' href="#pricing">Final Deals</Nav.Link>
            <Nav.Link className='homess' href="#features">How it Works</Nav.Link>
            <Nav.Link className='homess' href="#pricing">Find an Agent</Nav.Link>
            <Nav.Link className='homess' href="#features">Pricing</Nav.Link>
            <Nav.Link className='homess' href="#pricing">Contact Us</Nav.Link>
            </div>
            <div className='engbtn'>
              <Button className='eng' variant="outline-light"><FlagIcon className='flgicon'/>EN</Button>{' '}
              </div>
            <div className='allbutton'>
            <Button className='login' variant="primary"> <PersonOutlineOutlinedIcon/> login</Button>{' '} 
            </div>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Navbars