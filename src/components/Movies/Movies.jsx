import React, { useEffect, useState } from "react";
import { ContainerMovies, Title, HomeWrapper,  } from "./Movies.style";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";


const Movies = () => {
  const [events, setEvents] = useState();

  useEffect(() => 
  { 
     fetch (`http://localhost:3003/movies`)
       .then((response) => response.json()) 
       .then((event) => 
       { 
         setEvents(event); 
       }); 
  }, []);
 
  
  return (
 
<>

  
  <Title>Movies</Title>
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

export default Movies;