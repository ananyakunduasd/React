import React from 'react'
import '../style/comp.css'
import { Container,Form,Button,Card } from 'react-bootstrap'
import {useFormik} from 'formik'
import { useDispatch } from 'react-redux'
import {signUp} from '../action/auth.action'
import {BiLogInCircle} from 'react-icons/bi'



const Register1=()=>{

    const backstyle={
        backgroundColor: "#8CCEAD",
          padding: "10px",  
          fontFamily: "Arial" ,
          width:"450px",
          marginTop:"30px",
          borderRadius:"0.25rem",
          boxShadow: "-30px 30px 20px rgba(0,0,0,0.3)"
      }

  const dispatch = useDispatch();
  const formik = useFormik({
      initialValues:{
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      error:{firstname:"  ",lastname:"  ",email:"  ",password:"  "}},
      validate:validation,
      onSubmit:(value)=>
      {
          const fval = {...formik.values}
          console.log("onsubmit",value);
          if(fval.error.firstname || !fval.firstname)
          {
              alert("Enter Valid name");
          }
          if(fval.error.lastname || !fval.lastname)
          {
              alert("Enter Valid name");
          }
          else if(fval.error.email || !fval.email)
          {
              alert("Enter Valid email");
          }
          else if(fval.error.password || !fval.password)
          {
              alert("Enter Valid password");
          }
          else
          {
              const firstname = fval.firstname;
              const lastname = fval.lastname;
              const email = fval.email;
              const password = fval.password;
              const user = {firstname,lastname,email,password}
              console.log(user);
              dispatch(signUp(user));
          }
      }
  })

  function validation()
  {
      const isValid = {...formik.values};
      const firstnameValidity = RegExp(/^([a-zA-Z]{4,})+$/i)
      const lastnameValidity = RegExp(/^([a-zA-Z]{2,})+$/i)

      const emailValidity = RegExp(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i)

      const passwordValidity = RegExp(/^([a-zA-Z0-9]{6,})+$/i)

      if(isValid.firstname)
      {
          isValid.error.firstname= firstnameValidity.test(isValid.firstname) ? "" : "* Not Valid";
      }
      if(isValid.lastname)
      {
          isValid.error.lastname= lastnameValidity.test(isValid.lastname) ? "" : "* Not Valid";
      }
      if(isValid.email)
      {
          isValid.error.email= emailValidity.test(isValid.email) ? "" : "* Not Valid";
      }
      if(isValid.password)
      {
          isValid.error.password= passwordValidity.test(isValid.password) ? "" : "* Not Valid";
      }
      else
      {

          formik.values={...isValid}
      }

  }


  return(
      <>
      
      <Container style={backstyle}>
    
          <Form onSubmit={formik.handleSubmit} >
          <h5 style={{textAlign:"center"}}>Create Account</h5><br/>
                      <Form.Group controlId="formGridFirstname">
                      <Form.Label>First Name</Form.Label>
                          <Form.Control className='formcontrolr' type="text" onChange={formik.handleChange} name="firstname" placeholder="Enter Firstname" />
                          {formik.values.error.firstname.length > 0 && (<p>{formik.values.error.firstname}</p>)}
                      </Form.Group>

                      <Form.Group controlId="formGridLastname">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control className='formcontrolr' type="text" onChange={formik.handleChange} name="lastname" placeholder="Enter Lastname" />
                      {formik.values.error.lastname.length > 0 && (<p>{formik.values.error.lastname}</p>)}
                      </Form.Group>

                      <Form.Group controlId="formGridEmail">
                      <Form.Label>Email Address</Form.Label>
                          <Form.Control className='formcontrolr' type="email" onChange={formik.handleChange} name="email" placeholder="Enter email" />
                          {formik.values.error.email.length > 0 && (<p>{formik.values.error.email}</p>)}
                      </Form.Group>

                      <Form.Group controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                          <Form.Control className='formcontrolr' type="password" onChange={formik.handleChange} name="password" placeholder="Password" />
                          {formik.values.error.password.length > 0 && (<p>{formik.values.error.password}</p>)}
                      </Form.Group><br/>
                      <Form.Group controlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="I agree all statement in Terms of service " />
                     </Form.Group>


                  <Card.Text>
                      <Button type="submit" size="sm" block>Signup</Button>
                  </Card.Text>
                 <br/> <p><h6>Already have an accout?</h6><a href="/login"><BiLogInCircle/>Login here</a></p>
              </Form>

      </Container>
      </>
  )
}

export default Register1;
