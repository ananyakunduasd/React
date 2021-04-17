import React from 'react'
import {Col,Container,Row} from 'react-bootstrap'


export default function Footer1(){
    return(
      <div style={{backgroundColor: "black"}}>
        <Container>
  <Row md={4}>
    <Col>
    <h5>Our Contact</h5>
          <address>
          <strong>InLine company Inc</strong>
          <div>JC Main Road, Near Silnile tower
					 Pin-21542 NewYork US.</div>
            </address>
            <p><i class="fa fa-phone" aria-hidden="true"></i>(123) 456-789 - 1255-12584
            ananya123@gmail.com
          </p>
          </Col> 
    <Col xs={6}>
      <h5>Quick Links</h5>
      <div> <a href="#">Latest Events</a></div>
      <div><a href="#">Terms and conditions</a></div>
      <div> <a href="#">Privacy policy</a></div>
      <div><a href="#">Career</a></div>
      <div><a href="#">Contact us</a></div>
    </Col>
    <Col>
    <h5 class="widgetheading">Latest posts</h5>
    <div><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></div>
    <div><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></div>
    <div><a href="#">Natus error sit voluptatem accusantium doloremque</a></div>
    </Col>
    <Col>
    <h5 class="widgetheading">Recent News</h5>
    <div><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></div>
    <div><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></div>
    <div><a href="#">Natus error sit voluptatem accusantium doloremque</a></div>
    </Col>
  </Row>
</Container>
</div>
    )
}