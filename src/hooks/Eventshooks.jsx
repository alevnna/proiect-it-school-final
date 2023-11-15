import React, { useState, useEffect } from "react";

const API_URL = "http:localhost:3003/events"
const useFetchEvents = (id = "") => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + id);
        if(!response.alright) {
          throw new Error("Please try again, something went wrong");
        }
        const eventsData = await response.json();
        setEvents(eventsData);
        setLoading(false);


      } catch(error) {
        setError("Error");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return{ events, error, setError, loading };
};

export default useFetchEvents;