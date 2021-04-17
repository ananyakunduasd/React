import React, { useEffect } from "react";
import { productdel,incre,decre } from '../action/cart.action';
import { useSelector,useDispatch} from "react-redux";
import {Container, Form, Row,Col} from 'react-bootstrap'
import {MdDelete} from 'react-icons/md'



const Cart = () => {

const dispatch = useDispatch()

const cart = useSelector(state=>state.cartData)
var totalprice=0;
cart.products.map((e)=>{return totalprice=totalprice+(e.price * e.quantity)})

  const add = (data) => {
    console.log("increase", data);
    dispatch(incre(data));
  };
  
  const del = (data) => {
    console.log("decrease", data);
    dispatch(decre(data));
  };
  
  const pdel = (data) => {
    console.log("delete product", data);
    dispatch(productdel(data));
  };
  const cartData1 = useSelector((state) => state.cartData);
  console.log("cart.jsx", cartData1);


  return (
    <div >
      <h1>Cart Page</h1>

      <Container style={{width:"50%"}}>
      {cartData1.products.map((x) => (
        <div>
          <Row><Col xs={6} md={6} lg={6}>
          <img style={{ height: "10rem", width: "7rem" }} src={x.image} /></Col></Row>
          <Row><Col xs={6} md={6} lg={6}>
          {x.title}
          <button onClick={()=>{pdel(x.id)}}><MdDelete/></button>
          <br />
          <p>Quantity: {x.quantity}</p>
          <p style={{textAlign:"right", marginRight:"60px", padding:"10px" }}>
            {x.price*x.quantity+0.00}
          </p>
          <button onClick={()=>{add(x.id)}}>+</button>
          <button onClick={()=>{del(x.id)}}>-</button>
          </Col></Row>
        </div>
      ))}

    <p style={{textAlign:"right"}}>total={totalprice}</p>

      </Container>
      
    </div>
  );
};

export default Cart;