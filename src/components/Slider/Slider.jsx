import React from "react";
import { Carousel,  } from "react-bootstrap";
import CaruselImgUnu from "../../assets/images/sliderunu.jpeg"
import CaruselImgDoi from "../../assets/images/sliderdoi.jpeg"
import CaruselImgTrei from "../../assets/images/slidertrei.jpeg"
import CaruselImgPatru from "../../assets/images/sliderpatru.jpeg"
 import CaruselImgCinci from "../../assets/images/slidercinci.jpeg"
 import CaruselImgSase from"../../assets/images/slidersase.jpeg"





function Carusel() {

    return (
     
      <Carousel>
        <Carousel.Item>
        
          <img
            className="d-block w-100"
            src={CaruselImgUnu}
            alt=""
          />
        </Carousel.Item>
  
        <Carousel.Item>
          <img 
          className="d-block w-100"
          src={CaruselImgDoi}
          alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
        <img 
          className="d-block w-100"
          src={CaruselImgTrei}
          alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
        <img 
          className="d-block w-100"
          src={CaruselImgPatru}
          alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
        <img 
          className="d-block w-100"
          src={CaruselImgCinci}
          alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
        <img 
          className="d-block w-100"
          src={CaruselImgSase}
          alt=""/>
        </Carousel.Item>
      </Carousel>
       );
      }
      
      
  
  
  export default Carusel;
  
  