import react, { useEffect } from 'react'
import {Card,Button, Row,Col, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { catagory } from '../action/product.action';

export default function Productss1(){

const sectionstyle={
    paddingTop: "64px",
    paddingBottom: "64px"
    }
    
   
const dispatch= useDispatch();
 useEffect(()=>{
   dispatch(catagory());
 },[dispatch])


    return(
        <>
        <div style={sectionstyle}>
       <Container>
        <Row>
        <Col xs={12} md={3} sm={6}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>ELECTRONICS</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="catagory/electronics">
    <Button  style={{backgroundColor:"#A4148E ",borderColor:"black"}}>SHOPE NOW</Button></Link>
  </Card.Body>
</Card>
    </Col>
    <Col xs={12} md={3} sm={6}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>JEWELERY</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="catagory/jewelery">
    <Button  style={{backgroundColor:"#A4148E ",borderColor:"black"}}>SHOPE NOW</Button></Link>
  </Card.Body>
</Card>

    </Col>
    <Col xs={12} md={3} sm={6}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>MEN CLOTHING</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="catagory/men clothing">
    <Button  style={{backgroundColor:"#A4148E ",borderColor:"black"}}>SHOPE NOW</Button></Link>
  </Card.Body>
</Card>
    </Col>

    <Col xs={12} md={3} sm={6}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>WOMEN CLOTHING</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="catagory/women clothing">
    <Button  style={{backgroundColor:"#A4148E ",borderColor:"black"}}>SHOPE NOW</Button></Link>
  </Card.Body>
</Card>
    </Col>
</Row>
</Container>
</div>
</>
    )
}