import React, { useEffect, useState } from "react";
import { CardsContainer, Title, HomeWrapper, CardBody } from "./Wellness.style"
import { Link } from "react-router-dom";
import { Button,  } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Nav } from "../../common/Nav/Nav";



const Wellness = () => {
  const [ events, setEvents] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
       try {
         const response = await fetch('http://localhost:3003/events');
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
    <Nav />
    <Title> Wellness</Title>
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
export default Wellness;