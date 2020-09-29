import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Aboutus from './Aboutus';
import Girgat from './Girgat';
import Contactus from './Contactus';
import Products from './Products';
import PersistentDrawerRight from './MobileNavbar';
import {GlobalMobile} from '../App.js';
import GirgatPic from './Girgat.png';




export default function Webswitch() {

  const isMobile = useContext(GlobalMobile)

  const Navbar = () => {
    return (
      <div className="NavBar">
        <br />
        <br />
        <br />
        
        <ul className="components">
         
          <li>
            <Link to="/Contactus">Contact Us</Link>
          </li>

          <li>
            <Link to="/Products">Products</Link>
          </li>

          <li>
            <Link to="/Aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

        </ul>
      </div>
    )
  }



  return (
    <Router>
      <div>
      <ul>
          <Link to="/">
            <img width="100" height="62" src={GirgatPic} className="logo" alt="Junto Logo" />
          </Link>
        </ul>


        {isMobile ? <PersistentDrawerRight />: <Navbar />}

        <Switch>
          <Route exact path="/"> <Girgat /> </Route>
          <Route path="/Aboutus"> <Aboutus /> </Route>
          <Route exact path="/Products"> <Products /> </Route>
          <Route path="/Contactus"> <Contactus /> </Route>
          <Route exact path="/"> <Girgat /> </Route>
          <Route path="*"> <h2>404 Page not found</h2> </Route>
        </Switch>
      </div>
    </Router>
  );
}