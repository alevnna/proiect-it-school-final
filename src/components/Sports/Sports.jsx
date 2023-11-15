import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {  Title} from "./Sportsstyle";
import Card from 'react-bootstrap/Card';


const Sports = () =>{
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

  <Title>Sports</Title>
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

</>

 );
};
     



export default Sports;