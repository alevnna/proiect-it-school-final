import React, { useState, useContext} from "react";
import {EventsContext} from "../../Store/Updates/context"
import { addToEvents, closeMessage} from "../../Store/Updates/actions"
import { Button, Form, Alert, Spinner } from "react-bootstrap";
import { ContainerAdd, AddButton, ContainerButton, Title, ContainerF } from "./AddEvents.style";

const AddEVents = () => {
const {stateGlobalEvents, dispatchEvents } = useContext(EventsContext);

const [form, setForm] = useState({
name: "",
category: "",
year: "",
description: "",
price: "",
location: "",
ticket: "",

});

const changeFormData = (name, value) => {
    const localForm = {...form};
    localForm[name] = value;
    setForm(localForm)
};

const submit = () => {
    const actionAdd = addToEvents( form, dispatchEvents);
    dispatchEvents(actionAdd);
};

const closeSubmit = () => {
    const functionOfClose = closeMessage();
    dispatchEvents(functionOfClose);
}
    return (
        <ContainerF>
        <ContainerAdd>
          <Title>Add your event here</Title>  
            <div>
                <Alert 
                show={stateGlobalEvents?.displayAddEventsMessage}
                variant={
                    stateGlobalEvents?.addEventsMessage === "POST FAILED"
                    ? "danger"
                    : "success"
                }
                >
                     <Alert.Heading>My Alert</Alert.Heading>
            <p style={{ width: "300px" }}>{stateGlobalEvents?.addEventsMessage}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={closeSubmit} variant="outline-danger">
                Close
              </Button>
            </div>
          </Alert>
        </div>
        <div>
          
            <Form style={{ width: "100%" }}>
              {Object.keys(form).map((key, index) => (
                <Form.Group key={key} controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    {key.charAt(0).toUpperCase() + key.substring(1, key.length)}
                  </Form.Label>
                  <Form.Control
                    onBlur={(e) => {
                      changeFormData(key, e.target.value);
                    }}
                    placeholder={
                      key.charAt(0).toUpperCase() + key.substring(1, key.length)
                    }
                  />
                </Form.Group>
              ))}
            </Form>
          
        </div>
        <ContainerButton>
          {!stateGlobalEvents.isLoading && (
            <AddButton onClick={submit}>Add event</AddButton>
          )}
        </ContainerButton>
        </ContainerAdd>
        </ContainerF>
    )
        
    
};
export default AddEVents;