import { addToEventsSuccess, addToEventsError } from "../Store/Updates/actions";

export const addEvents = (data, dispatch) => {
    fetch("http://localhost:3003/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        const functionOfAddSuccess = addToEventsSuccess();
        dispatch(functionOfAddSuccess);
        return;
      })
      .catch(() => {
        const functionOfAddError = addToEventsError();
        dispatch(functionOfAddError);
        return;
      });
  };