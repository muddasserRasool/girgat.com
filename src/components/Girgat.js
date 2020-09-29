import React, {useEffect } from "react";
import TypistAnimate from './Typist';
import { Link } from "react-router-dom";
import useWebAnimations, { bounce} from "@wellyshen/use-web-animations";
import TwoContainers from './twocontainers';
import Pic1 from './Media/1.jpg';





export default function Girgat() {
 

  const ArrowMove = useWebAnimations();


  useEffect(() => {
    const e1 = document.getElementById("icon");
    e1.addEventListener("mouseenter", (e) => {
      ArrowMove.animate({...bounce});
    });
  }, [ArrowMove]);

  return (
    <div className="MainBody">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <span>
      <h4 className="Hi">HI, WE AT GIRGAT.COM</h4>
      <h1 className="help">We're here to Make your</h1>
      <TypistAnimate />

      <br />
      <br />
      <ul className="how-we-work" id="icon" ref={ArrowMove.ref}>
        <li>
          <Link style={{ textDecoration: "none" }} to="/Aboutus">
            <span  className="Newbutton">Lets Get in Contact!</span></Link>
        </li>
      </ul>
      </span>
      <span>
        <img className="Pictures" src={Pic1} width="25%" height="25%" alt="1"/>
      </span>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TwoContainers />
      <br />
      <br />
      

    </div>
  )
}