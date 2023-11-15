
import { deleteEventsActionFailed,   deleteEventsActionSuccess } from "../Store/Updates/actions";

export const deleteEventsApi = ( id, dispatchEvent) => {
    fetch(`http://localhost:3003/events/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json",
        },
    })


.then((response) => response.json())
.then(() => {
    const deleteEventsActionSuccess = deleteEventsActionSuccess();
    dispatchEvent(deleteEventsActionSuccess);
})
.catch(() => {
    const deleteActionFailed = deleteEventsActionFailed();
    dispatchEvent(deleteEventsActionFailed);
});


};