import React, { useEffect, useState } from "react";
import { Background_color } from "../../constants/colors";
import { Link } from "react-router-dom";
import { Navbar } from "../../common/Navbar/Navbar"
import {Footer } from "../../common/Footer/Footer"
import { HomeWrapper,  Title } from "./Homepage.style";
import Card from 'react-bootstrap/Card';
import Carusel from "../Slider/Slider"

const Homepage = () => {
  const [events, setEvents] = useState();

  useEffect(() => 
  { 
     fetch (`http://localhost:3003/events`)
       .then((response) => response.json()) 
       .then((event) => 
       { 
         setEvents(event); 
       }); 
  }, []);
 
  
  return (
 
<>
  <Carusel/>

  <HomeWrapper>
  <Title>Saptamana aceasta</Title>
  {events?.map((event, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={event?.img} />
          <Card.Body>
            <Card.Title>{event?.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              {event?.year}
            </Card.Text>
            <Link to={`/events/${event.id}`}>See events</Link>
          </Card.Body>
        </Card>
      ))}

    </HomeWrapper>
</>


  );
  }

export default Homepage;