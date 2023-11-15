export function closeMessage() {
    return {
      type: "CLOSE_MESSAGE",
    };
  }
  
  export function addToEvents(events, dispatch) {
    return {
      type: "ADD_TO_EVENTS",
      payload: events,
      otherValue: dispatch,
    };
  }
  
  export function addToEventsSuccess() {
    return {
      type: "ADD_TO_EVENTS_SUCCESS",
    };
  }
  
  export function addToEventsError() {
    return {
      type: "ADD_TO_EVENTS_ERROR",
    };
  }

  export function deleteEventsAction (id, dispatchEvents) {
    return {
      type: "DELETE_FROM_EVENTS",
      payload: id,
      otherFunction: dispatchEvents,
    };
  }

  export function deleteEventsActionSuccess () {
    return {
      type: "DELETE_EVENTS_SUCCESS"
    };
  }

  export function deleteEventsActionFailed () {
    return {
      type:"DELETE_EVENTS_FAILED",
    };
  }

  export function deleteReset () {
    return {
      type: "RESET_DELETE",
    };
  }