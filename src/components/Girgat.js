import React, {useEffect } from "react";
import TypistAnimate from './Typist';
import { Link } from "react-router-dom";
import useWebAnimations, { bounce} from "@wellyshen/use-web-animations";
import TwoContainers from './twocontainers';
import SingleLineGridList from './Swiper';





export default function Girgat() {
 

  const ArrowMove = useWebAnimations();


  useEffect(() => {
    const e1 = document.getElementById("icon");
    e1.addEventListener("mouseenter", (e) => {
      ArrowMove.animate({...bounce});
    });
  }, [ArrowMove]);

  return (
    <div >
      <br />
      <span>
      <h4 className="Hi">HI, WE AT GIRGAT.COM</h4>
      <h1 className="help">We're here to Make your &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
      <TypistAnimate />
      </span>
      <br />
      <br />
      <span>
      <ul className="how-we-work" id="icon" ref={ArrowMove.ref}>
        <li>
          <Link style={{ textDecoration: "none" }} to="/Aboutus">
            <span  className="Newbutton">Lets Get in Contact! </span></Link>
        </li>
      </ul>
      </span>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SingleLineGridList /> 
      
      
      {/* <span>
      <br />
      <br />
        <img className="Pictures" src={Pic1} width="35%" height="35%" alt="1"/>
      </span> */}
      {/* <SwiperExample /> */}
      
      <br />
      <TwoContainers />
      <br />
      <br />
      

    </div>
  )
}