import { Route, Routes } from "react-router-dom";
import React, { useReducer } from "react";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./common/Navbar/Navbar";
import AddEvents from "./admin/AddEvents/AddEvents";
import Sports  from "../src/components/Sports/Sports";
import Comedy from "./components/Comedy/Comedy";
import LogIn from "./User/LogIn";
import Register from "./User/Register";
import Footer from "./common/Footer/Footer";
import Events from "./components/Events/Events";
import EventsList from "./components/Events/EventList";
import Eventsdetails from "./components/Events/EventDetails";
import Music from "./components/Music/Music";
import Movies from "./components/Movies/Movies";
import Wellness from "./components/Wellness/Wellness";
import { EventsContext } from "./Store/Updates/context";
import { initialStateEvents, eventsReducer} from "./Store/Updates/reducer";





function App() {
  const [ stateGlobalEvents, dispatchEvents] = useReducer(
    eventsReducer,
    initialStateEvents
  );
  const eventsContextValue = {
    stateGlobalEvents,
    dispatchEvents,
  };

  return (
   <EventsContext.Provider value={eventsContextValue}>
  <Navbar />
 
      <Routes>
     
11        <Route path ="/event/:id" component={<Eventsdetails/>} />
      <Route path="/wellness" element={<Wellness />} />
        <Route path="/events" element={< Events/>} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/comedy" element={<Comedy/>} />
      <Route path="/Sports" element={< Sports />} />
      <Route path="/music" element={< Music  />} />
      <Route path="/user/register" element={< Register />} />
      <Route path="/user/login" element={< LogIn />} />
      <Route path="/addevents" element={< AddEvents/>} />
      <Route path="/home" element={< Homepage/>} />
        <Route path="/" element={< Homepage/>} />
      </Routes>
      <Footer />
      </EventsContext.Provider>
  );
};

export default App;
