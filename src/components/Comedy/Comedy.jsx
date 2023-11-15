import React, { useEffect, useState } from "react";
import { CardsContainer, Title } from "./Comedy.style";

import { Button, Card, Col, Row, CardImg } from "react-bootstrap";


const Comedy = () => { 
  const [ events, setEvents] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
       try {
         const response = await fetch('http://localhost:3003/comedy');
         const data = await response.json();
         setEvents(data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
    };
   
    fetchData();
   }, []);



  return (
    <>
    
    <Title> Comedy</Title>
    <CardsContainer>
      {events.map((event) => (
        <Card key={event.id} style={{ width: "20rem", color: "pink"}}>
          <Card.Img variant='top' src={event?.img} className='card-img' />
          <Card.Body>
          <Card.Title>{event?.name}</Card.Title>
          <Card.Text>{event?.content}</Card.Text>
          <Button variant='light'>See more</Button>
          </Card.Body>
        </Card>
      ))}
    </CardsContainer>
    
    
    </>
  )
};
 
export default Comedy;