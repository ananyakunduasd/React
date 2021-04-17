import React from 'react'
import '../style/comp.css'
import {Carousel} from 'react-bootstrap'


export default function Carousel1(){
  const imagestyle={
    width: "100%",
    height: "560px"
  }
    return(
        <section>
<Carousel fade indecators={false} prevIcon={false} nextIcon={false}>
  <Carousel.Item style={imagestyle}>
    <img
      className="d-block w-100"
      src="kisscc0-business-startup-company-organization-computer-business-5afdb0a6b27826.662498271526575270731.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={imagestyle}>
    <img
      className="d-block w-100"
      src="17-171459_birmingham-home-insurance-insurance-company-background.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</section>
)
}