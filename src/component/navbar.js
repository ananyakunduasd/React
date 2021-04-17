import React from 'react'
import {Nav,Navbar,Container,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';


export default function Navbar1(){

  const navstyle={
    backgroundColor: "#182D54"
  }

    return(
    <>
  <Navbar  expand="lg" variant="dark" style={navstyle}>
  <Container>
  <Navbar.Brand></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/home">Home<AiOutlineHome /></Link></Nav.Link>
      <Nav.Link><Link to="/product">Product</Link></Nav.Link>
      <Nav.Link ><Link to="/cart">Cart <TiShoppingCart/></Link></Nav.Link>
    </Nav>
    <Form inline>
    <Nav.Link><Link to="/login">Login</Link></Nav.Link>
    <Nav.Link><Link to="/register">Register</Link></Nav.Link>
    </Form>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
    </>
    )
}
