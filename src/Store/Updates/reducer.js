import { addEvents } from "../../api/Add";
import { deleteEventsApi } from "../../api/Delete";

export const initialStateEvents = {
  events: [],
  displayAddEventsMessage: false,
  addEventsMessage: "",
  isLoading: false,
  isLoadingDelete: false,
  isDeleted: false,
  deleteMessageFail: "",
};

export function eventsReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_EVENTS": {
      let newState;

      addEvents(action.payload, action.otherValue);
      newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    }

    case "ADD_TO_EVENTS_SUCCESS": {
      let newState;

      newState = {
        ...state,
        isLoading: false,
        addEventsMessage: "POST request successful",
        displayAddEventsMessage: true,
      };

      return newState;
    }
    case "ADD_TO_EVENTS_ERROR": {
      let newState;

      newState = {
        ...state,
        isLoading: false,
        addEventsMessage: "POST request failed",
        displayAddEventsMessage: true,
      };
      return newState;
    }

    case "CLOSE_MESSAGE": {
      const newState = {
        ...state,
        displayAddEventsMessage: false,
        addEventsMessage: "",
      };
      return newState;
    }

    case "DELETE_EVENTS": {
      let localState;
      deleteEventsApi(action.payload, action.otherFunction);
      localState = {
        ...state,
        isLoadingDelete: true,
      };
    }

    case "DELETE_EVENTS_SUCCESS": {
      let localState;
      localState = {
        ...state,
        isLoadingDelete: false,
        isDeleted: true,
      };
      return localState;
    }

    case "DELETE_EVENTS_FAILED": {
      let localState;
      localState = {
        ...state,
        isLoadingDelete: false,
        isDeleted: false,
        deleteMessageFail: "Error, This can't be deleted!!!",
      };
      return localState;
    }

    case "RESET_DELETE": {
      let localState;
      localState = {
        ...state,
        isDeleted: false,
        deleteMessageFail: "Error, you can't delete this message!",
      };
      return localState;
    }
    default:
      return state;
  }
}
