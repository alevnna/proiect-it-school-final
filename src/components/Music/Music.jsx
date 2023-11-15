import React from "react";
import { useState, useEffect } from "react";

import { Title, CardsContainer } from "./Music.styles";
import {  Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';





const Music = () =>{
  const [ events, setEvents] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
       try {
         const response = await fetch('http://localhost:3003/music');
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

    <Title> Music</Title>
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
  );
};

export default Music;