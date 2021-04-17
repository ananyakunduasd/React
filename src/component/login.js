import React from 'react'
import '../style/comp.css'
import Navbar1 from '../component/navbar'
import {Form,Container, Button} from 'react-bootstrap'
import {useFormik} from 'formik'
import {useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {signIn} from '../action/auth.action'
import {BiLogInCircle} from 'react-icons/bi'
import {TiArrowDownThick} from 'react-icons/ti'
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'


const Login1=()=>{
    <Navbar1></Navbar1>
    const backstyle={
        backgroundColor: "#8CCEAD",
          padding: "10px",  
          fontFamily: "Arial" ,
          width:"450px",
          marginTop:"100px",
          borderRadius:"0.25rem",
          boxShadow: "-30px 30px 20px rgba(0,0,0,0.3)"
      }
    const logstyle={
        textAlign:"center",
        fontFamily:"Patrick Hand SC"
    } 
    const imgstyle={
        width:"30%",
        borderRadius:"4.25rem",
    }

      const history=useHistory();
  
      const auth = useSelector(state=>state.authData)
      const dispatch = useDispatch()
      const formik = useFormik({
          initialValues:{
  
              email:"",
              password:""
          },
          validate:validation,
          onSubmit:(values)=>{
              console.log(values);
              dispatch(signIn(values))
          },
    
      })
     
      function validation ()
      {
          const errors ={}
          if(!formik.values.email){
              errors.email="email Required"
          }
          else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formik.values.email)){
             errors.email="invalid email"
          }
          if(!formik.values.password){
              errors.password="Password required"
          }
          return errors
      }
    

console.log('form errors',formik.errors)
              
  return(
      <>
     {/* <div style={{backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"}}> */}
      <Container style={backstyle}>
<Form onSubmit={formik.handleSubmit}>
    <img style={imgstyle} src="download.png"/>
    <h5 style={logstyle}>Login Here<TiArrowDownThick/></h5>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label><HiOutlineMail/>
    <Form.Control className='formcontroll' type="email" name="email" placeholder="Enter email"  onChange={formik.handleChange} />
    {formik.errors.email?<div style={{color:"red",fontSize:15}}>{formik.errors.email}</div>:null}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label><RiLockPasswordLine/>
    <Form.Control className='formcontroll' type="password" name="password" placeholder="Password" onChange={formik.handleChange} />
    {formik.errors.password?<div style={{color:"red",fontSize:15}}>{formik.errors.password}</div>:null}
  </Form.Group>
  <a href="#home">Forgot Password</a>
  <p style={{textAlign: "right"}}>
  <Button variant="primary" type="submit">
    Login Now
  </Button>
  </p>
  <p>
  <h6>Not an accout?</h6>
  <a href="/register"><BiLogInCircle/>Signup here</a>
  </p>
</Form>
</Container>
{/* </div> */}
      </>
  )
}

export default Login1;
