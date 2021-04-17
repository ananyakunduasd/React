import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar1 from '../component/navbar'
import Search1 from '../search/search'
import Home1 from './home'
import Login1 from './login'
import Register1 from './register'
import Pcart from '../product/products/productgrid'
import Pcart1 from '../product/productdetails/pdetailgrid'
import  Cart from '../cart/cgrid'
import Subcatagory1 from '../homesection/subcatagory'



export default function Router1(){

    return(
        <>
        <Router>
            <Navbar1></Navbar1>
            {/* <Search1></Search1> */}
          
            
            <Route>
                <Switch>
                    <Route exact path="/" component={Home1}/>
                    <Route exact path="/home" component={Home1}/>
                    <Route exact path="/login" component={Login1}/>
                    <Route exact path="/register" component={Register1}/>
                    <Route exact path="/product" component={Pcart}/>
                    <Route exact path="/products/:id" component={Pcart1}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/catagory/:sub" component={Subcatagory1}/>
                  
                </Switch>
            </Route>
        </Router>
        </>
    )
} 